let addSmeltingAndBlasting = (event, active, debug) => {
    let oresForBlastingAndSmelting = [
        { tag: "raw_gold", name: "minecraft:gold_block" },
        { tag: "raw_iron", name: "minecraft:iron_block" },
        { tag: "raw_copper", name: "minecraft:copper_block" },
        { tag: "raw_froststeel", name: "undergarden:froststeel_block" },
        { tag: "raw_iesnium", name: "occultism:iesnium_block" },
        { tag: "raw_cloggrum", name: "undergarden:cloggrum_block" },

    ]

    oresForBlastingAndSmelting.forEach(ores => {
        event.blasting(ores.name, `#c:storage_blocks/${ores.tag}`)
            .xp(3)
            .cookingTime(800)
        event.smelting(ores.name, `#c:storage_blocks/${ores.tag}`)
            .xp(7)
            .cookingTime(1600)
    })

    let oresForSmelting = [
        { tag: 'raw_lead', item: 'alltheores:lead_block' },
        { tag: 'raw_nickel', item: 'alltheores:nickel_block' },
        { tag: 'raw_osmium', item: 'alltheores:osmium_block' },
        { tag: 'raw_platinum', item: 'alltheores:platinum_block' },
        { tag: 'raw_silver', item: 'alltheores:silver_block' },
        { tag: 'raw_tin', item: 'alltheores:tin_block' },
        { tag: 'raw_uranium', item: 'alltheores:uranium_block' },
        { tag: 'raw_zinc', item: 'alltheores:zinc_block' },
        { tag: 'raw_iridium', item: 'alltheores:iridium_block' },
        { tag: 'raw_aluminum', item: 'alltheores:aluminum_block' }
    ]

    oresForSmelting.forEach(ores => {
        event.smelting(ores.item, `#c:storage_blocks/${ores.tag}`)
            .xp(7)
            .cookingTime(1600)
    })

}

