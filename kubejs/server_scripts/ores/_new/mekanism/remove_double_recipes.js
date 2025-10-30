ServerEvents.recipes(event => {

    let ATO = global.mjOres.ato
    let ATO_ALL = [ATO.metall, ATO.alloy, ATO.vanilla]
    let metall = null
    let form = null
    let formSecond = null
    let special = false

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
            console.log("Start: " + ObjKeyVal)
            ObjKeyVal.remove(key)

            if (formSecond === null) {
                ObjKeyVal.add(key, `alltheores:${metall}_${form}`)
            } else if (formSecond === "dust" || formSecond === "block") {
                ObjKeyVal.add(key, `alltheores:${form}_${metall}_${formSecond}`)
            }
            event.custom(recipe.json).id(recipe.getId())
            console.log("Ende: " + ObjKeyVal)
        }
        //Nach Rezeptanlegung, werden Werte für den Nächsten lauf wieder genullt.
        form = null; metall = null; formSecond = null ; special = false
    }
        console.log("_______________" + element + "_______________")

        event.forEachRecipe({}, r => {

            function getType(name) {
                if (r.json.get("type").toString() === name) {
                    return true

                } else {
                    return false

                }
            }

            if (getType(element)) {
                if (r.json.get("result") !== null) {
                    if (r.json.get("result").get("id") !== null) {
                        if (check.test(r.json.get("result").get("id"))) {
                            console.log(r.json.get("result").get("id"))
                        }
                    }
                    else if (r.json.get("result").get("item") !== null) {

                    }
                    else if (r.json.get("result").get("basePredicate") !== null) {

                    }
                    else if (r.json.get("result").get("tag") !== null) {

                    }
                    else {
                        console.log(r.getId())
                        console.log(r.json.get("result"))
                    }
                }
                else if ((r.json.get("results") !== null)) {
                    if (r.json.get("results").size() === 1) {
                        if (r.json.get("results").get(0).has("item")) {

                        }
                        else if (r.json.get("results").get(0).has("basePredicate")) {

                        }
                        else if (r.json.get("results").get(0).has("tag")) {

                        }
                        else if (r.json.get("results").get(0).has("id")) {

                        }
                        else {
                            console.log(r.json.get("results").get(0))
                        }
                    }
                }
                else if (r.json.get("output") !== null) {
                    if (r.json.get("output").has("id")) {

                    } else {
                        console.log(r.json.get("output"))
                    }
                }
                else {
                    console.log(r.getId())
                    console.log(r.json)
                };

            };
        });
    });
})