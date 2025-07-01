let add_custom_machinary_treeplanter = (event, active, debug) => {
    if (!active) return;

    /**
     *
     * @param {String} sapling
     * @param {float} sapling_chance
     * @param {Array} log
     * @param {String} log_chance
     * @param {Int} time
     * @example tree_planter("sapling", 0.1, "log", 0.2)
     */
    let tree_planter = (sapling, sapling_chance, log, log_chance, time) => {

        event.recipes.custommachinery.custom_machine("mod_journey:tree_planter", time)
            .requireFluid("1000 x #minecraft:water")
            .requireItem(`1x ${sapling}`)
            .produceItem(`2x ${log}`)
            .produceItem(`1x ${log}`).chance(sapling_chance)
            .produceItem(`1x ${sapling}`)
            .produceItem(`1x ${sapling}`).chance(log_chance)
    }

    croptopia_obj.trees.vanilla.forEach(id => {
        tree_planter(id.sapling, 0.25, id.log, 0.5, 200)
    });
}