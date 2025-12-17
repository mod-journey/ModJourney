let tagsForCustomMachines = (event, active, debug) => {
    if (!active) return;
    /*
     Tag generating, that Filterd Custom Machine Input, will accept and show them in JEI.
    */


    let CropTagForSeedPlanter = []
        .concat(global.seeds.other_mods.aether)
        .concat(global.seeds.other_mods.undergarden)
        .concat(global.seeds.other_mods.occultism)
        .concat(global.seeds.other_mods.arsNoveau)
        .concat(global.seeds.other_mods.immersive);

    CropTagForSeedPlanter.forEach(addTag => {
        event.add(`mj:seed_planter/input`, addTag.seed)
    })


    /* Add Tag for Tree Similiar Things like Mushrooms. */
    let SaplingTagForTreePlanter = []
        .concat(global.seeds.trees.undergarden);

    SaplingTagForTreePlanter.forEach(addTag => {
        event.add(`mj:tree_planter/input`, addTag.sapling)
    })

}