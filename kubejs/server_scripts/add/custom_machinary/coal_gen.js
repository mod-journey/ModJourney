let add_custom_machinary_coalgen = (event, active, debug) => {
    if (!active) return;

    event.recipes.custommachinery.custom_machine("mod_journey:coal_gen", 200)
        .requireItem("#minecraft:coals")
        .produceEnergy(1000)
}