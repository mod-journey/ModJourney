
ServerEvents.recipes(event => {

    event.shapeless('9x minecraft:bamboo', [ 'minecraft:bamboo_block' ])

    // replace old planks recipe
    event.shapeless('4x minecraft:bamboo_planks', [ '2x #minecraft:bamboo_blocks' ])
    event.remove({ id: 'minecraft:bamboo_planks' })

})