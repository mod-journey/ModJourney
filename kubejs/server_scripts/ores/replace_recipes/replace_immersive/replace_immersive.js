//priority 50


ServerEvents.recipes(event => {

    let immersive_ores = [
        'aluminum',
        'lead',
        'silver',
        'nickel',
        'uranium',
        'constantan',
        'electrum',
        'steel'
    ]

       //Immersive Ore Replacing.
       immersive_ores.forEach(ore => {
        event.replaceOutput({ output: "immersiveengineering:nugget_" + ore }, "immersiveengineering:nugget_" + ore, "alltheores:" + ore + "_nugget" );
        event.replaceOutput({ output: "immersiveengineering:ingot_" + ore }, "immersiveengineering:ingot_" + ore, "alltheores:" + ore + "_ingot" );
        event.replaceOutput({ output: "immersiveengineering:raw_" + ore }, "immersiveengineering:raw_" + ore, "alltheores:raw_" + ore );
        event.replaceOutput({ output: "immersiveengineering:raw_block_" + ore }, "immersiveengineering:raw_block_" + ore, "alltheores:raw_" + ore + "_block" );
        event.replaceOutput({ output: "immersiveengineering:dust_" + ore }, "immersiveengineering:dust_" + ore, "alltheores:" + ore + "_dust" );
        event.replaceOutput({ output: "immersiveengineering:storage_" + ore }, "immersiveengineering:storage_" + ore, "alltheores:" + ore + "_block" );
    });
    event.replaceOutput({ output: "#forge:nuggets/copper"}, "#forge:nuggets/copper", "alltheores:copper_nugget" );
})