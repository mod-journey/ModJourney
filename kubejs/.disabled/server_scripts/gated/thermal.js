//priority 0

let thermal_gated = (event, active, debug) => {
    if (!active) return;

    console.log('Ändern der Gated Thermal Items')

    event.replaceInput(
        { id: 'thermal:rf_coil' },
        'minecraft:gold_ingot',
        mjConfig.stages.stage1.core
    )

    event.replaceInput(
        { id: 'thermal:redstone_servo' },
        'minecraft:iron_ingot',
        mjConfig.stages.stage1.core
    )

    event.replaceInput(
        { id: 'thermal:energy_duct_4' },
        'alltheores:lead_ingot',
        mjConfig.stages.stage1.core
    )

    event.replaceInput(
        { id: 'thermal:fluid_duct_4' },
        'alltheores:lead_ingot',
        mjConfig.stages.stage1.core
    )

    event.replaceInput(
        { id: 'thermal:fluid_duct_windowed_4' },
        'alltheores:bronze_ingot',
        mjConfig.stages.stage1.core
    )
}
