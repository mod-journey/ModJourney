ServerEvents.recipes(event => {

    let craftingTypes = [
        '"minecraft:smelting"',
        '"minecraft:blasting"',

        '"immersiveengineering:arc_furnace"',
        '"immersiveengineering:crusher"',
        '"immersiveengineering:metal_press"',
        '"immersiveengineering:alloy"',

        '"mekanism:enriching"',
        '"mekanism:injecting"',
        '"mekanism:purifying"',
        '"mekanism:crushing"',
        '"mekanism:washing"',
        '"mekanism:crystallizing"',
        '"mekanism:dissolution"',
        '"mekanism:chemical_conversion"',

        '"enderio:sag_milling"',
        '"enderio:alloy_smelting"',



        '"minecraft:crafting_shapeless"',
        '"minecraft:crafting_shaped"'
    ]



    craftingTypes.forEach(element => {
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