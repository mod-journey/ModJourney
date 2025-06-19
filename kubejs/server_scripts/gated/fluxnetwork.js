//priority 0

let fluxnetwork_gated = (event) => {

    // Flux Core
    event.replaceInput(
        { id: 'fluxnetworks:fluxcore' },
        'minecraft:ender_eye',
        stages.stage3.core
    )

}
