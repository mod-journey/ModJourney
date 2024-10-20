ServerEvents.recipes(event => {

    // Rezept für Mekasuit Helmet (Ultimate Crafting Table)
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 4,
        "pattern": [
            "GGGGG",
            "GGGGG",
            "GGCBG",
            "GGGGG",
            "GGGGG"
        ],
        "key": {
            "G": {
                "item": "mod_journey:gold_coin"
            },
            "C": {
                "item": stages.stage3.core
            },
            "B": {
                "item": "minecraft:diamond_helmet"
            }
        },
        "result": {
            "item": "mekanism:mekasuit_helmet"
        }
    }).id('mod_journey:creative/mekasuit_helmet');

    // Rezept für Mekasuit Body Armor (Ultimate Crafting Table)
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 4,
        "pattern": [
            "GGGGG",
            "GGGGG",
            "GGCBG",
            "GGGGG",
            "GGGGG"
        ],
        "key": {
            "G": {
                "item": "mod_journey:gold_coin"
            },
            "C": {
                "item": stages.stage3.core
            },
            "B": {
                "item": "minecraft:diamond_chestplate"
            }
        },
        "result": {
            "item": "mekanism:mekasuit_bodyarmor"
        }
    }).id('mod_journey:creative/mekasuit_bodyarmor');

    // Rezept für Mekasuit Pants (Ultimate Crafting Table)
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 4,
        "pattern": [
            "GGGGG",
            "GGGGG",
            "GGCBG",
            "GGGGG",
            "GGGGG"
        ],
        "key": {
            "G": {
                "item": "mod_journey:gold_coin"
            },
            "C": {
                "item": stages.stage3.core
            },
            "B": {
                "item": "minecraft:diamond_leggings"
            }
        },
        "result": {
            "item": "mekanism:mekasuit_pants"
        }
    }).id('mod_journey:creative/mekasuit_pants');

    // Rezept für Mekasuit Boots (Ultimate Crafting Table)
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 4,
        "pattern": [
            "GGGGG",
            "GGGGG",
            "GGCBG",
            "GGGGG",
            "GGGGG"
        ],
        "key": {
            "G": {
                "item": "mod_journey:gold_coin"
            },
            "C": {
                "item": stages.stage3.core
            },
            "B": {
                "item": "minecraft:diamond_boots"
            }
        },
        "result": {
            "item": "mekanism:mekasuit_boots"
        }
    }).id('mod_journey:creative/mekasuit_boots');

    // Rezept für Energy Unit (Ultimate Crafting Table)
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 4,
        "pattern": [
            "GGG",
            "GCG",
            "GGG"
        ],
        "key": {
            "G": {
                "item": "mod_journey:gold_coin"
            },
            "C": {
                "item": stages.stage3.core
            }
        },
        "result": {
            "item": "mekanism:module_energy_unit"
        }
    }).id('mod_journey:creative/module_energy_unit');

    // Rezept für Creative Energy Cube (Ultimate Crafting Table) mit NBT-Daten
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 4,
        "pattern": [
            "GGGGGGGGG",
            "GGGGGGGGG",
            "GGGGGGGGG",
            "GGGGCGGGG",
            "GGGGGGGGG",
            "GGGGGGGGG"
        ],
        "key": {
            "G": {
                "item": "mod_journey:gold_coin"
            },
            "C": {
                "item": "mod_journey:antimatter_block"
            }
        },
        "result": {
            "item": "mekanism:creative_energy_cube",
            "count": 1,
            "nbt": "{mekData:{EnergyContainers:[{Container:0b,stored:\"18446744073709551615.9999\"}]}}"
        }
    }).id('mod_journey:creative/creative_energy_cube');


    // Rezept für Dimension Card (Ultimate Crafting Table)
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 4,
        "pattern": [
            "GGGGG",
            "GGCBG",
            "GGGGG",
        ],
        "key": {
            "G": {
                "item": "mod_journey:gold_coin"
            },
            "C": {
                "item": stages.stage3.core
            },
            "B": {
                "item": "ae2:engineering_processor"
            }
        },
        "result": {
            "item": "aeinfinitybooster:dimension_card"
        }
    }).id('mod_journey:creative/dimension_card');

    /// Recipe for creative ae energy cell (Ultimate Crafting Table)
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 4,
        "pattern": [
            "CCCCC",
            "CEEEC",
            "CENEC",
            "CEEEC",
            "CCCCC",
        ],
        "key": {
            "C": {
                "item": "mod_journey:gold_coin"
            },
            "E": {
                "item": "ae2:dense_energy_cell"
            },
            "N": {
                "item": stages.stage3.core
            }
        },
        "result": {
            "item": "ae2:creative_energy_cell"
        }
    }).id('mod_journey:creative/creative_energy_cell');

})


