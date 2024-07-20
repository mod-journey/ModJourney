// priority: 5

JEIEvents.hideItems(event => {

    //thermal series tnt removen

    const tnt = [
        'thermal:detonator',
        'thermal:explosive_grenade',
        'thermal:fire_tnt',
        'thermal:ice_tnt',
        'thermal:lightning_tnt',
        'thermal:earth_tnt',
        'thermal:ender_tnt',
        'thermal:glowstone_tnt',
        'thermal:redstone_tnt',
        'thermal:slime_tnt',
        'thermal:phyto_tnt',
        'thermal:nuke_tnt'
    ]

    tnt.forEach(element => {
        event.hide(element)
    });

    //thermal series hide florb
    event.hide('thermal:florb')

    //botania lenses removen

    const lens = [
        'botania:lens_explosive',
        'botania:lens_piston',
        'botania:lens_weight',
        'botania:lens_mine'
    ]

    lens.forEach(element => {
        event.hide(element)
    });


    //botania Staebe removen

    let rods = [
        'botania:terraform_rod',
        'botania:exchange_rod',
        'botania:water_rod'
    ]

    rods.forEach(element => {
        event.hide(element)
    });

    //botania Laputa Shard removen
    event.hide('botania:laputa_shard')


    // Mystical Agriculture
    let mystical_hide = [
        'mysticalagriculture:harvester',
        'mysticalagriculture:soul_extractor'
    ]

    // remove all growth accelerators (but keep the first)
    let mystical_tiers = [
        // inferium,
        'prudentium',
        'tertium',
        'imperium',
        'supremium'
    ];

    // Add accelerators to remove list
    mystical_tiers.forEach(tier => {
        mystical_hide.push(Item.of(`mysticalagriculture:${ tier }_growth_accelerator`))
    })

    /**
     * INFO: this removes all Soul jars even if I try to remove only these with a type (to exclude the empty ja)
     * @see https://wiki.latvian.dev/books/kubejs-legacy/page/item-and-ingredient
     */
    mystical_hide.push(Item.of('mysticalagriculture:soul_jar', '{Souls:0.5d,Type:"mysticalagriculture:fish"}'));
    //event.hide(Item.withNBT('mysticalagriculture:soul_jar', '{Souls:0.5d,Type:"mysticalagriculture:fish"}'));

    mystical_hide.forEach((element) => {
        event.hide(element)
    })


    //immersive
    event.hide('immersiveengineering:cloche')


    //Mob_Grinding_Utils
    const mob_grinding = [
        'mob_swab_used',
        'ender_inhibitor_off',
        'dreadful_dirt',
        'delightful_dirt',
        'rotten_egg',
        'golden_egg',
        'monocle',
        'nutritious_chicken_feed',
        'gm_chicken_feed_cursed',
        'dark_oak_stone',
    ]

    mob_grinding.forEach((element) => {
        event.hide(Item.of('mob_grinding_utils:' + element))
    });


    //Structure_gel API Build Mod
    const structure_api = [
        'dynamic_spawner',
        'red_gel',
        'blue_gel',
        'green_gel',
        'cyan_gel',
        'orange_gel',
        'building_tool',
        'yellow_gel',
        'data_handler'
    ]

    structure_api.forEach((element) => {
        event.hide(Item.of('structure_gel:' + element))
    });


    //RFT Tools
    const remove = [
        'advanced_charged_porter',
        'charged_porter',
        'teleport_probe',
        'creative_screen',
        'matter_booster',
        'tank',
        'matter_beamer',
        'flight_module',
        'luck_module',
        'peaceful_module',
        'spawner',
        'destination_analyzer',
        'dialing_device',
        'matter_receiver',
        'matter_transmitter',
        'syringe'
    ]

    remove.forEach((element) => {
        event.hide(Item.of('rftoolsutility:' + element))
    });

    //Industrial Foregoing
    const infinty_hide = [
        'saw',
        'hammer',
        'trident',
        'backpack',
        'launcher',
        'nuke',
        'infinity_drill',
        'drill'
    ]

    infinty_hide.forEach((element) => {
        event.hide(
            Item.of('industrialforegoing:infinity_' + element)
        )
    });


    //alltheores - Other Ores werden removed
    const other_oreToRemove = [
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
        'coal',
        'copper',
        'emerald',
        'iron',
        'gold',
        'quartz',
        'redstone',
        'diamond',
        'lapis',
    ]

    other_oreToRemove.forEach((atm_ore) => {
        event.hide(`alltheores:other_${ atm_ore }_ore`)
        event.hide(Item.of('ae2:facade', '{item:"alltheores:other_' + atm_ore + '_ore"}'
        ))
    })

    event.hide(Item.of('mekanism:creative_chemical_tank'))
})