let add_custom_machinary_treeplanter = (event, active, debug) => {
    if (!active) return;

    let trees = global.seeds.trees
    let vanillaTrees = trees.vanilla
    let croptopiaTrees = trees.croptopia
    let ArsTrees = trees.arsNoveau
    let TwillightTrees = trees.twillight

    /**
     * @param {String} sapling
     * @param {String} MainResult
     * @param {String} SecondResult
     * @param {Int} energy
     * @param {Int} time
     */
    let TreePlanter = (sapling, MainResult, SecondResult, energy, time) => {
        event.recipes.custommachinery.custom_machine("mod_journey:tree_planter", time)
            .requireEnergy(energy)
            .requireFluid("1000 x minecraft:water")
            .requireItem(`1x ${sapling}`)
            .produceItem(`1x ${sapling}`)
            .produceItem(`1x ${sapling}`).chance(0.1)
            .produceItem(`2x ${MainResult}`)
            .produceItem(`1x ${SecondResult}`).chance(0.1)
    }

    croptopia_obj.trees.vanilla.forEach(id => {
        tree_planter(id.sapling, 0.25, id.log, 0.5, 200)
    });
}