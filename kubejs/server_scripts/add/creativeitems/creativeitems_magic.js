let add_creativeitemsMagic = (event,active,debug) => {
    if (!active) return;

    // Rezept für Augmenting Table (Ultimate Crafting Table)
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 4,
        "pattern": [
            "   G   ",
            " GGGGG ",
            "GGGGGGG",
            " GGCBG ",
            "GGGGGGG",
            " GGGGG ",
            "   G   "
        ],
        "key": {
            "G": {
                "item": "mod_journey:gold_coin"
            },
            "C": {
                "item": stages.stage3.magic.end
            },
            "B": {
                "item": "apothic_enchanting:endshelf"
            }
        },
        "result": {
            "id": "apotheosis:augmenting_table"
        }
    }).id('mod_journey:creative/augmenting_table');

    // Rezept für Ars Nouveau Creative Source Jar (Ultimate Crafting Table)
    event.custom({
        "type": "extendedcrafting:shaped_table",
        "tier": 4,
        "pattern": [
            "   G   ",
            " GGGGG ",
            "GGGGGGG",
            " GGCBG ",
            "GGGGGGG",
            " GGGGG ",
            "   G   "
        ],
        "key": {
            "G": {
                "item": "mod_journey:gold_coin"
            },
            "C": {
                "item": stages.stage3.magic.end
            },
            "B": {
                "item": "ars_nouveau:arcane_pedestal"
            }
        },
        "result": {
            "id": "ars_nouveau:creative_source_jar"
        }
    }).id('mod_journey:creative/creative_source_jar');


    event.shapeless(
        Item.of('ars_nouveau:annotated_codex', 1),
        [
            Item.of("ars_nouveau:archmage_spell_book"),
            '5x mod_journey:gold_coin'
        ]
    ).id("mod_journey:creative/annotated_codex")


};