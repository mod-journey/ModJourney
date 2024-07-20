//priority 0

console.log('Ändern der Gated AdAstra Items')

ServerEvents.recipes(event => {

    // Coal generator
    event.replaceInput(
        { id: 'ad_astra:recipes/coal_generator' },
        'minecraft:iron_ingot',
        stages.stage1.core
    )

    // Solar Panel
    event.replaceInput(
        { id: 'ad_astra:recipes/solar_panel' },
        'minecraft:blue_stained_glass',
        stages.stage1.core
    )

    // Cable Duct
    event.replaceInput(
        { id: 'ad_astra:recipes/cable_duct' },
        'minecraft:copper_ingot',
        stages.stage1.core
    )

    // Nasa Workbench
    event.replaceInput(
        { id: 'ad_astra:recipes/nasa_workbench' },
        'minecraft:redstone_block',
        stages.stage1.core
    )

    // Energizer
    event.replaceInput(
        { id: 'ad_astra:recipes/energizer' },
        'minecraft:diamond',
        stages.stage1.core
    )

    // Fluid Pipe Duct
    event.replaceInput(
        { id: 'ad_astra:recipes/fluid_pipe_duct' },
        'minecraft:glass',
        stages.stage1.core
    )
    // Desh Fluid Pipe
    event.replaceInput(
        { id: 'ad_astra:recipes/desh_fluid_pipe' },
        'minecraft:glass',
        stages.stage1.core
    )

    // Ostrum Fluid Pipe
    event.replaceInput(
        { id: 'ad_astra:recipes/ostrum_fluid_pipe' },
        'minecraft:glass',
        stages.stage1.core
    )

    // Fuel Refinery
    event.replaceInput(
        { id: 'ad_astra:recipes/fuel_refinery' },
        'minecraft:bucket',
        stages.stage1.core
    )

    // Oxygen Loader
    event.replaceInput(
        { id: 'ad_astra:recipes/oxygen_loader' },
        'minecraft:redstone_block',
        stages.stage1.core
    )


})
