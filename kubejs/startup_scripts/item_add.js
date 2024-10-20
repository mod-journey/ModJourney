// priority: 90
console.info('Add custom Scrolls.')

StartupEvents.registry('item', event => {

	for (let i = 1; i <= 9; i++) {
		event.create('mod_journey:scroll' + i)
			.texture('mod_journey:item/scroll' + i)
			.maxStackSize(16)
			.displayName("Schriftrolle " + i)
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

	event.create('mod_journey:clotted_blood_clump')
		.displayName('Clotted Blood Clump')
		.maxStackSize(64)

	let magic_scrolls_array = [
		"blank",
		"one",
		"two",
		"three"
	]

	let magic_counter = 0;
	magic_scrolls_array.forEach(scroll => {
		event.create('mod_journey:magic_scroll_' + scroll)
			.texture('mod_journey:magic_scroll_' + scroll)
			.maxStackSize(16)
			.displayName("Magische Schriftrolle " + magic_counter)
			.rarity("EPIC")

		magic_counter = magic_counter + 1;
	});

	event.create('mod_journey:bronze_coin')
		.tooltip("You get it by completing Quests, Events or Trades. Texture from Thermal.")
		.texture('thermal:item/bronze_coin_0')
		.tag("forge:coins/bronze")

	event.create('mod_journey:silver_coin')
		.tooltip('You get it by completing Quests, Events or Trades. Texture from Thermal.')
		.texture('thermal:item/silver_coin_0')
		.tag("forge:coins/silver")

	event.create('mod_journey:gold_coin')
		.tooltip('You get it by completing Quests, Events or Trades. Texture from Thermal.')
		.texture('thermal:item/gold_coin_0')
		.tag("forge:coins/gold")

})