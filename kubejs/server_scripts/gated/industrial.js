//priority 0


ServerEvents.recipes(event => {

    // Void Chassis
    event.replaceInput(
        { id: 'industrialforegoing:machine_frame_pity' },         // Filterung nach Rezept-ID.
        'minecraft:redstone_block',            // Das Item, was ersetzt werden soll.
        stages.stage1.core                 // Womit wird das Item ersetzt!
    )

})
