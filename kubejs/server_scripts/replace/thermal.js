
ServerEvents.recipes(event => {

    event.shapeless('9x minecraft:bamboo', [ 'minecraft:bamboo_block' ]).id('mod_journey:bamboo')

    // replace old planks recipe
    event.shapeless('4x minecraft:bamboo_planks', [ '2x #minecraft:bamboo_blocks' ]).id('mod_journey:bamboo_planks')
    event.remove({ id: 'minecraft:bamboo_planks' })

})