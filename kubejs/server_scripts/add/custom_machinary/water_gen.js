let add_custom_machinary_watergen = (event, active, debug) => {
    if (!active) return;

    event.recipes.custommachinery.custom_machine("mod_journey:water_gen", 100)
        .produceFluid("1000 x minecraft:water")
        .requireEnergy(250)

}

