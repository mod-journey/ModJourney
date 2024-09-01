//priority 10

/**
 * Das Modelling, für Lesbarkeit und zum schonen des globalscops.
 */

let extreme_object = {
    basic: {
        reactor: [
            'bigreactors:basic_reactorchargingportfe',
            'bigreactors:basic_reactorsolidaccessport',
            'bigreactors:basic_reactorfuelrod',
            'bigreactors:basic_reactorcasing',
            'bigreactors:basic_reactorglass',
            'bigreactors:basic_reactorcontroller',
            'bigreactors:basic_reactorpowertapfe_active',
            'bigreactors:basic_reactorpowertapfe_passive',
            'bigreactors:basic_reactorcontrolrod',
            'bigreactors:basic_reactorredstoneport'
        ],
        turbine: [
            'bigreactors:basic_turbinecontroller',
            'bigreactors:basic_turbinecasing',
            'bigreactors:basic_turbineglass',
            'bigreactors:basic_turbinerotorbearing',
            'bigreactors:basic_turbinerotorshaft',
            'bigreactors:basic_turbinerotorblade',
            'bigreactors:basic_turbinepowertapfe_active',
            'bigreactors:basic_turbinepowertapfe_passive',
            'bigreactors:basic_turbinechargingportfe',
            'bigreactors:basic_turbineredstoneport',
            'bigreactors:basic_turbinefluidport_forge_active',
            'bigreactors:basic_turbinefluidport_forge_passive'
        ]
    },
    reinforced: {
        reactor: [
            'bigreactors:reinforced_reactorfuelrod',
            'bigreactors:reinforced_reactorcontrolrod',
            'bigreactors:reinforced_reactorpowertapfe_active',
            'bigreactors:reinforced_reactorsolidaccessport',
            'bigreactors:reinforced_reactorfluidaccessport',
            'bigreactors:reinforced_reactorpowertapfe_passive',
            'bigreactors:reinforced_reactorchargingportfe',
            'bigreactors:reinforced_reactorredstoneport',
            'bigreactors:reinforced_reactorfluidport_forge_active',
            'bigreactors:reinforced_reactorfluidport_forge_passive',
            'bigreactors:reinforced_reactorfluidport_mekanism_passive',
            'bigreactors:reinforced_reactorcasing',
            'bigreactors:reinforced_reactorcontroller',
            'bigreactors:reinforced_reactorglass'
        ],
        turbine:[
            'bigreactors:reinforced_turbinerotorshaft',
            'bigreactors:reinforced_turbinepowertapfe_active',
            'bigreactors:reinforced_turbineglass',
            'bigreactors:reinforced_turbinecasing',
            'bigreactors:reinforced_turbineredstoneport',
            'bigreactors:reinforced_turbinecontroller',
            'bigreactors:reinforced_turbinefluidport_forge_active',
            'bigreactors:reinforced_turbinefluidport_forge_passive',
            'bigreactors:reinforced_turbinerotorblade',
            'bigreactors:reinforced_turbinerotorbearing',
            'bigreactors:reinforced_turbinechargingportfe',
            'bigreactors:reinforced_turbinepowertapfe_passive'
        ]
    },
    fluidizer: [
        'bigreactors:fluidizercontroller',
        'bigreactors:fluidizerglass',
        'bigreactors:fluidizercasing',
        'bigreactors:fluidizersolidinjector',
        'bigreactors:fluidizerfluidinjector',
        'bigreactors:fluidizeroutputport',
        'bigreactors:fluidizerpowerport'
    ],
    reprocessor: [
        'bigreactors:reprocessorcasing',
        'bigreactors:reprocessorglass',
        'bigreactors:reprocessorcontroller',
        'bigreactors:reprocessorcollector',
        'bigreactors:reprocessorwasteinjector',
        'bigreactors:reprocessorfluidinjector',
        'bigreactors:reprocessoroutputport',
        'bigreactors:reprocessorpowerport'
    ]
}