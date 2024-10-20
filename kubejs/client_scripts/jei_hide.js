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
        'thermal:nuke_tnt',
        'thermal:lightning_grenade',
        'thermal:ice_grenade',
        'thermal:explosive_grenade',
        'thermal:phyto_grenade',
        'thermal:fire_grenade',
        'thermal:earth_grenade'
    ]

    tnt.forEach(element => {
        event.hide(element)
    });

    //thermal series hide florb
    event.hide('thermal:florb')

    //thermal series satchel
    event.hide('thermal:satchel')

    //thermal coins hide
    const coins = [
        'thermal:iron_coin',
        'thermal:copper_coin',
        'thermal:netherite_coin',
        'thermal:tin_coin',
        'thermal:lead_coin',
        'thermal:nickel_coin',
        'thermal:electrum_coin',
        'thermal:invar_coin',
        'thermal:constantan_coin',
        'thermal:signalum_coin',
        'thermal:lumium_coin',
        'thermal:enderium_coin',
        'thermal:gold_coin',
        'thermal:silver_coin',
        'thermal:bronze_coin'
    ];

    coins.forEach(element => {
        event.hide(element);
    });

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


    let mekanism_hide = [
        'mekanismadditions:walkie_talkie',
        'mekanism:upgrade_anchor',
        'mekanismadditions:obsidian_tnt',
        'mekanism:dimensional_stabilizer',
        'mekanism:digital_miner'
    ]
    mekanism_hide.forEach((itemName) => {
        event.hide(itemName)
    })


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

    //remove all cataclysm Boss Items from JEI. Problem: Any broken spawner and vial jar also also included.
    const cataclysm_boss_mobs = [
        "cataclysm:the_harbinger",
        "cataclysm:the_leviathan",
        "cataclysm:amethyst_crab",
        "cataclysm:ancient_remnant",
        "cataclysm:modern_remnant",
        "cataclysm:ignis",
        "cataclysm:ender_guardian",
        "cataclysm:netherite_monstrosity",
        "cataclysm:ender_golem"
    ]

    cataclysm_boss_mobs.forEach(element => {
        event.hide(Item.of('enderio:filled_soul_vial', '{BlockEntityTag:{EntityStorage:{Entity:{id:' + element + '}}}}'))
        event.hide(Item.of('enderio:broken_spawner', '{BlockEntityTag:{EntityStorage:{Entity:{id:' + element + '}}}}'))
        event.hide( element + '_spawn_egg' )
    });

    //removen der Concrete Botany Pots
    let dyes = [
        'white',
        'orange',
        'magenta',
        'light_blue',
        'yellow',
        'lime',
        'pink',
        'gray',
        'light_gray',
        'cyan',
        'purple',
        'blue',
        'brown',
        'green',
        'red',
        'black'
    ]

    dyes.forEach(colour => {
        event.hide(Item.of(`botanypots:${colour}_concrete_hopper_botany_pot`))
        event.hide(Item.of(`botanypots:${colour}_concrete_botany_pot`))
    });


    let extreme_remove = [
        //kreativgedöns
        'bigreactors:basic_turbinecreativesteamgenerator',
        'bigreactors:reinforced_turbinecreativesteamgenerator',
        'bigreactors:reinforced_reactorcreativewatergenerator',
        //für cc
        'bigreactors:reinforced_turbinecomputerport',
        'bigreactors:reinforced_reactorcomputerport',

        //battery zu OP pro Modul 680T FE
        'bigreactors:energizerpowerport_fe',
        'bigreactors:energizerstatus',
        'bigreactors:energizercomputerport',
        'bigreactors:energizercell',
        'bigreactors:energizercasing',
        'bigreactors:energizercontroller',
        'bigreactors:energycore',
        'bigreactors:energizerchargingport_fe'
    ]

    extreme_remove.forEach(element => {
        event.hide(Item.of(element))
    });


    //remove Ars Items from JEI
   let ars_remove = [
        'ars_nouveau:ritual_moonfall',
        'ars_nouveau:ritual_cloudshaping',
        'ars_nouveau:ritual_sunrise',
        'ars_nouveau:ritual_conjure_island_plains',
        'ars_nouveau:ritual_forestation',
        'ars_nouveau:ritual_flowering',
        'ars_nouveau:ritual_conjure_island_desert',
        'ars_nouveau:spell_turret',
        'ars_nouveau:timer_spell_turret',
        'ars_nouveau:basic_spell_turret',
        'ars_nouveau:rotating_spell_turret',
        'ars_nouveau:storage_lectern',
        'ars_nouveau:warp_scroll',
        'ars_nouveau:stable_warp_scroll',
        'ars_nouveau:portal'
    ]

    ars_remove.forEach(element => {
        event.hide(Item.of(element))
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
        event.hide(Item.of('ae2:facade', '{item:"alltheores:other_' + atm_ore + '_ore"}'))
    })

    event.hide(Item.of('ae2:vibration_chamber'))
    event.hide(Item.of('mekanism:creative_chemical_tank'))
    event.hide(Item.of('easy_villagers:iron_farm'))
    event.hide(Item.of('ae2wtlib:quantum_bridge_card'))

    
    //aether
    let aether_ice = [
        Item.of('aether:ice_ring', '{Damage:0}'),
        Item.of('aether:ice_pendant', '{Damage:0}'),
    ]

    aether_ice.forEach(element => {
        event.hide(element)
    });

    
    //itemfilters
     let itemfilters_hide = [
        'itemfilters:always_true',
        'itemfilters:always_false',
        'itemfilters:or',
        'itemfilters:and',
        'itemfilters:not',
        'itemfilters:xor',
        'itemfilters:tag',
        'itemfilters:mod',
        'itemfilters:id_regex',
        'itemfilters:damage',
        'itemfilters:block',
        'itemfilters:max_count',
        'itemfilters:strong_nbt',
        'itemfilters:weak_nbt',
        'itemfilters:custom',
    ]

    itemfilters_hide.forEach(element => {
        event.hide(element)
    });


    //ftbquests
     let ftbquests_hide = [
        'ftbquests:barrier',
        'ftbquests:stage_barrier',
        'ftbquests:detector',
        'ftbquests:loot_crate_opener',
        'ftbquests:screen_1',
        'ftbquests:screen_3',
        'ftbquests:screen_5',
        'ftbquests:screen_7',
        'ftbquests:task_screen_configurator',
    ]

    ftbquests_hide.forEach(element => {
        event.hide(element)
    });


})