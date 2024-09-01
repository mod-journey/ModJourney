//priority 50

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
        'enderium'
    ]

    //replace Thermal Ores in standart options
    thermal_ores.forEach(ore => {
        event.replaceOutput({ output: "thermal:" + ore + "_nugget" }, "thermal:" + ore + "_nugget", "alltheores:" + ore + "_nugget" );
        event.replaceOutput({ output: "thermal:" + ore + "_ingot"}, "thermal:" + ore + "_ingot", "alltheores:" + ore + "_ingot" );
        event.replaceOutput({ output: "thermal:raw_" + ore }, "thermal:raw_" + ore, "alltheores:raw_" + ore );
        event.replaceOutput({ output: "thermal:raw_" + ore + "_block"}, "thermal:raw_" + ore + "_block", "alltheores:raw_" + ore + "_block" );
        event.replaceOutput({ output: "thermal:" + ore + "_dust"}, "thermal:" + ore + "_dust", "alltheores:" + ore + "_dust" );
        event.replaceOutput({ output: "thermal:" + ore  + "_block"}, "thermal:" + ore + "_block", "alltheores:" + ore + "_block" );
    });


    event.replaceOutput({ output: "thermal:copper_nugget" }, "thermal:copper_nugget", "alltheores:copper_nugget" );

})

    //Laserdrill needs extra handler.
    //InductionSmeklter needs extra handler.