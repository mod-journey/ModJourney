ServerEvents.recipes(event => {
    // Remove all seeds, but keep inferium
    event.remove({type: 'mysticalagriculture:infusion', output: '#mysticalagriculture:seeds'})

    // Remove harvester
    event.remove({id: 'mysticalagriculture:harvester'})

    // Remove sould extractor and all recipes that are crafted in this machine
    event.remove([ {id: 'mysticalagriculture:soul_extractor'}, {type: 'mysticalagriculture:soul_extraction'} ])

    // remove all growth accelerators (but keep the first)
    let remove_tiers = [
        // inferium,
        'prudentium',
        'tertium',
        'imperium',
        'supremium'
    ];

    remove_tiers.forEach(tier => {
        event.remove({id: `mysticalagriculture:${tier}_growth_accelerator`})
    })
})

