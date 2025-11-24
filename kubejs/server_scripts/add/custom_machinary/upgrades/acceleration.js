function add_update_acceleration(event, active, debug) {
    if (!active) return;


    let acc_cards = [
        { speed: 0.75, card: 1, energy: 2 },
        { speed: 0.5, card: 2, energy: 5 },
        { speed: 0.25, card: 3, energy: 9 }
    ]

    let upgradeableMachines = [
        "mod_journey:mechanical_press",
        "mod_journey:seed_planter_v2",
        "mod_journey:tree_planter",
        "mod_journey:refinary",
        "mod_journey:brine_converter"
    ]

    for (let i = 0; i < acc_cards.length; i++) {
        let speedModifier = acc_cards[i].speed
        let upgradeLevel = acc_cards[i].card
        let energyConsuption = acc_cards[i].energy

        event.create(Item.of(`mod_journey:upgrades/acceleration_card_${upgradeLevel}`))
            .machine(upgradeableMachines)
            .modifier(CMRecipeModifierBuilder.expInput("custommachinery:speed", speedModifier))
            .modifier(CMRecipeModifierBuilder.expInput("custommachinery:energy", energyConsuption))
    }
}
