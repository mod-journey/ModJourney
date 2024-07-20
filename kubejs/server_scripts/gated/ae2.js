//priority 0

console.log(' ^dndern der Gated Applied Items')

ServerEvents.recipes(event => {

    // Inscriber
    event.replaceInput(
        { id: 'ae2:network/blocks/inscribers' },         // Filterung nach Rezept-ID.
        'minecraft:sticky_piston',            // Das Item, was ersetzt werden soll.
        stages.stage1.core                 // Womit wird das Item ersetzt!
    )

})
