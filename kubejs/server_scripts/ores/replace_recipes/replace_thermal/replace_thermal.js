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

    // -> not working
    //event.replaceOutput({ id: 'mysticalagriculture:essence/common/sulfur' },'#forge:dusts/sulfur','#forge:gems/sulfur');

    event.forEachRecipe({ id: 'mysticalagriculture:essence/common/sulfur' }, r => {
        //console.log('replaced?' + (r.replaceOutput('#forge:dusts/sulfur','#forge:gems/sulfur') ? 'yes' : 'no')); // no
        //console.log('HasOutput ' + (r.hasOutput('#forge:dusts/sulfur') ?'true' : 'false' )); // -> true
        r.json.get("result").add("tag", "forge:gems/sulfur")
        event.custom(r.json).id(r.getId())
    });

})

    //Laserdrill needs extra handler.
    //InductionSmeklter needs extra handler.