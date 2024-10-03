ServerEvents.recipes(event => {

    // Rezept für Mekasuit Helmet (Ultimate Crafting Table)
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 4,  // Ultimate Crafting Table (höchster Tier-Level)
        "pattern": [
            "GGGGG",
            "GGGGG",
            "GGCBG",
            "GGGGG",
            "GGGGG"
        ],
        "key": {
            "G": {
                "item": "thermal:gold_coin"
            },
            "C": {
                "item": "powah:crystal_nitro"
            },
            "B": {
                "item": "minecraft:diamond_helmet"
            }
        },
        "result": {
            "item": "mekanism:mekasuit_helmet"
        }
    });

    // Rezept für Mekasuit Body Armor (Ultimate Crafting Table)
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 4,  // Ultimate Crafting Table (höchster Tier-Level)
        "pattern": [
            "GGGGG",
            "GGGGG",
            "GGCBG",
            "GGGGG",
            "GGGGG"
        ],
        "key": {
            "G": {
                "item": "thermal:gold_coin"
            },
            "C": {
                "item": "powah:crystal_nitro"
            },
            "B": {
                "item": "minecraft:diamond_chestplate"
            }
        },
        "result": {
            "item": "mekanism:mekasuit_bodyarmor"
        }
    });

    // Rezept für Mekasuit Pants (Ultimate Crafting Table)
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 4,  // Ultimate Crafting Table (höchster Tier-Level)
        "pattern": [
            "GGGGG",
            "GGGGG",
            "GGCBG",
            "GGGGG",
            "GGGGG"
        ],
        "key": {
            "G": {
                "item": "thermal:gold_coin"
            },
            "C": {
                "item": "powah:crystal_nitro"
            },
            "B": {
                "item": "minecraft:diamond_leggings"
            }
        },
        "result": {
            "item": "mekanism:mekasuit_pants"
        }
    });

    // Rezept für Mekasuit Boots (Ultimate Crafting Table)
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 4,  // Ultimate Crafting Table (höchster Tier-Level)
        "pattern": [
            "GGGGG",
            "GGGGG",
            "GGCBG",
            "GGGGG",
            "GGGGG"
        ],
        "key": {
            "G": {
                "item": "thermal:gold_coin"
            },
            "C": {
                "item": "powah:crystal_nitro"
            },
            "B": {
                "item": "minecraft:diamond_boots"
            }
        },
        "result": {
            "item": "mekanism:mekasuit_boots"
        }
    });

    // Rezept für Energy Unit (Ultimate Crafting Table)
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 4,  // Ultimate Crafting Table (höchster Tier-Level)
        "pattern": [
            "GGG",
            "GCG",
            "GGG"
        ],
        "key": {
            "G": {
                "item": "thermal:gold_coin"
            },
            "C": {
                "item": "powah:crystal_nitro"
            }
        },
        "result": {
            "item": "mekanism:module_energy_unit"
        }
    });

    // Rezept für Creative Energy Cube (Ultimate Crafting Table) mit NBT-Daten
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 4,  // Ultimate Crafting Table (höchster Tier-Level)
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
                "item": "thermal:gold_coin"
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
    });


    // Rezept für Dimension Card (Ultimate Crafting Table)
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 4,  // Ultimate Crafting Table (höchster Tier-Level)
        "pattern": [
            "GGGGG",
            "GGCBG",
            "GGGGG",
        ],
        "key": {
            "G": {
                "item": "thermal:gold_coin"
            },
            "C": {
                "item": "powah:crystal_nitro"
            },
            "B": {
                "item": "ae2:engineering_processor"
            }
        },
        "result": {
            "item": "aeinfinitybooster:dimension_card"
        }
    });
});


