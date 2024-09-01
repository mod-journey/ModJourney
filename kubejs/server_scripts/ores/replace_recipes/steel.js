//priority 50

ServerEvents.recipes(event => {

    event.forEachRecipe([                                                                   // AND Filter + OR Filter + AND Filter [{ 1 AND 2} OR {1 AND 3}]
        { output: "alltheores:steel_ingot", type: "immersiveengineering:arc_furnace" },     // output steel_ingot AND arc_furnance
        { output: "alltheores:steel_ingot", type: "immersiveengineering:blast_furnace" }    // output steel_ingot AND blast_furnance
    ], r => {
        event.custom(r.json).id("kubejs:" + r.getId().split(":")[1])                        //erstellt neues Rezept mit alter ID nach dem :, somit kubejs/bla/rezept
    })

    event.remove({output: "ad_astra:steel_ingot"})                                          //entfernt ad_astra steel
    event.remove({id: "alltheores:steel_dust_from_alloy_blending"})                         // etnfernt Steel Hammer Crafting Rezept
    //entfallen, da andere Mods abhängigkeiten darauf haben, siehe type: "mekanism:smelter"
    //event.remove([{type: "minecraft:smelting"}, {output: "alltheores:steel_ingot"}])
    //event.remove([{type: "minecraft:blasting"}, {output: "alltheores:steel_ingot"}])

})