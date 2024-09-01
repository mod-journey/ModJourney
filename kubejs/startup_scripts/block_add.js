//priority 90

StartupEvents.registry('block', event => {
    event.create('mod_journey:antimatter_block')
    .displayName('Antimatter Block')
    .stoneSoundType()
    .hardness(1.0)
    .resistance(1.0)
    .requiresTool(true)
    .tagBlock('minecraft:needs_diamond_tool')
    .tagBlock('minecraft:mineable/pickaxe')
})