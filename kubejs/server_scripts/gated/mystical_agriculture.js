ServerEvents.recipes(event => {
    // Replace middle item fir machine frame
    event.replaceInput({output: 'mysticalagriculture:machine_frame'}, '#forge:stone', stages.stage3.core)


    // Replace middle item fir altars
    event.forEachRecipe([
        { id: 'mysticalagriculture:infusion_altar' },
        { id: 'mysticalagriculture:awakening_altar' }
    ], r => {
        let newInput = { 'item': stages.stage3.core };

        // Replace second line of recipe pattern
        r.json.get('pattern').set(1, ' N ');

        // Add gated item for pattern 'N'
        r.json.get('key').add('N', newInput)
    })
})