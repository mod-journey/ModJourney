//priority 10

let add_modjourney_scrolls = (event, active, debug) => {
    if (!active) return;

    event.shaped(
        Item.of('mod_journey:blank_scroll', 1),
        [
            'ABA',
            ' C ',
            'ABA'
        ],
        {
            A: '#minecraft:wooden_buttons',
            B: '#c:rods/wooden',
            C: 'minecraft:paper'
        }
    ).id('mod_journey:blank_scroll')

    for (let i = 1; i <= 8; i++) {
        event.shapeless(

            Item.of('mod_journey:scroll_' + i, 1),
            [
                i + 'x #c:dyes/black',
                'mod_journey:blank_scroll'
            ]
        ).id("mod_journey:scroll/" + i)
    }

    event.shapeless(
        Item.of('mod_journey:scroll_9', 1),
        [
            '#mod_journey:rolls_crafting'
        ]
    ).id("mod_journey:scroll/9")


    //Rezepte fuer die magischen Schriftrollen
    event.shaped(
        Item.of('mod_journey:magic_scroll_blank', 1),
        [
            'ABA',
            ' C ',
            'ABA'
        ],
        {
            A: '#minecraft:stone_buttons',
            B: '#c:rods/wooden',
            C: 'minecraft:paper'
        }
    ).id('mod_journey:magic_scroll_blank')


    let magic_scrolls_array = [
        1,
        2,
        3
    ]

    magic_scrolls_array.forEach(scroll => {
        event.shapeless(
            Item.of('mod_journey:magic_scroll_' + scroll, 1),
            [
                scroll + 'x #c:dyes/purple',
                'mod_journey:magic_scroll_blank'
            ]
        ).id("mod_journey:magic_scroll_" + scroll)
    });


};