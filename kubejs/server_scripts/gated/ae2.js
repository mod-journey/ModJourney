//priority 0

let ae_gated = (event, active, debug) => {
    if (!active) return;

    console.log("Laden des Moduls AE2 Gated")

    // Inscriber
    event.replaceInput(
        { id: 'ae2:network/blocks/inscribers' },
        'minecraft:piston',
        mjConfig.stages.stage1.core
    )

    //definieren der Items
    let remove = [
        'megacells:sky_steel_ingot'
    ]

    // entfernen der Gatet Item Rezepte
    remove.forEach(element => {
        event.remove({
            output: element
        })
    });

    //Sky Steel - Eisen getauscht durch mekanism:alloy_atomic bei X
    event.custom({
        "type": "ae2:transform",
        "circumstance": {
            "type": "fluid",
            "tag": "minecraft:water"
        },
        "ingredients": [
            {
                "item": "ae2:charged_certus_quartz_crystal"
            },
            {
                "item": "mekanism:alloy_atomic" // X
            },
            {
                "item": "ae2:sky_stone_block"
            }
        ],
        "result": {
            "id": "megacells:sky_steel_ingot"
        }
    }).id('mod_journey:transform/sky_steel')

    //Drahtlosempfänger - Eisen getauscht durch mekanism:alloy_atmoic
    event.replaceInput(
        { id: 'ae2:network/wireless_part' },
        'minecraft:iron_ingot',
        'mekanism:alloy_atomic'
    )

    //Infintyboostercard Stufe 1 - Enderaugen getauscht durch mekanism:alloy_atmoic
    event.replaceInput(
        { id: 'aeinfinitybooster:infinity_card' },
        'minecraft:nether_star',
        'mekanism:alloy_atomic'
    )

    //Wireless Tool fürs verbinden von ME Systemen. Einmaliger Craftprozess, da Tool. Kalkulationsprozessor getauscht durch mekanism:alloy_atomic
    event.replaceInput(
        { id: 'expatternprovider:wireless_tool' },
        'megacells:accumulation_processor',
        'mekanism:alloy_atomic'
    )

    /* Geht Inscriber und Crystal Assembler Rezepte durch, tauscht wenn eines der beiden gefunden wurde Redstone mit Atomic Alloy*/
    event.forEachRecipe({ output: 'extendedae:concurrent_processor' }, r => {
        if (r.json.get("type") + '' === '"ae2:inscriber"') {
            let objectToReplace = r.json.get("ingredients").get("middle")

            objectToReplace.remove("tag")
            objectToReplace.add("tag", "c:alloys/ultimate")
            event.custom(r.json).id(r.getId())
        }
        if (r.json.get("type") + '' === '"extendedae:crystal_assembler"') {
            let objectToReplace = r.json.get("input_items").get(2).get("ingredient")

            objectToReplace.remove("tag")
            objectToReplace.add("tag", "c:alloys/ultimate")
            event.custom(r.json).id(r.getId())
        }
    })

}
