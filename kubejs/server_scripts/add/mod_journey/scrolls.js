//priority 10

ServerEvents.recipes(event => {

event.shaped(
    Item.of('mod_journey:blank_scroll', 1),
    [
      'ABA',
      ' C ',
      'ABA'
    ],
    {
      A: '#minecraft:wooden_buttons',
      B: '#forge:rods/wooden',
      C: 'minecraft:paper'
    }
  ).id('modjourney:blank_scroll')

  for (let i = 1; i <= 8; i++) {
    event.shapeless(

        Item.of('mod_journey:scroll' + i, 1),
        [
            i + 'x #forge:dyes/black',
            'mod_journey:blank_scroll'
        ]
    ).id("modjourney:scroll/" + i)
  }

  event.shapeless(
    Item.of('mod_journey:scroll9', 1),
    [
        '#modjourney:rolls_crafting'
    ]
  ).id("modjourney:scroll/9")


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
      B: '#forge:rods/wooden',
      C: 'minecraft:paper'
    }
  ).id('modjourney:magic_scroll_blank')


  let magic_scrolls_array = [
    "one",
    "two",
    "three"
  ]
  let magic_counter = 1;

  magic_scrolls_array.forEach(scroll => {
    event.shapeless(

      Item.of('mod_journey:magic_scroll_' + scroll, 1),
      [
        magic_counter + 'x #forge:dyes/purple',
        'mod_journey:magic_scroll_blank'
      ]
    ).id("modjourney:magic_scroll_" + magic_counter)

    magic_counter = magic_counter + 1;
  });


})