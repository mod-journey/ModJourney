let add_custom_machinary_brine_converter = (event, active, debug) => {
    if (!active) return;

    //Crafting the Machine itselfs:
    event.shaped('custommachinery:custom_machine_item[custommachinery:machine="mod_journey:brine_converter"]', [
        'AAA',
        'BCB',
        'ADA'
    ], {
        A: 'mekanism:thermal_evaporation_block',
        B: 'mekanism:thermal_evaporation_valve',
        C: Item.of('mekanism:thermal_evaporation_controller'),
        D: Item.of('mekanism:resistive_heater')
    })

    event.recipes.custommachinery.custom_machine("mod_journey:brine_converter", 10)
        .requireEnergy(15000)
        .requireFluid(Fluid.of("minecraft:water", 100000))
        .produceFluid(Fluid.of("mekanism:brine", 10000))

    event.recipes.custommachinery.custom_machine("mod_journey:brine_converter", 10)
        .requireEnergy(15000)
        .requireFluid(Fluid.of("mekanism:brine", 100000))
        .produceFluid(Fluid.of("mekanism:lithium", 10000))
}