//priority 0

let ae_gated = (event) => {

    console.log("Laden des Moduls AE2 Gated")

    // Inscriber
    event.replaceInput(
        { id: 'ae2:network/blocks/inscribers' },
        'minecraft:sticky_piston',
        stages.stage1.core
    )
}
