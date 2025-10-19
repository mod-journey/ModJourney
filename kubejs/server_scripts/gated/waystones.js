/**
 * @param {$RecipesKubeEvent} event
 * @param {boolean} active
 */
function waystones_gated(event, active) {
    if (!active) return;

    event.forEachRecipe({ mod: 'waystones' }, r => {
        let itemID = r.json.get("result").get('id').asString;
        let replaceItem = false

        if (itemID.endsWith('_portstone')) {
            replaceItem = stages.mod_based.mobGrindingUtils.stick
        } else {
            console.log('___Other recipe: ' + r.id) // r.json)
        }


        if (replaceItem) {
            // Replace on top/middle
            replacer.replaceInputByPosition(
                {id: '' + r.id},
                1, 0,
                replaceItem
            )
        }
    });


}