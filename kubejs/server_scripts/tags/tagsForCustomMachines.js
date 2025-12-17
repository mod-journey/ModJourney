let tagsForCustomMachines = (event, active, debug) => {
    if (!active) return;
    /*
     Tag generating, that Filterd Custom Machine Input, will accept and show them in JEI.
    */

    let addTagToCropsFromAether = global.seeds.other_mods.aether
    let addTagToCropsFromUndergarden = global.seeds.other_mods.undergarden
    let addTagToCropsFromOccultism = global.seeds.other_mods.occultism
    let addTagToCropsFromArsNoveau = global.seeds.other_mods.arsNoveau
    let addTagToCropsFromImmersive = global.seeds.other_mods.immersive

    addTagToCropsFromAether.forEach(addTag => {
        event.add(`mj:seed_planter/input`, addTag.seed)
    })

    addTagToCropsFromUndergarden.forEach(addTag => {
        event.add(`mj:seed_planter/input`, addTag.seed)
    })

    addTagToCropsFromOccultism.forEach(addTag => {
        event.add(`mj:seed_planter/input`, addTag.seed)
    })

    addTagToCropsFromArsNoveau.forEach(addTag => {
        event.add(`mj:seed_planter/input`, addTag.seed)
    })

    addTagToCropsFromImmersive.forEach(addTag => {
        event.add(`mj:seed_planter/input`, addTag.seed)
    })

}