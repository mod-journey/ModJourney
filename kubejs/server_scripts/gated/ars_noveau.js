//priority 0

let arsnoveau_gated = (event, active, debug) => {
    if (!active) return;
    console.log('Gated Ars_Nouveau')

    //edit the scribes_table to add a bucket of life. #earlygame
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
                    "w": { "item": stages.stage2.magic.early }
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

    //edit the imbuement_chamber to add a bucket of life. #earlygame
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
                    "w": { "item": stages.stage2.magic.early }
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

    // edit the enchanting apparatus to add bloodstone Brick #midgame
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
                    "w": { "item": stages.stage2.magic.mid }
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

    // edit the ritual brazier to add bloodstone Brick #midgame
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
                    { "item": stages.stage2.magic.mid }
                ],
                "result": {
                    "id": "ars_nouveau:ritual_brazier"
                }
            }).id(r.getId())
        }
    )

    //change archmage spellbook and replace one smaragd for one hellforge part  #endgame
    event.forEachRecipe(
        { id: "ars_nouveau:archmage_spell_book_upgrade" }, r => {
            //change crafting design cosmetic
            let input3 = r.json.get("ingredients").get(3)
            input3.add("id", "minecraft:emerald")

            let input5 = r.json.get("ingredients").get(5)
            input5.add("id", "minecraft:ender_pearl")

            let input6 = r.json.get("ingredients").get(6)
            input6.add("id", "minecraft:emerald")

            let input8 = r.json.get("ingredients").get(8)
            input8.add("id", "minecraft:ender_pearl")

            let input4 = r.json.get("ingredients").get(4)
            input4.add("id", stages.stage2.magic.end)

            let input7 = r.json.get("ingredients").get(7)
            input7.add("id", "minecraft:totem_of_undying")

            event.custom(r.json).id(r.getId())
        }
    )
}