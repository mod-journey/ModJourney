//priority: 0

let add_ae2_fluix = (event, active, debug) => {
    if (!active) return;
    event.custom(
        {
            "type": "mekanism:metallurgic_infusing",
            "chemical_input": {
                "amount": 120,
                "tag": "mekanism:redstone"
            },
            "item_input": {
                "count": 1,
                "item": "ae2:charged_certus_quartz_crystal"

            },
            "output": {
                "count": 2,
                "id": "ae2:fluix_crystal"
            },
            "per_tick_usage": false
        }
    ).id("mod_journey:infusing/fluix_crystal")

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
            "inputFluid": {
                "amount": 1000,
                "fluid": "minecraft:water"
            },
            "output": {
                "count": 2,
                "id": "ae2:fluix_crystal"
            },
            "processingTime": 300
        }
    ).id("mod_journey:dissolution/fluix_crystal")
}