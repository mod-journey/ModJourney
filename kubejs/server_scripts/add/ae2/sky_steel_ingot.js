ServerEvents.recipes(event => {

    event.custom(
        {
            "type": "mekanism:metallurgic_infusing",
            "chemicalInput": {
                "amount": 120,
                "tag": "mekanism:refined_obsidian"
            },
            "itemInput": {
                "ingredient": {
                    "item" : "ae2:sky_stone_block"
                }
            },
            "output": {
                "count": 1,
                "item": "megacells:sky_steel_ingot"
            }
        }
    ).id("mod_journey:infusing/sky_steel_ingot")

    event.custom(
        {
            "type": "industrialforegoing:dissolution_chamber",
            "input": [
                {
                    "item": "ae2:charged_certus_quartz_crystal"
                },
                {
                    "item": "mekanism:alloy_atomic"
                },
                {
                    "item": "ae2:sky_stone_block"
                }
            ],
            "inputFluid": "{Amount:1000,FluidName:\"minecraft:lava\"}",
            "output": {
                "count": 1,
                "item": "megacells:sky_steel_ingot"
            },
            "processingTime": 300
        }
    ).id("mod_journey:dissolution/sky_steel_ingot")
})