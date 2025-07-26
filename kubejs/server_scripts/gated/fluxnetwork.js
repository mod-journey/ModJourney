//priority 0

let fluxnetwork_gated = (event, active, debug) => {
    if (!active) return;

    // Flux Core
    event.replaceInput(
        { id: 'fluxnetworks:flux_core' },
        'minecraft:ender_eye',
        stages.stage3.core
    )

}
