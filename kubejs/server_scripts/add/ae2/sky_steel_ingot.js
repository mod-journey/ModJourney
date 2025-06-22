//priority: 0

let add_ae2_skystellingot = (event, active, debug) => {
    if (!active) return;
    event.custom(
        {
            "type": "mekanism:metallurgic_infusing",
            "chemical_input": {
                "amount": 120,
                "tag": "mekanism:refined_obsidian"
            },
            "item_input": {
                "count": 1,
                "item": "ae2:sky_stone_block"
            },
            "output": {
                "count": 1,
                "id": "megacells:sky_steel_ingot"
            },
            "per_tick_usage": false
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
            "inputFluid": {
                "amount": 1000,
                "fluid": "minecraft:lava"
            },
            "output": {
                "count": 1,
                "id": "megacells:sky_steel_ingot"
            },
            "processingTime": 300
        }
    ).id("mod_journey:dissolution/sky_steel_ingot")
}