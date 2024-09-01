// priority: 90
console.info('Add custom Scrolls.')

StartupEvents.registry('item', event => {

	for (let i = 1; i <= 9; i++) {
		event.create('mod_journey:scroll' + i )
			.texture('mod_journey:item/scroll' + i)
			.maxStackSize(16)
			.displayName("Schriftrolle " + i )
			.rarity("EPIC")
	}

	event.create('mod_journey:blank_scroll')
		.texture('mod_journey:item/blank_scroll')
		.maxStackSize(64)
		.displayName("Leere Schriftrolle")
		.rarity("RARE")

	event.create('mod_journey:the_rod_of_real_life')
		.displayName('The Rod of Real Life')
		.rarity("RARE")
		.maxStackSize(1)

	event.create('mod_journey:anti_ingot')
		.displayName('Antimatter Ingot')
		.rarity("EPIC")
		.maxStackSize(64)
})