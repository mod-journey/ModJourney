let tagsForCustomMachines = (event, active, debug) => {
    if (!active) return;
    /*
     Tag generating, that Filterd Custom Machine Input, will accept and show them in JEI.
    */

    let addTagToCropsFromAether = global.seeds.other_mods.aether

    addTagToCropsFromAether.forEach(addTag => {
        event.add(`mj:seed_planter/input`, addTag.seed)
    })

}