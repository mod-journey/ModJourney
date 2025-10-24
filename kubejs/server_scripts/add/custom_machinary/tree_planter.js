let add_custom_machinary_treeplanter = (event, active, debug) => {
    if (!active) return;

    let trees = global.seeds.trees
    let vanillaTrees = trees.vanilla
    let croptopiaTrees = trees.croptopia
    let ArsTrees = trees.arsNoveau
    let TwillightTrees = trees.twillight

        //Crafting the Machine itselfs:
        event.shaped('custommachinery:custom_machine_item[custommachinery:machine="mod_journey:tree_planter"]', [
            'ABA',
            'CDC',
            'EFE'
        ], {
            A: 'industrialforegoing:plastic',
            B: Item.of('industrialforegoing:plant_gatherer'),
            C: 'minecraft:hopper',
            D: '#minecraft:saplings',
            E: 'minecraft:bucket',
            F: Item.of('industrialforegoing:plant_sower')
        })

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

    vanillaTrees.forEach(tree => {
        TreePlanter(tree.sapling, tree.log, tree.log, 4000, 800)
    });

    croptopiaTrees.forEach(tree => {
        TreePlanter(tree.sapling, tree.result, tree.result, 4000, 800)
    });

    ArsTrees.forEach(tree => {
        TreePlanter(tree.sapling, tree.result, tree.result, 4000, 800)
    });

    TwillightTrees.forEach(tree => {
        TreePlanter(tree.sapling, tree.result.main, tree.result.second, 4000, 800)
    });
}