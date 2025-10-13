//priority 0

let extendedcrafting_gated = (event, active, debug) => {
    if (!active) return;

    event.replaceInput(
        {id: 'extendedcrafting:basic_table'},
        'minecraft:iron_block',
        stages.stage3.core
    )

    event.replaceInput(
        {id: 'extendedcrafting:compressor'},
        'extendedcrafting:black_iron_slate',
        stages.stage3.core
    )

    event.replaceInput(
        {id: 'extendedcrafting:crafting_core'},
        'extendedcrafting:black_iron_slate',
        stages.stage3.core
    )

    event.replaceInput(
        {id: 'extendedcrafting:flux_crafter'},
        'minecraft:crafting_table',
        stages.stage3.core
    )

    event.replaceInput(
        {id: 'extendedcrafting:ender_crafter'},
        'minecraft:crafting_table',
        stages.stage3.core
    )
}