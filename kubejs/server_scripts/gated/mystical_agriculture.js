//priority 0

let mysticalagriculture_gated = (event, active, debug) => {
    if (!active) return;

    // Replace middle item fir machine frame
    event.replaceInput(
        { output: 'mysticalagriculture:machine_frame' },
        '#c:stones',
        mjConfig.stages.stage1.vanilla
    )

    event.replaceInput(
        { output: 'mysticalagriculture:tertium_upgrade'},
        'mysticalagriculture:prudentium_upgrade',
        mjConfig.stages.stage1.core
    )

    event.replaceInput(
        { output: 'mysticalagriculture:imperium_upgrade'},
        'mysticalagriculture:tertium_upgrade',
        mjConfig.stages.stage2.core
    )

    event.replaceInput(
        { output: 'mysticalagriculture:supremium_upgrade'},
        'mysticalagriculture:imperium_upgrade',
        mjConfig.stages.stage3.core
    )

    // Replace middle item fir altars
    replacer.replaceInputByPosition([
        { id: 'mysticalagriculture:infusion_altar' },
        { id: 'mysticalagriculture:awakening_altar' }
    ],
        1, 1,
        { 'item': mjConfig.stages.stage3.core }
    )
}


[ 'mysticalagriculture:tertium_upgrade', 'mysticalagriculture:imperium_upgrade', 'mysticalagriculture:supremium_upgrade']