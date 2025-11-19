function add_update_acceleration (event, active, debug) {
    if (!active) return;

    event.create(Item.of('mod_journey:acceleration_card'))
        .machine("mod_journey:mechanical_press")
        .modifier(CMRecipeModifierBuilder.expInput("custommachinery:speed", 0.25))
        .modifier(CMRecipeModifierBuilder.expInput("custommachinery:energy", 2))

}

//CustomMachineryEvents.upgrades(event => {

//})

