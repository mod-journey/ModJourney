//priority 0

ServerEvents.tags('items', event => {

    let ars_right_click = [
        'ars_nouveau:novice_spell_book',
        'ars_nouveau:apprentice_spell_book',
        'ars_nouveau:archmage_spell_book'
    ]


    ars_right_click.forEach(element => {
        event.add("ftbchunks:right_click_blacklist",Item.of(element))
    });
})