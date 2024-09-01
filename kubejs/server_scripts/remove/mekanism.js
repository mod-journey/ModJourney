ServerEvents.recipes(event => {
    event.remove([
        { output: 'mekanismadditions:walkie_talkie' },
        { output: 'mekanism:upgrade_anchor' },
        { output: 'mekanismadditions:obsidian_tnt' },
        { output: 'mekanism:dimensional_stabilizer' }
    ])

    //event.remove({ id: 'minecraft:enchantment.mekanismadditions.walkie_talkie' })
})
