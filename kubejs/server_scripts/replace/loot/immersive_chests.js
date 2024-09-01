// priority 10
LootJS.modifiers((event) => {
    const chestBanList = [
        'immersiveengineering:nugget_nickel',
        //'minecraft:iron_ingot',
        'immersiveengineering:stick_treated',
        'immersiveengineering:ingot_aluminum',
        'immersiveengineering:stick_aluminum',
        'immersiveengineering:coal_coke',
        'immersiveengineering:component_steel',
        'immersiveengineering:nugget_lead',
        'immersiveengineering:stick_iron',
        'immersiveengineering:hemp_fabric',
        'immersiveengineering:component_iron',
        'immersiveengineering:stick_steel',
        'immersiveengineering:nugget_silver',
        //'minecraft:copper_ingot'
    ]


    event
      .addLootTypeModifier([LootType.CHEST, LootType.UNKNOWN])
      //.anyDimension("mod_journey:farmworld")
      .removeLoot(Ingredient.of(chestBanList))
      .addAlternativesLoot(
        LootEntry.of("minecraft:apple").when((c) => c.randomChance(0.8)),
        LootEntry.of("minecraft:stick").when((c) => c.randomChance(0.3)),
        LootEntry.of("minecraft:diamond").when((c) => c.randomChance(0.7)),
        LootEntry.of("minecraft:coal").when((c) => c.randomChance(0.99)),
        LootEntry.of("minecraft:torch").when((c) => c.randomChance(0.2))
      );
});