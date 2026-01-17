/**
 * This script replaces mod-specific ores and metals in recipes with their ATO counterpart
 */

/**
 * @param {$RecipesKubeEvent} event
 * @param {boolean} active
 * @param {boolean} debug
 */
let changeRecipeToATO = (event, active, debug) => {
    if (!active) return;
    //ServerEvents.recipes(event => {
        let ATO = global.mjOres.ato
        let ATO_ALL = [ATO.metall, ATO.alloy, ATO.vanilla]
        let metall = null
        let form = null
        let formSecond = null
        let special = false

        /**
         * @param {String} output Die Item-ID z.b. r.json.get("output").get("item")
         * @returns {String} metall-Name aus ATO.type.name und bei außnahmen den zweiten String. Hardcoded
         */
        function findOres(output) {
            let excludeATM = /^(?!"alltheores:).*/
            if (!(excludeATM.test(output))) return;

            ATO_ALL.forEach(_ATO => {
                for (let i = 0; i < _ATO.length; i++) {
                    if (_ATO[i].regex.test(output)) {
                        metall = _ATO[i].name
                        //Prüfe ob Vanilla Erze, nur teilweise in ATM implementiert...
                        if (["iron", "copper", "gold", "diamomd"].includes(metall)) {
                            special = true
                        }
                        for (let j = 0; j < ATO.types.length; j++) {
                            if (ATO.types[j].regex.test(output)) {
                                form = ATO.types[j].name
                                if (form === "dirty") {
                                    formSecond = "dust"
                                } else if (form === "raw") {
                                    formSecond = "block"
                                }
                            }
                        }
                    }
                }
            });
        }

        /**
         *
         * @param {$Gson} recipe Das gerade zu bearbeitende Rezept
         * @param {*} ObjKeyVal der Pfad um Key zu entfernen
         * @param {*} key der zu entfernende Key, Value wird aus findOres() ermittelt.
         */
        function changeOutput(recipe, ObjKeyVal, key) {
            if (global.mjOres.excludeItemID.includes(ObjKeyVal.get(key) + '')) {
                form = null; metall = null; formSecond = null; special = false
            }
            if (special && !(form === null) && !(metall === null)) {
                if (!(["ingot", "nugget", "block", "raw", "ore", "dirty"].includes(form))) {
                    //console.log("Start: " + ObjKeyVal)
                    ObjKeyVal.remove(key)
                    ObjKeyVal.add(key, `alltheores:${metall}_${form}`)
                    event.custom(recipe.json).id(recipe.getId())
                    //console.log("Ende: " + ObjKeyVal)
                    form = null; metall = null; formSecond = null;
                }
            }
            if (!(special) && !(form === null) && !(metall === null)) {
                //console.log("Start: " + ObjKeyVal)
                ObjKeyVal.remove(key)

                if (formSecond === null) {
                    ObjKeyVal.add(key, `alltheores:${metall}_${form}`)
                } else if (formSecond === "dust" || formSecond === "block") {
                    ObjKeyVal.add(key, `alltheores:${form}_${metall}_${formSecond}`)
                }
                event.custom(recipe.json).id(recipe.getId())
                //console.log("Ende: " + ObjKeyVal)
            }
            //Nach Rezeptanlegung, werden Werte für den Nächsten lauf wieder genullt.
            form = null; metall = null; formSecond = null; special = false
        }


        /**
         * This function replaces items in recipe inputs with tags
         *
         * @param {$KubeRecipe} r Das gerade zu bearbeitende Rezept
         *
         * TODO rewrite this to be re-usable for multiple recipes and item types (See "findOres()")
         */
        function replaceInputWithTags(r) {
            let type = r.json.get("type").toString()
            type = type.substring(1, type.length() -1)

            // replace inputs for recipes of type crafting_shaped/ crafting_shapeless
            if (type === 'minecraft:crafting_shaped') {
                if (r.json.get('key') !== null) {
                    //console.log('___Recipe: ' + r.json.get("type").toString() + ':' + r.getId());
                    //console.log(r.json.get('key'));

                    Object.values(r.json.get('key').getAsJsonObject().asMap()).forEach(entry => {

                        if (entry.size() === 1) {
                            if (entry.get('item')) {
                                console.log('key with Item ' + entry.get('item').toString());
                                // TODO Replace item with Tag
                                //replaceInputWithTags()
                            } /*else if (entry.get('tag')) {
                                    // Skip tags
                                }*/
                        } else {
                            console.log('TODO handle recipes with Array keys for recipe ' + r.getId())
                            console.log(entry)
                        }
                    })
                }
            }
            else if (type === 'minecraft:crafting_shapeless') {
                console.log('TODO handle shapeless recipes: ' + r.getId());
                console.log(r.json.get('ingredients'));
            } else {
                // Other recipe type are currently not supported
            }
        }

        /**
         * Filtert alle bekannten types durch. Diese sind in global.mjOres.craftingTypes definiert. Anschließend kann
         * man die vorhandenen Builder benutzen, oder auch eigene Filter mit anlegen. Funktionen, Auslagerung, der Übersichtlichkeit benutzen.
         */
        global.mjOres.craftingTypes.forEach(element => {
            if (debug) console.log("_______________" + element + "_______________")

            event.forEachRecipe({type: element.substring(1, element.length-1)}, r => {
                if (!(r.json.get("type").toString() === element)) return;

                // TODO move this to input replace section (when we have such a section)
                if (r.getId() === 'stellaris:misc/modules/base_module_tier_2') {
                    //console.log('___Was stimmt hier nicht?');
                    event.replaceInput({id: r.getId()}, 'stellaris:steel_nugget', '#c:nuggets/steel');
                }

                //replaceInputWithTags(r);

                if (r.json.get("result") !== null) {
                    if (r.json.get("result").get("id") !== null) {
                        findOres(r.json.get("result").get("id"))
                        changeOutput(r, r.json.get("result"), "id")
                    }
                    else if (r.json.get("result").get("item") !== null) {
                        findOres(r.json.get("result").get("item"))
                        changeOutput(r, r.json.get("result"), "item")
                    }
                    else if (r.json.get("result").get("basePredicate") !== null) {
                        findOres(r.json.get("result").get("basePredicate").get("item"))
                        changeOutput(r, r.json.get("result").get("basePredicate"), "item")
                    }
                    else if (r.json.get("result").get("tag") !== null) {
                        //Hahahaha du mich auch!
                    }
                    else {
                        if (debug) console.log("Some Recipe-ID are not tracked with output \"result\": " + r.getId())
                    }
                }
                else if ((r.json.get("results") !== null)) {
                    if (r.json.get("results").size() === 1) {
                        if (r.json.get("results").get(0).has("item")) {
                            findOres(r.json.get("results").get(0).has("item"))
                            changeOutput(r, r.json.get("results").get(0), "item")
                        }
                        else if (r.json.get("results").get(0).has("basePredicate")) {
                            findOres(r.json.get("results").get(0).has("basePredicate"))
                            changeOutput(r, r.json.get("results").get(0), "basePredicate")
                        }
                        else if (r.json.get("results").get(0).has("tag")) {
                            //Hahahaha du mich auch!²
                        }
                        else if (r.json.get("results").get(0).has("id")) {
                            findOres(r.json.get("results").get(0).get("id"))
                            changeOutput(r, r.json.get("results").get(0), "id")
                        }
                        else {
                            console.log("Some Recipe-ID are not tracked with output \"results\": " + r.getId())
                        }
                    }
                }
                else if (r.json.get("output") !== null) {
                    if (r.json.get("output").has("id")) {
                        findOres(r.json.get("output").get("id"))
                        changeOutput(r, r.json.get("output"), "id")
                    } else {
                        if (debug) console.log("Some Recipe-ID are not tracked with output \"output\": " + r.getId())
                    }
                }
                else {
                    if (debug) console.log("Some Recipe-ID are not tracked with output \"unknown\": " + r.getId())
                }
            });
        });
    //});
}


/**
 * Adds recipes to craft each dust to ato dust
 *
 * @param {$RecipesKubeEvent} event
 * @param {boolean} active
 * @param {boolean} debug
 */
function addDustConvertRecipes(event, active, debug) {
    if (!active) return;

    // combine all 3 arrays
    let ATO_ALL = []
        .concat(global.mjOres.ato.metall)
        .concat(global.mjOres.ato.alloy)
        .concat(global.mjOres.ato.vanilla);

    ATO_ALL.forEach(material => {
        event.shapeless(`alltheores:${material.name}_dust`, `#c:dusts/${material.name}`)
            .id(`mod_journey:shapeless/convert_${material.name}_dust`)
    })
}
