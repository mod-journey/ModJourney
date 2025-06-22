//priority: 0

let industrialforegoing_gated = (event, active, debug) => {
    if (!active) return;

    console.log("Laden des Modules Industrial Foregoing")

    event.replaceInput({ id: 'industrialforegoing:ore_laser_base' },
        '#industrialforegoing:machine_frame/advanced',
        '#industrialforegoing:machine_frame/supreme'
    )

    event.replaceInput({ id: 'industrialforegoing:laser_drill' },
        '#forge:gears/gold',
        stages.stage2.gear
    )

    // Void Chassis
    event.replaceInput(
        { id: 'industrialforegoing:machine_frame_pity' },
        'minecraft:redstone_block',
        stages.stage1.core
    )
}