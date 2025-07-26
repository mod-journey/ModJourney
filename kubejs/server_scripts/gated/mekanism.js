//priority 0

let mekanism_gated = (event, active, debug) => {
    if (!active) return;

    console.log("Laden des Modules Mekanism Gating")

    let mekanismCoreItem = stages.mod_based.mekanism;

    // Void Chassis
    event.replaceInput(
        { id: mekanismCoreItem },
        'alltheores:osmium_ingot',
        stages.stage3.core
    )

    event.replaceInput([
        { id: 'mekanism:metallurgic_infuser' },
        { id: 'mekanismgenerators:generator/heat' }
    ],
        'minecraft:furnace',
        mekanismCoreItem
    )

    // Replace redstone on bottom/middle
    replacer.replaceInputByPosition(
        { id: 'mekanism:electrolytic_separator' },
        1, 2,
        { 'item': mekanismCoreItem }
    )
}
