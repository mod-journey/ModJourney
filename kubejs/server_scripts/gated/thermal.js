//priority 0

let thermal_gated = (event) => {

    console.log('Ändern der Gated Thermal Items')

    event.replaceInput(
        { id: 'thermal:rf_coil' },
        'minecraft:gold_ingot',
        stages.stage1.core
    )

    event.replaceInput(
        { id: 'thermal:redstone_servo' },
        'minecraft:iron_ingot',
        stages.stage1.core
    )

    event.replaceInput(
        { id: 'thermal:energy_duct_4' },
        'alltheores:lead_ingot',
        stages.stage1.core
    )

    event.replaceInput(
        { id: 'thermal:fluid_duct_4' },
        'alltheores:lead_ingot',
        stages.stage1.core
    )

    event.replaceInput(
        { id: 'thermal:fluid_duct_windowed_4' },
        'alltheores:bronze_ingot',
        stages.stage1.core
    )
}
