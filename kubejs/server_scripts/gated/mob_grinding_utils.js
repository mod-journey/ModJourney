//priority 0

let mobgrindingutils = (event, active, debug) => {
    if (!active) return;

    console.log("Laden des Modules mobgrindingutils gated.")

    //replace the rod tag to atm:steel_rod
    event.shaped(Item.of('mob_grinding_utils:mob_swab', 1), [
        '  C',
        ' B ',
        'C  '
    ], {
        B: mjConfig.stages.mod_based.mobGrindingUtils.stick,
        C: "#minecraft:wool"
    }).id('mob_grinding_utils:recipe_mob_swab')

    //add new recipe to tinted glass ( witherproofed )
    event.shaped(Item.of('mob_grinding_utils:tinted_glass', 8), [
        'GGG',
        'GSG',
        'GGG'
    ], {
        S: "#c:storage_blocks/steel",
        G: "#c:glass_blocks",
    }).id('mob_grinding_utils:recipe_tintedglass')

    //replace the iron swords with magic mod based weapon.
    event.replaceInput(
        { id: 'mob_grinding_utils:recipe_saw' },
        "minecraft:iron_sword",
        Item.of(mjConfig.stages.mod_based.mobGrindingUtils.swords[1])
    )

    //edit and gate the beheading Upgrade, with mix out of botania and blood_magic
    event.shaped(Item.of('mob_grinding_utils:saw_upgrade_beheading', 1), [
        'CAC',
        'BDB',
        'CAC'
    ], {
        A: Item.of(mjConfig.stages.mod_based.mobGrindingUtils.helmets[0]),
        B: Item.of(mjConfig.stages.mod_based.mobGrindingUtils.helmets[1]),
        C: mjConfig.stages.stage1.magic.early,
        D: mjConfig.stages.stage2.magic.mid,
    }).id('mob_grinding_utils:recipe_saw_upgrade_beheading')

    //edit the fortune upgrade to make it more diffculty
    event.shaped(Item.of('mob_grinding_utils:saw_upgrade_looting', 1), [
        'DAD',
        'ABA',
        'DAD'
    ], {
        A: mjConfig.stages.stage3.magic.early,
        B: mjConfig.stages.stage2.magic.mid,
        D: mjConfig.stages.stage1.magic.early
    }).id('mob_grinding_utils:recipe_saw_upgrade_looting')
}