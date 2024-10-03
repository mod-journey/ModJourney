ServerEvents.recipes(event => {

    event.custom(
        {
            "type": "mekanism:metallurgic_infusing",
            "chemicalInput": {
                "amount": 120,
                "tag": "mekanism:redstone"
            },
            "itemInput": {
                "ingredient": {
                    "item" : "ae2:charged_certus_quartz_crystal"
                }
            },
            "output": {
                "count": 2,
                "item": "ae2:fluix_crystal"
            }
        }
    ).id("modjourney:infusing/fluix_crystal")

    event.custom(
        {
          "type": "industrialforegoing:dissolution_chamber",
          "input": [
            {
              "item": "ae2:charged_certus_quartz_crystal"
            },
            {
              "item": "minecraft:quartz"
            },
            {
              "item": "minecraft:redstone"
            }
          ],
          "inputFluid": "{Amount:1000,FluidName:\"minecraft:water\"}",
          "output": {
            "count": 2,
            "item": "ae2:fluix_crystal"
          },
          "processingTime": 300
        }
    ).id("modjourney:dissolution/fluix_crystal")
})