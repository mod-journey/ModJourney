// priority: 90
let item_add = (event, active, debug) => {

    if (!active) return;
    if (debug) console.info('Add custom Scrolls.')

    for (let i = 1; i <= 9; i++) {
        event.create('mod_journey:scroll_' + i)
            .texture('mod_journey:item/scroll' + i)
            .maxStackSize(16)
            .rarity("EPIC")
    }

    event.create('mod_journey:blank_scroll')
        .texture('mod_journey:item/blank_scroll')
        .maxStackSize(64)
        .rarity("RARE")

    event.create('mod_journey:the_rod_of_real_life')
        .rarity("RARE")
        .maxStackSize(1)

    event.create('mod_journey:antimatter_ingot')
        .rarity("EPIC")
        .maxStackSize(64)

    event.create('mod_journey:clotted_blood_clump')
        .maxStackSize(64)

    let magic_scrolls_array = [
        "blank",
        1,
        2,
        3
    ]

    magic_scrolls_array.forEach(scroll => {
        event.create('mod_journey:magic_scroll_' + scroll)
            .texture('mod_journey:magic_scroll_' + scroll)
            .maxStackSize(16)
            .rarity("EPIC")
    });

    event.create('mod_journey:copper_coin')
        .tooltip("You get it by completing Quests, Events or Trades.")
        .texture('mod_journey:item/coins/copper_coin')
        .tag("c:coins/bronze")
        .tag("c:coins")

    event.create('mod_journey:silver_coin')
        .tooltip('You get it by completing Quests, Events or Trades.')
        .texture('mod_journey:item/coins/silver_coin')
        .tag("c:coins/silver")
        .tag("c:coins")

    event.create('mod_journey:gold_coin')
        .tooltip('You get it by completing Quests, Events or Trades.')
        .texture('mod_journey:item/coins/gold_coin')
        .tag("c:coins/gold")
        .tag("c:coins")

    let staged_items = 4;
    let number_as_word = ["one", "two", "three", "four"];

    for (let i = 1; i <= staged_items; i++) {
        event.create(`mod_journey:frame_core_${i}`)
            .textures({
                layer0: `mod_journey:item/staged/frame/stage_${i}`
            })
            .tag("mod_journey:staged_item")
            .tag(`mod_journey:stage/${number_as_word[i - 1]}`)
    };

    //Initial Staged Ingredients
    let ingredient_list = [
        null,
        "copperchunk",
        "hardend_steel_plate",
        "lumber",
        "nitro_cube",
        "platin_plate",
        "steel_carrier"
    ]

    for (let i = 1; i < ingredient_list.length; i++) {
        let itemName = ingredient_list[i]

        event.create(`mod_journey:${itemName}`)
            .tooltip(Text.translate(`item.mod_journey.${itemName}.tooltip`, itemName))
            .texture(`mod_journey:item/staged/ingredient/${itemName}`)
    }

};