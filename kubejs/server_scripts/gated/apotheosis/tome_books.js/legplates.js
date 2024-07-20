//priority 10

let leggings_tome_shaped = (event, staged_item, id_recipe) => {
    id_recipe = 'apotheosis:leggings_tome'

    event.shaped( Item.of( id_recipe, 7 ), [
        'CBC',
        'BAB',
        'B B'
    ], {
        A: 'minecraft:blaze_rod',
        B: 'minecraft:book',
        C: staged_item

    }).id(id_recipe)
}

/* To remove recipe, please comment out the function in ./_main_tome. */