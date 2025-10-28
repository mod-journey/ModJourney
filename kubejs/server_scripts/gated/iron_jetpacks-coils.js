//priority 0

let ironjetpacks_gated = (event, active, debug) => {
    if (!active) return;
    console.log('Ändern der Gated Ironjetpacks Items')

    // Basic Coil - Stage 2
    event.replaceInput(
        { id: 'ironjetpacks:basic_coil' },
        'minecraft:stick',
        mjConfig.stages.stage1.core
    )

    // Advanced Coil - Stage 3
    event.replaceInput(
        { id: 'ironjetpacks:advanced_coil' },
        'minecraft:stick',
        mjConfig.stages.stage2.core
    )

    // Elite Coil - Stage 4
    event.replaceInput(
        { id: 'ironjetpacks:elite_coil' },
        'minecraft:stick',
        mjConfig.stages.stage3.core
    )


    // Ultimate Coil - Stage 4
    event.replaceInput(
        { id: 'ironjetpacks:ultimate_coil' },
        'minecraft:stick',
        mjConfig.stages.stage3.core
    )
}