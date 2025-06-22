//priority 0

let enderchestandtank_gated = (event, active, debug) => {
    if (!active) return;

    console.log('Ändern der Gated Enderchest Items')

    // Enderchest
    event.replaceInput(
        { id: 'enderchests:ender_pouch' },
        'minecraft:leather',
        stages.stage1.core
    )

    // EnderTank
    event.forEachRecipe(
        { id: 'endertanks:tank' },
        r => {
            // Replace `#' what stands for '#forge:rods/blaze'
            r.json.get('key').add('#', { item: stages.stage1.core })
            // Add changed recipe as custom (because changes in json are NOT back-linked to the recipe-object)
            event.custom(r.json).id(r.getId())
        }
    )

    // EnderBucket
    event.forEachRecipe(
        { id: 'endertanks:bucket' },
        r => {
            // Replace `#' what stands for 'minecraft:blaze_powder'
            r.json.get('key').add('#', { item: stages.stage1.core })
            // Add changed recipe as custom (because changes in json are NOT back-linked to the recipe-object)
            event.custom(r.json).id(r.getId())
        }
    )
}
