//priority 0

console.log('Ändern der Gated RFtools Items')

ServerEvents.recipes(event => {

    // Machine Frame
    event.replaceInput(
        { id: 'rftoolsbase:machine_frame' },         // Filterung nach Rezept-ID.
        'minecraft:gold_nugget',            // Das Item, was ersetzt werden soll.
        stages.stage1.core                 // Womit wird das Item ersetzt!
    )

       // Module Template
       event.replaceInput(
        { id: 'rftoolsutility:module_template' },         // Filterung nach Rezept-ID.
        'rftoolsbase:dimensionalshard',            // Das Item, was ersetzt werden soll.
        stages.stage1.core                 // Womit wird das Item ersetzt!
    )

})
