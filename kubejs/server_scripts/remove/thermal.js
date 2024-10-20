ServerEvents.recipes(event => {

    // TNT Thermal Series
    let tnt = [
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

    // Funktionsaufruf zum entfernen der Linsen
    tnt.forEach(element => {
        event.remove({ output: element});
    });

    // Enfernen der Florb
    event.remove({output: 'thermal:florb'})

    let coinRecipes = [
        // Rezepte für 1 Coin aus Nuggets
        'thermal:machines/press/press_iron_nugget_to_coin',  // 1 Iron Coin aus 1 Iron Nugget
        'thermal:machines/press/press_gold_nugget_to_coin',   // 1 Gold Coin aus 1 Gold Nugget
        'thermal:machines/press/press_copper_nugget_to_coin', // 1 Copper Coin aus 1 Copper Nugget
        'thermal:machines/press/press_silver_nugget_to_coin', // 1 Silver Coin aus 1 Silver Nugget
        'thermal:machines/press/press_netherite_nugget_to_coin', // 1 Netherite Coin aus 1 Netherite Nugget
        'thermal:machines/press/press_bronze_nugget_to_coin', // 1 Bronze Coin aus 1 Bronze Nugget
        'thermal:machines/press/press_lead_nugget_to_coin',   // 1 Lead Coin aus 1 Lead Nugget
        'thermal:machines/press/press_nickel_nugget_to_coin', // 1 Nickel Coin aus 1 Nickel Nugget
        'thermal:machines/press/press_tin_nugget_to_coin',    // 1 Tin Coin aus 1 Tin Nugget
        'thermal:machines/press/press_electrum_nugget_to_coin', // 1 Electrum Coin aus 1 Electrum Nugget
        'thermal:machines/press/press_invar_nugget_to_coin',   // 1 Invar Coin aus 1 Invar Nugget
        'thermal:machines/press/press_constantan_nugget_to_coin', // 1 Constantan Coin aus 1 Constantan Nugget
        'thermal:machines/press/press_signalum_nugget_to_coin', // 1 Signalum Coin aus 1 Signalum Nugget
        'thermal:machines/press/press_lumium_nugget_to_coin',   // 1 Lumium Coin aus 1 Lumium Nugget
        'thermal:machines/press/press_enderium_nugget_to_coin', // 1 Enderium Coin aus 1 Enderium Nugget
        
        // Rezepte für 3 Coins aus Ingots
        'thermal:machines/press/press_iron_ingot_to_coin',  // 3 Iron Coins aus 1 Iron Ingot
        'thermal:machines/press/press_gold_ingot_to_coin',   // 3 Gold Coins aus 1 Gold Ingot
        'thermal:machines/press/press_copper_ingot_to_coin', // 3 Copper Coins aus 1 Copper Ingot
        'thermal:machines/press/press_silver_ingot_to_coin', // 3 Silver Coins aus 1 Silver Ingot
        'thermal:machines/press/press_netherite_ingot_to_coin', // 3 Netherite Coins aus 1 Netherite Ingot
        'thermal:machines/press/press_bronze_ingot_to_coin', // 3 Bronze Coins aus 1 Bronze Ingot
        'thermal:machines/press/press_lead_ingot_to_coin',   // 3 Lead Coins aus 1 Lead Ingot
        'thermal:machines/press/press_nickel_ingot_to_coin', // 3 Nickel Coins aus 1 Nickel Ingot
        'thermal:machines/press/press_tin_ingot_to_coin',    // 3 Tin Coins aus 1 Tin Ingot
        'thermal:machines/press/press_electrum_ingot_to_coin', // 3 Electrum Coins aus 1 Electrum Ingot
        'thermal:machines/press/press_invar_ingot_to_coin',    // 3 Invar Coins aus 1 Invar Ingot
        'thermal:machines/press/press_constantan_ingot_to_coin', // 3 Constantan Coins aus 1 Constantan Ingot
        'thermal:machines/press/press_signalum_ingot_to_coin', // 3 Signalum Coins aus 1 Signalum Ingot
        'thermal:machines/press/press_lumium_ingot_to_coin',    // 3 Lumium Coins aus 1 Lumium Ingot
        'thermal:machines/press/press_enderium_ingot_to_coin'   // 3 Enderium Coins aus 1 Enderium Ingot
    ];

    // Entfernen aller definierten Rezepte
    coinRecipes.forEach(recipeId => {
        event.remove({ id: recipeId });
    });

    // Entfernen der Satchel - Bugfix Satchel in Sophisticated Backpacks
    event.remove({output: 'thermal:satchel'})

})
