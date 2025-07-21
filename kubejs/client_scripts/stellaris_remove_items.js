let stellaris_remove_items = (event, active, debug) => {
    if (!active) return;

    let stellaris_to_remove = [
        'stellaris:steel_ingot',
        'stellaris:steel_nugget',
        'stellaris:raw_steel_ingot',
        'stellaris:steel_ore',
        'stellaris:deepslate_steel_ore',
        'stellaris:moon_steel_ore',
        'stellaris:raw_steel_block',
        'stellaris:steel_block',
        'stellaris:cable',
        'stellaris:cable_t2',
        'stellaris:cable_t3',
        'stellaris:pipe_t1',
        'stellaris:pipe_t2',
        'stellaris:pipe_t3',
        'stellaris:pumpjack',
        'stellaris:pumpjack_drill',
        'stellaris:oil_finder',
        'stellaris:raw_uranium_block',
        'stellaris:uranium_block',
        'stellaris:mercury_uranium_ore'
    ]

    stellaris_to_remove.forEach(remove_items => {
        event.remove(remove_items)
    });
}