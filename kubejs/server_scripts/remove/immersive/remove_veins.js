ServerEvents.recipes(event => {

  event.forEachRecipe({ mod: "immersiveengineering", type: "immersiveengineering:mineral_mix" }, r => {
    if (r.getId().contains("immersiveengineering:mineral/pentlandite")) {
      event.custom(
        {
          "type": "immersiveengineering:mineral_mix",
          "biome_predicates": [
            [
              "minecraft:is_overworld"
            ]
          ],
          "fail_chance": 0.1,
          "ores": [
            {
              "chance": 0.65,
              "output": {
                "tag": "c:ores/nickel"
              }
            },
            {
              "chance": 0.25,
              "output": {
                "tag": "c:ores/iron"
              }
            },
            {
              "chance": 0.1,
              "output": {
                "tag": "c:dusts/sulfur"
              }
            }
          ],
          "spoils": [
            {
              "chance": 0.2,
              "output": {
                "id": "minecraft:gravel"
              }
            },
            {
              "chance": 0.5,
              "output": {
                "id": "minecraft:cobblestone"
              }
            },
            {
              "chance": 0.3,
              "output": {
                "id": "minecraft:cobbled_deepslate"
              }
            }
          ],
          "weight": 15
        }
      ).id(r.getId())
    }
  })

})
