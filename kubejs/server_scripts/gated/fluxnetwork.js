//priority 0

console.log(' ^dndern der Gated FluxNetwork Items')

ServerEvents.recipes(event => {

    // Flux Core
    event.replaceInput(
        { id: 'fluxnetworks:fluxcore' },         // Filterung nach Rezept-ID.
        'minecraft:ender_eye',            // Das Item, was ersetzt werden soll.
        stages.stage3.core                 // Womit wird das Item ersetzt!
    )

})
