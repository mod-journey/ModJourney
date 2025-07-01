let add_custom_machinary_metalpress = (event, active, debug) => {
    if (!active) return;

        function mechanical_press(mold, ingredient, output) {
        for (let i = 0; i < ores.length; i++) {
            event.recipes.custommachinery.custom_machine("modjourney:mechanical_press", 40)
                .requireItemOnEnd(`2x #c:${ingredient}/${ores[i]}`)
                .requireItemOnEnd( mold, "mold")
                .produceItem(`alltheores:${ores[i]}_${output}`)
                .produceItem(mold, "mold")
        }
    }

    mechanical_press(molds[1], "ingots", "gear")
}