//priority 90

StartupEvents.registry('block', event => {

    //Erstellen des Antimatter-Blocks
    event.create('mod_journey:antimatter_block')
        .displayName('Antimatter Block')
        .stoneSoundType()
        .hardness(1.0)
        .resistance(1.0)
        .requiresTool(true)
        .tagBlock('minecraft:needs_diamond_tool')
        .tagBlock('minecraft:mineable/pickaxe')

    //Erstellen des geronnen_blut_blocks
    event.create('mod_journey:clotted_bloodblock')
        .displayName('Clotted Bloodblock')
        .stoneSoundType()
        .hardness(1.0)
        .resistance(1.0)
        .requiresTool(true)
        .tagBlock('minecraft:needs_diamond_tool')
        .tagBlock('minecraft:mineable/pickaxe')
})