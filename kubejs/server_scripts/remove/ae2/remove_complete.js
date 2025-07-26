// priority: 0

let remove_ae2_removeComplete = (event, active, debug) => {
    if (!active) return;

    let entfernen = [
        'ae2:vibration_chamber',                        //dodgt early game
        'megacells:mega_interface',                     //ersatz durch extended AE
        'megacells:mega_pattern_provider',              //ersatz durch extended AE
        'megacells:cable_mega_pattern_provider',        //ersatz durch extended AE
        'megacells:cable_mega_interface',               //ersatz durch extended AE
        'megacells:radioactive_cell_component',         //radioaktivität zum wegwerfen?
        'megacells:radioactive_chemical_cell',          //radioaktivität zum wegwerfen?
        'extendedae:drive_upgrade',              //upgrade, block craftbar aber gatet
        'extendedae:pattern_provider_upgrade',   //upgrade, block craftbar aber gatet
        'extendedae:interface_upgrade',          //upgrade, block craftbar aber gatet
        'extendedae:io_bus_upgrade',             //upgrade, block craftbar aber gatet
        'extendedae:pattern_terminal_upgrade',   //upgrade, block craftbar aber gatet
        Item.of('extendedae:me_packing_tape'),  //Carry Mod gleiches Feature
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
        Item.of('extendedae:infinity_cobblestone_cell'),
        Item.of('extendedae:infinity_water_cell'),
    ]


    entfernen2.forEach((element) => {
        event.remove({
            output: element
        })
    });

};