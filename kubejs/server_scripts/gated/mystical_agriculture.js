ServerEvents.recipes(event => {
    // Replace middle item fir machine frame
    event.replaceInput({output: 'mysticalagriculture:machine_frame'}, '#forge:stone', stages.stage3.core)


    // Replace middle item fir altars
    replacer.replaceInputByPosition([
        { id: 'mysticalagriculture:infusion_altar' },
        { id: 'mysticalagriculture:awakening_altar' }
    ],
        1,1,
        { 'item': stages.stage3.core }
    )
})