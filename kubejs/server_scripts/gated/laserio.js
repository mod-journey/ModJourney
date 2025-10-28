//priority 0

let laserio_gated = (event, active, debug) => {
    if (!active) return;

    console.log('Ändern der Gated LaserIO Items')

    // Raw Logic Chip
    event.replaceInput(
        { id: 'laserio:logic_chip_raw' },
        'minecraft:gold_nugget',
        mjConfig.stages.stage1.core
    )
}

