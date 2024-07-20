//priority 0

console.log('Ändern der Gated LaserIO Items')

ServerEvents.recipes(event => {

    // Raw Logic Chip
    event.replaceInput(
        { id: 'laserio:logic_chip_raw' },         // Filterung nach Rezept-ID.
        'minecraft:gold_nugget',            // Das Item, was ersetzt werden soll.
        stages.stage1.core                 // Womit wird das Item ersetzt!
    )

})
