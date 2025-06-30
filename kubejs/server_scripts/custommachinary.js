// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')


ServerEvents.recipes(event => {

    let produce = [
        { sapling: 'minecraft:oak_sapling',      log: 'minecraft:oak_log' },
        { sapling: 'minecraft:spruce_sapling',   log: 'minecraft:spruce_log' },
        { sapling: 'minecraft:birch_sapling',    log: 'minecraft:birch_log' },
        { sapling: 'minecraft:jungle_sapling',   log: 'minecraft:jungle_log' },
        { sapling: 'minecraft:acacia_sapling',   log: 'minecraft:acacia_log' },
        { sapling: 'minecraft:dark_oak_sapling', log: 'minecraft:oak_log' },
        { sapling: 'minecraft:cherry_sapling',   log: 'minecraft:cherry_log' }
    ]

    let tree_production = () => {
        for (let i = 0; i < produce.length; i++) {
            let sapling = produce[i].sapling
            let log = produce[i].log

            event.recipes.custommachinery.custom_machine("mod_journey:tree_planter", 200)
                .requireFluid("1000 x #minecraft:water")
                .requireItem(`1x ${sapling}`)
                .produceItem(`2x ${log}`)
                .produceItem(`1x ${log}`).chance(0.5)
                .produceItem(`1x ${sapling}`)
                .produceItem(`1x ${sapling}`).chance(0.1)
        }


    }
    tree_production()


    event.recipes.custommachinery.custom_machine("mod_journey:coal_gen", 200)
        .requireItem("#minecraft:coals")
        .produceEnergy(1000)

    event.recipes.custommachinery.custom_machine("mod_journey:water_gen", 100)
        .produceFluid("1000 x minecraft:water")
        .requireEnergy(250)



    let seed_planter = [
        { seed: "croptopia:artichoke_seed",     crop: "croptopia:artichoke "},
        { seed: "croptopia:asparagus_seed",     crop: "croptopia:asparagus "},
        { seed: "croptopia:barley_seed",        crop: "croptopia:barley "},
        { seed: "croptopia:basil_seed",         crop: "croptopia:basil "},
        { seed: "croptopia:bellpepper_seed",    crop: "croptopia:bellpepper "},
        { seed: "croptopia:blackbean_seed",     crop: "croptopia:blackbean "},
        { seed: "croptopia:blackberry_seed",    crop: "croptopia:blackberry "},
        { seed: "croptopia:blueberry_seed",     crop: "croptopia:blueberry "},
        { seed: "croptopia:broccoli_seed",      crop: "croptopia:broccoli "},
        { seed: "croptopia:cabbage_seed",       crop: "croptopia:cabbage "},
        { seed: "croptopia:cantaloupe_seed",    crop: "croptopia:cantaloupe "},
        { seed: "croptopia:cauliflower_seed",   crop: "croptopia:cauliflower "},
        { seed: "croptopia:celery_seed",        crop: "croptopia:celery "},
        { seed: "croptopia:chile_pepper_seed",  crop: "croptopia:chile_pepper"},
        //{ seed: "croptopia:coffee_seed",        crop: "croptopia:coffee "},
        { seed: "croptopia:corn_seed",          crop: "croptopia:corn "},
        { seed: "croptopia:cranberry_seed",     crop: "croptopia:cranberry "},
        { seed: "croptopia:cucumber_seed",      crop: "croptopia:cucumber "},
        { seed: "croptopia:currant_seed",       crop: "croptopia:currant "},
        { seed: "croptopia:eggplant_seed",      crop: "croptopia:eggplant "},
        { seed: "croptopia:elderberry_seed",    crop: "croptopia:elderberry "},
        { seed: "croptopia:garlic_seed",        crop: "croptopia:garlic "},
        { seed: "croptopia:ginger_seed",        crop: "croptopia:ginger "},
        { seed: "croptopia:grape_seed",         crop: "croptopia:grape "},
        { seed: "croptopia:greenbean_seed",     crop: "croptopia:greenbean "},
        { seed: "croptopia:greenonion_seed",    crop: "croptopia:greenonion "},
        { seed: "croptopia:honeydew_seed",      crop: "croptopia:honeydew "},
        { seed: "croptopia:hops_seed",          crop: "croptopia:hops "},
        { seed: "croptopia:kale_seed",          crop: "croptopia:kale "},
        { seed: "croptopia:kiwi_seed",          crop: "croptopia:kiwi "},
        { seed: "croptopia:leek_seed",          crop: "croptopia:leek "},
        { seed: "croptopia:lettuce_seed",       crop: "croptopia:lettuce "},
        { seed: "croptopia:mustard_seed",       crop: "croptopia:mustard "},
        { seed: "croptopia:oat_seed",           crop: "croptopia:oat "},
        { seed: "croptopia:olive_seed",         crop: "croptopia:olive "},
        { seed: "croptopia:onion_seed",         crop: "croptopia:onion "},
        { seed: "croptopia:peanut_seed",        crop: "croptopia:peanut "},
        { seed: "croptopia:pepper_seed",        crop: "croptopia:pepper "},
        { seed: "croptopia:pineapple_seed",     crop: "croptopia:pineapple "},
        { seed: "croptopia:radish_seed",        crop: "croptopia:radish "},
        { seed: "croptopia:raspberry_seed",     crop: "croptopia:raspberry "},
        { seed: "croptopia:rhubarb_seed",       crop: "croptopia:rhubarb "},
        { seed: "croptopia:rice_seed",          crop: "croptopia:rice "},
        { seed: "croptopia:rutabaga_seed",      crop: "croptopia:rutabaga "},
        { seed: "croptopia:saguaro_seed",       crop: "croptopia:saguaro "},
        { seed: "croptopia:soybean_seed",       crop: "croptopia:soybean "},
        { seed: "croptopia:spinach_seed",       crop: "croptopia:spinach "},
        { seed: "croptopia:squash_seed",        crop: "croptopia:squash "},
        { seed: "croptopia:strawberry_seed",    crop: "croptopia:strawberry "},
        { seed: "croptopia:sweetpotato_seed",   crop: "croptopia:sweetpotato "},
        //{ seed: "croptopia:tea_seed", crop: "croptopia:tea "},
        { seed: "croptopia:tomatillo_seed",     crop: "croptopia:tomatillo "},
        { seed: "croptopia:tomato_seed",        crop: "croptopia:tomato "},
        { seed: "croptopia:turmeric_seed",      crop: "croptopia:turmeric "},
        { seed: "croptopia:turnip_seed",        crop: "croptopia:turnip "},
        { seed: "croptopia:vanilla_seeds",      crop: "croptopia:vanilla "},
        { seed: "croptopia:yam_seed",           crop: "croptopia:yam "},
        { seed: "croptopia:zucchini_seed",      crop: "croptopia:zucchini "},
        { seed: "minecraft:beetroot_seeds",     crop: "minecraft:beetroot "},
        { seed: "minecraft:melon_seeds",        crop: "minecraft:melon "},
        { seed: "minecraft:pumpkin_seeds",      crop: "minecraft:pumpkin "},
        { seed: "minecraft:torchflower_seeds",  crop: "minecraft:torchflower "},
        { seed: "minecraft:wheat_seeds",        crop: "minecraft:wheat "}
    ]

    function seed_panter() {
        for (let i = 0; i < seed_planter.length; i++) {
            event.recipes.custommachinery.custom_machine("mod_journey:seed_planter", 200)
                .requireEnergy(4000)
                .requireFluid("1000 x minecraft:water")
                .requireItem(`1x ${seed_planter[i].seed}`)
                .produceItem(`1x ${seed_planter[i].crop}`)
                .produceItem(`1x ${seed_planter[i].crop}`).chance(0.5)
                .produceItem(`1x ${seed_planter[i].seed}`)
                .produceItem(`1x ${seed_planter[i].seed}`).chance(0.1)
        }
    }
    seed_panter()

    let molds = [
        'immersiveengineering:mold_rod',
        'immersiveengineering:mold_gear',
        'immersiveengineering:mold_plate'
    ]

    let ores = [
        'aluminum',
      'lead',
        'nickel',
        'osmium',
        'platinum',
        'silver',
        'tin',
        'uranium',
        'zinc',
        'iridium',
        'steel',
        'invar',
        'electrum',
        'bronze',
        'brass',
        'enderium',
        'lumium',
        'signalum',
        'constantan',
        'copper',
        'iron',
        'gold',
        //'diamond',
        'netherite'

    ]

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

})
