let add_creativeitemsTechnic = (event,active,debug) => {
    if (!active) return;
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
            "id": "mekanism:mekasuit_helmet",
            "count": 1
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
            "id": "mekanism:mekasuit_bodyarmor",
            "count": 1
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
            "id": "mekanism:mekasuit_pants",
            "count": 1
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
            "id": "mekanism:mekasuit_boots",
            "count": 1
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
            "id": "mekanism:module_energy_unit",
            "count": 1
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
            "id": 'mekanism:creative_energy_cube',
            "count": 1
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
            "id": "aeinfinitybooster:dimension_card",
            "count": 1
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
            "id": "ae2:creative_energy_cell",
            "count": 1
        }
    }).id('mod_journey:creative/creative_energy_cell');

}