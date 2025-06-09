// priority: 0

let remove_ae2_removeComplete = event => {

    let entfernen = [
        'ae2:vibration_chamber',                        //dodgt early game
        'megacells:mega_interface',                     //ersatz durch extended AE
        'megacells:mega_pattern_provider',              //ersatz durch extended AE
        'megacells:cable_mega_pattern_provider',        //ersatz durch extended AE
        'megacells:cable_mega_interface',               //ersatz durch extended AE
        'megacells:radioactive_cell_component',         //radioaktivität zum wegwerfen?
        'megacells:radioactive_chemical_cell',          //radioaktivität zum wegwerfen?
        'expatternprovider:drive_upgrade',              //upgrade, block craftbar aber gatet
        'expatternprovider:pattern_provider_upgrade',   //upgrade, block craftbar aber gatet
        'expatternprovider:interface_upgrade',          //upgrade, block craftbar aber gatet
        'expatternprovider:io_bus_upgrade',             //upgrade, block craftbar aber gatet
        'expatternprovider:pattern_terminal_upgrade',   //upgrade, block craftbar aber gatet
        Item.of('expatternprovider:me_packing_tape', '{Damage:0}'),  //Carry Mod gleiches Feature
        'ae2wtlib:quantum_bridge_card'
    ]

    entfernen.forEach((element) => {
        event.remove({
            output: element
        });
    });


    let entfernen2 = [
        'aeinfinitybooster:dimension_card',
        'ae2:creative_energy_cell',
        Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:f",id:"minecraft:water"}}'),
        Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:i",id:"minecraft:cobblestone"}}'),
    ]


    entfernen2.forEach((element) => {
        event.remove({
            output: element
        })
    });

};