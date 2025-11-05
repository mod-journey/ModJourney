let add_custom_machinary_metalpress = (event, active, debug) => {
    if (!active) return;

    //Crafting the Machine itselfs:
    event.shaped("mod_journey:mechanical_press", [
        'FAF',
        'BEC',
        'FDF'
    ], {
        A: "immersiveengineering:mold_plate",
        B: "immersiveengineering:mold_rod",
        C: "immersiveengineering:mold_gear",
        D: "immersiveengineering:mold_wire",
        E: global.mjConfig.stages.stage2.core,
        F: "#c:storage_blocks/steel"
    })

    let PRESSOBJECT = global.mjOres

    function mechanical_press(mold, input, ingredient, ores, output, energy) {
        event.recipes.custommachinery.custom_machine("mod_journey:mechanical_press", 40)
            .requireItemOnEnd(`${input}x #c:${ingredient}/${ores}`)
            .requireItemOnEnd(mold, "mold")
            .produceItem(`alltheores:${ores}_${output}`)
            .produceItem(mold, "mold")
            .requireEnergy(energy)
    }

    PRESSOBJECT.ores.forEach(ore => {
        mechanical_press(PRESSOBJECT.mold.gear, 2, "ingots", ore, "gear", 480)
        mechanical_press(PRESSOBJECT.mold.plate, 1, "ingots", ore, "plate", 480)
        mechanical_press(PRESSOBJECT.mold.rod, 1, "ingots", ore, "rod", 480)
    })

    PRESSOBJECT.gems.forEach(gem => {
        mechanical_press(PRESSOBJECT.mold.gear, 2, "gems", gem, "gear", 480)
        mechanical_press(PRESSOBJECT.mold.plate, 1, "gems", gem, "plate", 480)
        mechanical_press(PRESSOBJECT.mold.rod, 1, "gems", gem, "rod", 480)
    })
    //mechanical_press(PRESSOBJECT.mold.wire, "ingots", "wire", 480)
}
