//priority 50

ServerEvents.recipes(event => {

    let mekka_ores = [
        'bronze',
        'steel',
        'osmium',
        'tin',
        'lead',
        'uranium'
    ];

    let mekka_vanilla = [
        'iron',
        'diamond',
        'gold',
        'copper'
    ];

    let mekka_combined = mekka_ores.concat(mekka_vanilla);

    //Mekanism Ore Replacing.
    mekka_ores.forEach(ore => {
        event.replaceOutput({ output: "mekanism:nugget_" + ore }, "mekanism:nugget_" + ore, "alltheores:" + ore + "_nugget" );
        event.replaceOutput({ output: "mekanism:ingot_" + ore }, "mekanism:ingot_" + ore, "alltheores:" + ore + "_ingot" );
        event.replaceOutput({ output: "mekanism:raw_" + ore }, "mekanism:raw_" + ore, "alltheores:raw_" + ore );
        event.replaceOutput({ output: "mekanism:block_raw_" + ore }, "mekanism:block_raw_" + ore, "alltheores:raw_" + ore + "_block" );
        event.replaceOutput({ output: "mekanism:dust_" + ore }, "mekanism:dust_" + ore, "alltheores:" + ore + "_dust" );
        event.replaceOutput({ output: "mekanism:block_" + ore }, "mekanism:block_" + ore, "alltheores:" + ore + "_block" );
    });


    //enrichment chamber and crusher will not trigger with the inHouse Function replaceOutput
    mekka_combined.forEach(ore => {
        //replace dust recipes in enrichtment chamber and crusher
        event.forEachRecipe({ output: "mekanism:dust_" + ore }, r => {
            r.json.get("output").add("item", "alltheores:" + ore + "_dust")
            event.custom(r.json).id(r.getId())
        })

        //replace uranium ore und deeplsate uranium ore in combiner.
        event.forEachRecipe({ output: "mekanism:" + ore + "_ore" }, r => {
            r.json.get("output").add("item", "alltheores:" + ore + "_ore")
            event.custom(r.json).id(r.getId())
        })
        event.forEachRecipe({ output: "mekanism:deepslate_" + ore + "_ore" }, r => {
            r.json.get("output").add("item", "alltheores:deepslate_" + ore + "_ore")
            event.custom(r.json).id(r.getId())
        })
    })

    event.forEachRecipe({ id: "mekanism:processing/bronze/ingot/from_infusing" }, r => {
        r.json.get("output").remove("item")
        r.json.get("output").add("item", "alltheores:bronze_ingot")
        event.custom(r.json).id(r.getId())
    })

})