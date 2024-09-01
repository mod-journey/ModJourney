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

    })