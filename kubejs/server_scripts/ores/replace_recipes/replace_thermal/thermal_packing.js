//priority 50

// In thies Script, the Thermal Servopress, will change the outputs.
// TO-DO: add changed recipes for rods, plates and gears

ServerEvents.recipes(event => {

    let thermal_ores = [
        'tin',
        'lead',
        'silver',
        'nickel',
        'bronze',
        'electrum',
        'invar',
        'constantan',
        'signalum',
        'lumium',
        'enderium',
    ]

    thermal_ores.forEach(ore => {

        //replace ingots in the multiservo
        event.forEachRecipe([
            { id: "thermal:machines/press/packing3x3/press_" + ore + "_nugget_packing" },
            { id: "thermal:machines/press/unpacking/press_" + ore + "_unpacking" }
        ], r => {
            r.json.get("result").get(0).add( "item", "alltheores:" + ore + "_ingot" )
            event.custom(r.json).id(r.getId())
        })

        //replace storage Blocks in the Multiservo
        event.forEachRecipe([
            { id: "thermal:machines/press/packing3x3/press_" + ore + "_packing" },
        ], r => {
            r.json.get("result").get(0).add( "item", "alltheores:" + ore + "_block" )
            event.custom(r.json).id(r.getId())
        })

        //replace raw Storage Blocks
        event.forEachRecipe([
            { id: "thermal:machines/press/packing3x3/press_raw_" + ore + "_packing" },
        ], r => {
            r.json.get("result").get(0).add( "item", "alltheores:raw_" + ore + "_block" )
            event.custom(r.json).id(r.getId())
        })

        //replace raw ores
        event.forEachRecipe([
            { id: "thermal:machines/press/unpacking/press_raw_" + ore + "_unpacking" },
        ], r => {
            r.json.get("result").get(0).add( "item", "alltheores:raw_" + ore )
            event.custom(r.json).id(r.getId())
        })

        //replace nuggets
        event.forEachRecipe([
            { id: "thermal:machines/press/unpacking/press_" + ore + "_nugget_unpacking" },
        ], r => {
            r.json.get("result").get(0).add( "item", "alltheores:" + ore + "_nugget" )
            event.custom(r.json).id(r.getId())
        })
    })

})