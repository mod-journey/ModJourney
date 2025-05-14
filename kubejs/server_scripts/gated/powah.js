//priority 0

let powah_gated = (event) => {

    console.log('Ändern der Gated Powah Items')

    // Dielectric Casing
    event.replaceInput(
        { id: 'powah:crafting/dielectric_casing' },
        'minecraft:iron_ingot',
        stages.stage2.core
    )


    // Basic Capacitor
    event.replaceInput(
        { id: 'powah:crafting/capacitor_basic' },
        'minecraft:redstone_block',
        stages.stage2.core
    )
}