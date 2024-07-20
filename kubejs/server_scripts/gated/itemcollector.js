//priority 0

console.log('Ändern der Gated Item Collector Items')

ServerEvents.recipes(event => {

    // Enderchest
    event.replaceInput(
        { id: 'itemcollectors:basic_collector' },         // Filterung nach Rezept-ID.
        'minecraft:obsidian',            // Das Item, was ersetzt werden soll.
        stages.stage1.core                 // Womit wird das Item ersetzt!
    )

})
