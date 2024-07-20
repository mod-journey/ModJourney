//priority 0
console.log('Gated Ars_Nouveau')

ServerEvents.recipes(event => {

    // replace in reforging table the ironingot with stage3 item #early
    event.replaceInput(
        { id: 'apotheosis:simple_reforging_table' },
        'minecraft:iron_ingot',
        stages.stage3.magic.early
    )

    //replace in salvaging table the lava bucket with stage3 item #early
    event.replaceInput(
        { id: 'apotheosis:salvaging_table' },
        'minecraft:lava_bucket',
        stages.stage3.magic.early
    )


    //Shaped Item Builder, for bookshelfs   #early
    var shelfs = (output, special, lower_upper) => {
        event.shaped( output, [
            'zzz',
            'yxw',
            'zzz'
        ], {
            w: special,
            x: '#forge:bookshelves',
            y: stages.stage3.magic.early,
            z: lower_upper

        }).id(output)
    }

    //while the sea and hellshelf haven't a recipe.json, wll create a knew recipe and overwrite the original ID.
    shelfs('apotheosis:seashelf', 'minecraft:pufferfish', 'minecraft:prismarine_bricks')
    shelfs('apotheosis:hellshelf', 'minecraft:blaze_rod', '#chipped:nether_bricks')

    //replace the amethyst_shard with sorce gem     #early
    event.replaceInput(
        { id: 'apotheosis:sigil_of_socketing' },
        'minecraft:amethyst_shard',
        stages.stage3.magic.early
    )

    //replace the enchantingtable in the libary with archmages spellbook
    event.replaceInput(
        { id: 'apotheosis:library' },
        'minecraft:enchanting_table',
        stages.stage3.magic.mid
    )

    //remove and create reforging_table with same id. Add the archmage book.
    event.remove({id: "apotheosis:reforging_table" })
    event.custom({
        "type": "minecraft:crafting_shaped",
        "conditions": [{
          "type": "apotheosis:module",
          "module": "adventure"
        }],
        "group": "something",
        "pattern": [
          "NXN",    //orignal = " N "
          "GEG",
          "BBB"
        ],
        "key": {
          "N": { "tag":  "forge:ingots/netherite" },
          "G": { "item": "apotheosis:gem_dust" },
          "E": { "item": "minecraft:enchanting_table" },
          "B": { "item": "minecraft:nether_bricks" },
          "X": { "item":  stages.stage3.magic.mid }
        },
        "result": {
          "item": "apotheosis:reforging_table",
          "count": 1
        }
    }).id("apotheosis:reforging_table")

})