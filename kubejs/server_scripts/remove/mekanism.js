ServerEvents.recipes(event => {
    event.remove([
        { output: 'mekanismadditions:walkie_talkie' },
        { output: 'mekanism:upgrade_anchor' },
        { output: 'mekanismadditions:obsidian_tnt' },
        { output: 'mekanism:dimensional_stabilizer' },
        { output: 'mekanism:digital_miner' }
    ])

    let MekaSuit = [
        'mekanism:mekasuit_helmet',  // Meka Helm
        'mekanism:mekasuit_bodyarmor',   // Meka Bodyarmor
        'mekanism:mekasuit_pants', // Meka Pants
        'mekanism:mekasuit_boots', // Meka Boots
        'mekanism:module_energy_unit', // Meka energy Unit
    ];

    // Entfernen aller definierten Rezepte
    MekaSuit.forEach(recipeId => {
        event.remove({ id: recipeId });
    });
    //event.remove({ id: 'minecraft:enchantment.mekanismadditions.walkie_talkie' })
})
