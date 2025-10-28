//priority 0

let arsnoveau_gated = (event, active, debug) => {
    if (!active) return;
    console.log('Gated Ars_Nouveau')

    //edit the scribes_table. #earlygame
    event.forEachRecipe(
        { id: 'ars_nouveau:scribes_table' }, r => {
            event.remove({
                output: r.json.get("result").get("id")
            })
            event.custom({
                "type": "minecraft:crafting_shaped",
                "key": {
                    "x": { "item": "ars_nouveau:archwood_slab" },
                    "y": { "tag": "c:nuggets/gold" },
                    "z": { "tag": "c:logs/archwood" },
                    "w": { "item": mjConfig.stages.stage2.magic.early }
                },
                "pattern": [
                    "xwx",
                    "y y",
                    "z z"
                ],
                "result": {
                    "id": "ars_nouveau:scribes_table"
                }
            }).id(r.getId())
        }
    )

    //edit the imbuement_chamber. #earlygame
    event.forEachRecipe(
        { id: 'ars_nouveau:imbuement_chamber' }, r => {
            event.remove({
                output: r.json.get("result").get("id")
            })
            event.custom({
                "type": "minecraft:crafting_shaped",
                "key": {
                    "x": { "item": "ars_nouveau:archwood_planks" },
                    "y": { "tag": "c:ingots/gold" },
                    "w": { "item": mjConfig.stages.stage2.magic.early }
                },
                "pattern": [
                    "xyx",
                    "w w",
                    "xyx"
                ],
                "result": {
                    "id": "ars_nouveau:imbuement_chamber"
                }
            }).id(r.getId())
        }
    )

    // edit the enchanting. #midgame
    event.forEachRecipe(
        { id: 'ars_nouveau:enchanting_apparatus' }, r => {
            event.remove({
                output: r.json.get("result").get("id")
            })
            event.custom({
                "type": "minecraft:crafting_shaped",
                "key": {
                    "d": { "tag": "c:gems/diamond" },
                    "g": { "tag": "c:ingots/gold" },
                    "n": { "tag": "c:nuggets/gold" },
                    "s": { "item": "ars_nouveau:sourcestone" },
                    "w": { "item": mjConfig.stages.stage2.magic.mid }
                },
                "pattern": [
                    "nsn",
                    "gdg",
                    "nwn"
                ],
                "result": {
                    "id": "ars_nouveau:enchanting_apparatus"
                }
            }).id(r.getId())
        }
    )

    // edit the ritual brazier. #midgame
    event.forEachRecipe(
        { id: 'ars_nouveau:ritual_brazier' }, r => {
            event.remove({
                output: r.json.get("result").get("id")
            })
            event.custom({
                "type": "minecraft:crafting_shapeless",
                "ingredients": [
                    { "item": "ars_nouveau:arcane_pedestal" },
                    { "tag": "c:storage_blocks/source" },
                    { "tag": "c:ingots/gold" },
                    { "tag": "c:ingots/gold" },
                    { "item": mjConfig.stages.stage2.magic.mid }
                ],
                "result": {
                    "id": "ars_nouveau:ritual_brazier"
                }
            }).id(r.getId())
        }
    )

    //change archmage spellbook and resort the recipe. #endgame
    event.forEachRecipe(
        { id: "ars_nouveau:archmage_book_upgrade" }, r => {

            event.remove(r.getId())
            event.custom({
                category: "misc",
                type: "ars_nouveau:book_upgrade",
                ingredients: [
                    { tag: "c:ender_pearls" },
                    { item: "ars_nouveau:apprentice_spell_book" },
                    { tag: "c:ender_pearls" },
                    { tag: "c:gems/emerald" },
                    { item: mjConfig.stages.stage2.magic.end },
                    { tag: "c:gems/emerald" },
                    { item: "minecraft:totem_of_undying" },
                    { item: "minecraft:nether_star" },
                    { item: "ars_nouveau:wilden_tribute" }
                ],
                result: {
                    id: "ars_nouveau:archmage_spell_book",
                    count: 1

                },
            }).id(r.getId())
        }
    )
}