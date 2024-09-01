//priority 10

ServerEvents.recipes(event => {

    let extreme_remove = [
        //kreativgedöns
        'bigreactors:basic_turbinecreativesteamgenerator',
        'bigreactors:reinforced_turbinecreativesteamgenerator',
        'bigreactors:reinforced_reactorcreativewatergenerator',
        //für cc
        'bigreactors:reinforced_turbinecomputerport',
        'bigreactors:reinforced_reactorcomputerport',

        //battery zu OP pro Modul 680T FE
        'bigreactors:energizerpowerport_fe',
        'bigreactors:energizerstatus',
        'bigreactors:energizercomputerport',
        'bigreactors:energizercell',
        'bigreactors:energizercasing',
        'bigreactors:energizercontroller',
        'bigreactors:energycore',
        'bigreactors:energizerchargingport_fe'
    ];

    extreme_remove.forEach(remove_item => {
        event.remove({output: remove_item})
    });
})
