//priority 0

let adastra_gated = (event, active, debug) => {
    if (!active) return;

    console.log('Ändern der Gated AdAstra Items')

    // Coal generator
    event.replaceInput(
        { id: 'ad_astra:recipes/coal_generator' },
        'minecraft:iron_ingot',
        mjConfig.stages.stage1.core
    )

    // Solar Panel
    event.replaceInput(
        { id: 'ad_astra:recipes/solar_panel' },
        'minecraft:blue_stained_glass',
        mjConfig.stages.stage1.core
    )

    // Cable Duct
    event.replaceInput(
        { id: 'ad_astra:recipes/cable_duct' },
        'minecraft:copper_ingot',
        mjConfig.stages.stage1.core
    )

    // Nasa Workbench
    event.replaceInput(
        { id: 'ad_astra:recipes/nasa_workbench' },
        'minecraft:redstone_block',
        mjConfig.stages.stage1.core
    )

    // Energizer
    event.replaceInput(
        { id: 'ad_astra:recipes/energizer' },
        'minecraft:diamond',
        mjConfig.stages.stage1.core
    )

    // Fluid Pipe Duct
    event.replaceInput(
        { id: 'ad_astra:recipes/fluid_pipe_duct' },
        'minecraft:glass',
        mjConfig.stages.stage1.core
    )
    // Desh Fluid Pipe
    event.replaceInput(
        { id: 'ad_astra:recipes/desh_fluid_pipe' },
        'minecraft:glass',
        mjConfig.stages.stage1.core
    )

    // Ostrum Fluid Pipe
    event.replaceInput(
        { id: 'ad_astra:recipes/ostrum_fluid_pipe' },
        'minecraft:glass',
        mjConfig.stages.stage1.core
    )

    // Fuel Refinery
    event.replaceInput(
        { id: 'ad_astra:recipes/fuel_refinery' },
        'minecraft:bucket',
        mjConfig.stages.stage1.core
    )

    // Oxygen Loader
    event.replaceInput(
        { id: 'ad_astra:recipes/oxygen_loader' },
        'minecraft:redstone_block',
        mjConfig.stages.stage1.core
    )
}
