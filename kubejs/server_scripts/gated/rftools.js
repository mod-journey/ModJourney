//priority 0

let rfttools_gated = (event) => {

    console.log('Ändern der Gated RFtools Items')

    // Machine Frame
    event.replaceInput(
        { id: 'rftoolsbase:machine_frame' },
        'minecraft:gold_nugget',
        stages.stage1.core
    )

       // Module Template
       event.replaceInput(
        { id: 'rftoolsutility:module_template' },
        'rftoolsbase:dimensionalshard',
        stages.stage1.core
    )
}