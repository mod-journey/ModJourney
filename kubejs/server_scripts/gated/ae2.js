//priority 0

let ae_gated = (event, active, debug) => {
    if (!active) return;

    console.log("Laden des Moduls AE2 Gated")

    // Inscriber
    event.replaceInput(
        { id: 'ae2:network/blocks/inscribers' },
        'minecraft:piston',
        stages.stage1.core
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

    //Extended Drive - Hinzufügen des accumulation Prozessor in der Mitte oben bei Buchstabe A
    event.shaped(
        Item.of('extendedae:ex_drive', 1),
        [
            ' A ',
            'BCB',
            'DED'
        ],
        {
            A: 'megacells:accumulation_processor',
            B: '#ae2:glass_cable',
            C: 'ae2:drive',
            D: 'ae2:fluix_dust',
            E: 'ae2:capacity_card'
        }
    )

}
