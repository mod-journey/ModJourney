let changeRecipeToATO = (event, active, debug) => {
    if (!active) return;
    ServerEvents.recipes(event => {
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
                    console.log("Start: " + ObjKeyVal)
                    ObjKeyVal.remove(key)
                    ObjKeyVal.add(key, `alltheores:${metall}_${form}`)
                    event.custom(recipe.json).id(recipe.getId())
                    console.log("Ende: " + ObjKeyVal)
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
         * Filtert alle bekannten types durch. Diese sind in global.mjOres.craftingTypes definiert. Anschließend kann
         * man die vorhandenen Builder benutzen, oder auch eigene Filter mit anlegen. Funktionen, Auslagerung, der Übersichtlichkeit benutzen.
         */
        global.mjOres.craftingTypes.forEach(element => {
            console.log("_______________" + element + "_______________")

            event.forEachRecipe({}, r => {
                if (!(r.json.get("type").toString() === element)) return;

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
                        console.log("Some Recipe-ID are not tracked with ouput \"result\":")
                        console.log(r.getId())
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
                            console.log("Some Recipe-ID are not tracked with ouput \"results\":")
                            console.log(r.getId())
                        }
                    }
                }
                else if (r.json.get("output") !== null) {
                    if (r.json.get("output").has("id")) {
                        findOres(r.json.get("output").get("id"))
                        changeOutput(r, r.json.get("output"), "id")
                    } else {
                        console.log("Some Recipe-ID are not tracked with ouput \"output\":")
                        console.log(r.getId())
                    }
                }
                else {
                    console.log("Some Recipe-ID are not tracked with ouput \"unknown\":")
                    console.log(r.getId())
                };
            });
        });
    });
}