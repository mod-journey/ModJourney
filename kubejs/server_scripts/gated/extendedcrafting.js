//priority 0

let extendedcrafting_gated = (event) => {
    // Void Chassis
    event.replaceInput(
        { id: 'extendedcrafting:black_iron_slate' },
        'extendedcrafting:black_iron_ingot',
        stages.stage3.core
    )
}