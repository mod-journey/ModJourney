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
            { name: 'gold', regex: /(:gold_|_gold")/ },
            { name: 'copper', regex: /(:copper_|_copper")/ },
            { name: 'iron', regex: /(:iron_|_iron")/ }
        ],
        metall: [
            { name: 'aluminum', regex: /(:aluminum_|_aluminum")/ },
            { name: 'iridium', regex: /(:iridium_|_iridium")/ },
            { name: 'lead', regex: /(:lead_|_lead")/ },
            { name: 'nickel', regex: /(:nickel_|_nickel")/ },
            { name: 'osmium', regex: /(:osmium_|_osmium")/ },
            { name: 'platinum', regex: /(:platinum_|_platinum")/ },
            { name: 'silver', regex: /(:silver_|_silver")/ },
            { name: 'uranium', regex: /(:uranium_|_uranium")/ },
            { name: 'zinc', regex: /(:zinc_|_zinc")/ },
            { name: 'tin', regex: /(:tin_|_tin")/ },
        ],
        alloy: [
            { name: 'brass', regex: /(:brass_|_brass")/ },
            { name: 'signalum', regex: /(:signalum_|_signalum")/ },
            { name: 'lumium', regex: /(:lumium_|_lumium")/ },
            { name: 'enderium', regex: /(:enderium_|_enderium")/ },
            { name: 'constantan', regex: /(:constantan_|_constantan")/ },
            { name: 'steel', regex: /(:steel_|_steel")/ },
            { name: 'invar', regex: /(:invar_|_invar")/ },
            { name: 'electrum', regex: /(:electrum_|_electrum")/ },
            { name: 'bronze', regex: /(:bronze_|_bronze")/ },
        ],
        gems: [
            { name: 'diamond', regex: /(:diamond_|_diamond")/ },
        ],
        mold: {
            plate: 'immersiveengineering:mold_plate',
            gear: 'immersiveengineering:mold_gear',
            rod: 'immersiveengineering:mold_rod',
            packing_2: 'immersiveengineering:mold_packing_4',
            packing_3: 'immersiveengineering:mold_packing_9',
            unpacking: 'immersiveengineering:mold_unpacking'
        },
        types: [
            { name: 'gear', regex: /(:gear_|_gear")/ },
            { name: 'rod', regex: /(:rod_|_rod"|stick_)/ },
            { name: 'plate', regex: /(:plate_|_plate")/ },
            { name: 'ingot', regex: /(:ingot_|_ingot")/ },
            { name: 'nugget', regex: /(:nugget_|_nugget")/ },
            { name: 'dust', regex: /(:dust_|_dust")/ },
            { name: 'ore', regex: /^(?!.*deepslate).*(_ore|_ore)/ },
            { name: 'block', regex: /^(?!.*raw_).*(block.*)/ },
            { name: 'raw', regex: /^(.*raw).*(block.*)|^(.*block).*(raw).*/ }, //raw storageblock
            //{ name: 'raw', regex: /^(?!.*block)[^:]+:raw_([a-z]+")/ }, //raw single ore name of raw_block, replace nach _ array 0
            //{ name: 'deepslate', regex: /^(.*deepslate).*ore/ },
            { name: 'dirty', regex: /^(.*dirty).*(dust).*/ },
            { name: 'clump', regex: /(:clump_|_clump")/ },
            { name: 'crystal', regex: /(:crystal_|_crystal")/ },
            { name: 'shard', regex: /(:shard_|_shard")/ },
        ],
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
    ],
    excludeItemID: [
        '"stellaris:steel_plating_block"'
    ]
}