let replace_stellaris_steel = (event, active, debug) => {
    if (!active) return;

    let steel = [
        'stellaris:steel_ingot',
        'stellaris:steel_nugget',
        'stellaris:raw_steel_ingot',
        'stellaris:steel_ore',
        'stellaris:deepslate_steel_ore',
        'stellaris:moon_steel_ore',
        'stellaris:raw_steel_block',
        'stellaris:steel_block'
    ]


    steel.forEach(steel_remove => {
        event.remove({ mod: "stellaris", output: steel_remove })
    });

}