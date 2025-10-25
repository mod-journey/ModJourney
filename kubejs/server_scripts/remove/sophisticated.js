let remove_sophisticated = (event, active, debug) => {
    if (!active) return;

    //remove recipe, so it can re-add as creativ-Item.
    event.remove({id: "sophisticatedbackpacks:stack_upgrade_omega_tier"})

}