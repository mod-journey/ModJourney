let remove_mysticalAgriculture = (event, active, debug) => {
    if (!active) return;
    // Remove all seeds, but keep inferium
    event.remove({
        type: 'mysticalagriculture:infusion', output: '#mysticalagriculture:seeds'
    });

    // Remove harvester
    event.remove({
        id: 'mysticalagriculture:harvester'
    });

    // remove all growth accelerators (but keep the first)
    let remove_tiers = [
        // inferium,
        'prudentium',
        'tertium',
        'imperium',
        'supremium',
        'awakened_supremium',
    ];

    remove_tiers.forEach(tier => {
        event.remove({
            id: `mysticalagriculture:${tier}_growth_accelerator`
        });
    });
};

