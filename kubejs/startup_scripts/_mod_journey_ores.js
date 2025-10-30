//priority: 199
// @ts-check
/**
 * @typedef {import("../server_scripts/types/global-mjores")}
 */

/** @type {mjOres} */
global.mjOres = {
    mold: {
        gear: "immersiveengineering:mold_gear",
        wire: "immersiveengineering:mold_wire",
        plate: "immersiveengineering:mold_plate",
        rod: "immersiveengineering:mold_rod"
    },
    ores: [
        'aluminum',
        'lead',
        'nickel',
        'platinum',
        'silver',
        'tin',
        'uranium',
        'zinc',
        'iridium',
        'steel',
        'invar',
        'electrum',
        'bronze',
        'brass',
        'enderium',
        'lumium',
        'signalum',
        'constantan',
        'copper',
        'iron',
        'gold',
        'netherite'
    ],
    gems: [
        'diamond'
    ],

    ato: {
        vanilla: [
            'gold',
            'copper',
            'iron'
        ],
        metall: [
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
        ],
        alloy: [
            'brass',
            'signalum',
            'lumium',
            'enderium',
            'constantan',
            'steel',
            'invar',
            'electrum',
            'bronze'
        ],
        gems: [
            'diamond'
        ],
        mold: {
            plate: 'immersiveengineering:mold_plate',
            gear: 'immersiveengineering:mold_gear',
            rod: 'immersiveengineering:mold_rod',
            packing_2: 'immersiveengineering:mold_packing_4',
            packing_3: 'immersiveengineering:mold_packing_9',
            unpacking: 'immersiveengineering:mold_unpacking'
        },
        other: [
            'lapis'
        ]
    },
    craftingTypes: [
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
}