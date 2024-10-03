//priority 10

ServerEvents.recipes(event => {

    event.shapeless(
        Item.of('mod_journey:anti_ingot', 1),
        [
            '9x mekanism:pellet_antimatter'
        ]
    ).id("modjourney:shapless/antimatter_ingot")


    event.shapeless(
        Item.of('mod_journey:antimatter_block', 1),
        [
            '9x mod_journey:anti_ingot'
        ]
    ).id("modjourney:shapless/antimatter_block")


    //Rückcraftrezept 1 Ingot zu 9 Pallet
    event.shapeless(
        Item.of('mekanism:pellet_antimatter', 9),[
            '1x mod_journey:anti_ingot'
        ]
    ).id("modjourney:shapless/crafting_back/antimatter_pallet")

    //Rückcraftrezept 9 Ingots aus einem Block
    event.shapeless(
        Item.of('mod_journey:anti_ingot', 9),[
            '1x mod_journey:antimatter_block'
        ]
    ).id("modjourney:shapless/crafting_back/antimatter_ingot")
})