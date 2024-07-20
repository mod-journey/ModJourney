//priority 0

console.log('Gated Ars_Nouveau')

ServerEvents.recipes(event => {

   //edit the scribes_table to add a bucket of life. #earlygame
   event.forEachRecipe(
        {id: 'ars_nouveau:scribes_table' }, r => {
            event.remove({
                output: r.json.get("result").get("item")
            })
            event.custom({
                "type": "minecraft:crafting_shaped",
                "key": {
                "x": { "item": "ars_nouveau:archwood_slab" },
                "y": { "tag":  "forge:nuggets/gold" },
                "z": { "tag":  "forge:logs/archwood" },
                "w": { "item":  stages.stage2.magic.early }
                },
                "pattern": [
                "xwx",
                "y y",
                "z z"
                ],
                "result": {
                "item": "ars_nouveau:scribes_table"
                }
            }).id(r.getId())
        }
    )

    //edit the imbuement_chamber to add a bucket of life. #earlygame
    event.forEachRecipe(
        {id: 'ars_nouveau:imbuement_chamber' }, r => {
            event.remove({
                output: r.json.get("result").get("item")
            })
            event.custom({
                "type": "minecraft:crafting_shaped",
                "key": {
                  "x": { "item": "ars_nouveau:archwood_planks" },
                  "y": { "tag":  "forge:ingots/gold" },
                  "w": { "item":  stages.stage2.magic.early }
                },
                "pattern": [
                  "xyx",
                  "w w",
                  "xyx"
                ],
                "result": {
                  "item": "ars_nouveau:imbuement_chamber"
                }
            }).id(r.getId())
        }
    )

    // edit the enchanting apparatus to add bloodstone Brick #midgame
    event.forEachRecipe(
        {id: 'ars_nouveau:enchanting_apparatus' }, r => {
            event.remove({
                output: r.json.get("result").get("item")
            })
            event.custom({
                "type": "minecraft:crafting_shaped",
                "key": {
                  "d": { "tag":  "forge:gems/diamond" },
                  "g": { "tag":  "forge:ingots/gold" },
                  "n": { "tag":  "forge:nuggets/gold" },
                  "s": { "item": "ars_nouveau:sourcestone" },
                  "w": { "item":  stages.stage2.magic.mid }
                },
                "pattern": [
                  "nsn",
                  "gdg",
                  "nwn"
                ],
                "result": {
                  "item": "ars_nouveau:enchanting_apparatus"
                }
            }).id(r.getId())
        }
    )

    // edit the ritual brazier to add bloodstone Brick #midgame
    event.forEachRecipe(
        {id: 'ars_nouveau:ritual_brazier' }, r => {
            event.remove({
                output: r.json.get("result").get("item")
            })
            event.custom({
                "type": "minecraft:crafting_shapeless",
                "ingredients": [
                  { "item": "ars_nouveau:arcane_pedestal" },
                  { "tag":  "forge:storage_blocks/source" },
                  { "tag":  "forge:ingots/gold" },
                  { "tag":  "forge:ingots/gold" },
                  { "item": stages.stage2.magic.mid }
                ],
                "result": {
                  "item": "ars_nouveau:ritual_brazier"
                }
            }).id(r.getId())
        }
    )

    //change archmage spellbook and replace one smaragd for one hellforge part  #endgame
    event.forEachRecipe(
        {id: "ars_nouveau:archmage_spell_book_upgrade" }, r => {
            //change crafting design cosmetic
            let input3 = r.json.get("ingredients").get(3)
                input3.add( "item", "minecraft:emerald" )

            let input5 = r.json.get("ingredients").get(5)
                input5.add( "item", "minecraft:ender_pearl"  )

            let input6 = r.json.get("ingredients").get(6)
                input6.add("item", "minecraft:emerald" )

            let input8 = r.json.get("ingredients").get(8)
                input8.add( "item", "minecraft:ender_pearl" )

            let input4 = r.json.get("ingredients").get(4)
                input4.add( "item", stages.stage2.magic.end )

            let input7 = r.json.get("ingredients").get(7)
                input7.add( "item", "minecraft:totem_of_undying" )

            event.custom(r.json).id(r.getId())
        }
    )

})