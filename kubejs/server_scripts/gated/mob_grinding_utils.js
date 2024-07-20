//priority 0


ServerEvents.recipes(event => {

    //replace the rod tag to atm:steel_rod
    event.shaped( Item.of('mob_grinding_utils:mob_swab', 1), [
        '  C',
        ' B ',
        'C  '
    ], {
        B: "alltheores:steel_rod",
        C: "#minecraft:wool"
    }).id('mob_grinding_utils:recipe_mob_swab')

    //add new recipe to tinted glass ( witherproofed )
    event.shaped( Item.of('mob_grinding_utils:tinted_glass', 8), [
        'GGG',
        'GSG',
        'GGG'
    ], {
        S: "#forge:storage_blocks/steel",
        G: "#forge:glass",
    }).id('mob_grinding_utils:recipe_tintedglass')

    //replace the iron swords with manasteel sword
    event.replaceInput(
        { id: 'mob_grinding_utils:recipe_saw' },
        "minecraft:iron_sword",
        Item.of('botania:manasteel_sword')
    )

    //edit and gate the beheading Upgrade, with mix out of botania and blood_magic
    event.shaped( Item.of('mob_grinding_utils:saw_upgrade_beheading', 1), [
        'CAC',
        'BDB',
        'CAC'
    ], {
        A: Item.of('botania:elementium_helmet'),
        B: Item.of('botania:manasteel_helmet'),
        C: 'botania:manasteel_nugget',
        D: 'bloodmagic:largebloodstonebrick',
    }).id('mob_grinding_utils:recipe_saw_upgrade_beheading')

    //edit the fortune upgrade to make it more diffculty
    event.shaped( Item.of('mob_grinding_utils:saw_upgrade_looting', 1), [
        'DAD',
        'ABA',
        'DAD'
    ], {
        A: stages.stage3.magic.early,
        B: stages.stage2.magic.mid,
        D: 'botania:manasteel_nugget'
    }).id('mob_grinding_utils:recipe_saw_upgrade_looting')

})