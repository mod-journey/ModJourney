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

        event.forEachRecipe([{ mod: "mekanism", mod: "alltheores" }], r => {

            function getType(name) {
                if (r.json.get("type").toString() === name) {
                    return true

                } else {
                    return false

                }
            }

            if (getType(element)) {

                console.log(r.getId())
                console.log(r.json)

            }
            //console.log(getType("minecraft:crafting_shaped"))
            // if (!getType('"minecraft:crafting_shapeless"') && !getType('"minecraft:crafting_shaped"')) {
            //if (!craftingTypes.includes(r.json.get("type").toString())) {




        })



    });


})





