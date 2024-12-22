//priority 0

ServerEvents.recipes(event => {
    let ato_alloy = [
        'brass',
        'signalum',
        'lumium',
        'enderium',
        'constantan',
        'steel',
        'invar',
        'electrum',
        'bronze'
      ]

    let ato_vanilla = [
      'gold',
      'diamond',
      'copper',
      'iron'
    ]

    let ato_metal = [
      'aluminum',
      'iridium',
      'lead',
      'nickel',
      'osmium',
      'platinum',
      'silver',
      'tin',
      'uranium',
      'zinc'
    ]

    ato_alloy.concat(ato_vanilla,ato_metal).forEach(element => {
        event.remove([
            {mod: "mekanism", type: "minecraft:crafting_shaped", output: "alltheores:" + element + "_block"},
            {mod: "immersiveengineering", type: "minecraft:crafting_shaped", output: "alltheores:" + element + "_block"},
            {mod: "thermal", type: "minecraft:crafting_shaped", output: "alltheores:" + element + "_block"}
        ])
    });

    // remove duplicate copper nugget recipes and keep only one
    event.remove([
        {not: {mod: "alltheores"}, type: "minecraft:crafting_shapeless", output: "alltheores:copper_nugget" },
        {not: {mod: "minecraft"},  type: "minecraft:crafting_shaped", output: "minecraft:copper_ingot" }
        //{type: "minecraft:crafting_shaped", output: "minecraft:copper_ingot" }
    ])

    /**
     * we need to re-add copper nugget recipe,
     * because compacting drawer does not use the `#forge:nuggets/copper` recipe
     */
    event.shapeless(
        'minecraft:copper_ingot',
        //['9x #forge:nuggets/copper']
        ['9x alltheores:copper_nugget']
    ).id('mod_journey:copper_ingot_from_nuggets');

})