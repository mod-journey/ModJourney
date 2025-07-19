let stellaris_remove_items = (event, active, debug) => {
    if (!active) return;

    let steel = [
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
        'stellaris:oil_finder'
    ]

    steel.forEach(remove_steel => {
        event.remove(remove_steel)
    });

    let uran = [
        'stellaris:raw_uranium_block',
        'stellaris:uranium_block',
        'stellaris:mercury_uranium_ore'
    ]

    uran.forEach(remove_uran => {
        event.remove(remove_uran)
    });

}