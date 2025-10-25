//priority 0

let enerdeio_gated = (event, active, debug) => {
    if (!active) return;

    console.log('Ändern der Gated EnderIO Items')

    // Void Chassis
    event.replaceInput(
        { id: 'enderio:void_chassis' },
        'enderio:grains_of_infinity',
        stages.stage2.core
    )

    // Primitive Alloy Smelter
    event.replaceInput(
        { id: 'enderio:primitive_alloy_smelter' },
        'enderio:grains_of_infinity',
        stages.stage2.core
    )

    // Conduid Binder Composite
    event.replaceInput(
        { id: 'enderio:conduit_binder_composite' },
        'minecraft:clay_ball',
        stages.stage2.core
    )
}
