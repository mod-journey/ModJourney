let occultism_gated = (event, active, debug) => {
    if (!active) return;
    console.log('Gated Occultism j')

    //edit the sacrificial_bowl. #earlygame
    event.shaped(Item.of('occultism:sacrificial_bowl', 1), [
        'BAB',
        'BBB'
    ], {
        A: mjConfig.stages.stage1.magic.early,
        B: 'occultism:otherstone'
    }).id('occultism:crafting/sacrificial_bowl')

    event.shaped(Item.of('occultism:dark_sacrificial_bowl', 1), [
        'BAB',
        'BBB'
    ], {
        A: mjConfig.stages.stage1.magic.early,
        B: 'occultism:otherrock'
    }).id('occultism:crafting/dark_sacrificial_bowl')

    //edit the magic_lamp_empty. #midgame
    replacer.replaceInputByPosition(
        { output: 'occultism:magic_lamp_empty' },
        0, 0,
        { 'item': mjConfig.stages.stage1.magic.mid }
    )

    //edit the book_of_binding_marid. #endgame
    event.remove({
        output: 'occultism:book_of_binding_marid'
    })

    event.custom({
        "type": "minecraft:crafting_shaped",
        "key": {
            "y": { "item": "occultism:book_of_binding_empty" },
            "x": { "tag": "c:dyes/green" },
            "z": { "item": mjConfig.stages.stage1.magic.end }
        },
        "pattern": [
            "zxz",
            "xyx",
            "zxz"
        ],
        "result": {
            "id": "occultism:book_of_binding_marid"
        }
    }).id('occultism:book_of_binding_marid')












}



