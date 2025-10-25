/**
 * @param {$RecipesKubeEvent} event
 * @param {boolean} active
 */
function waystones_gated(event, active) {
    if (!active) return;

    event.forEachRecipe({ mod: 'waystones' }, r => {
        let itemID = r.getId()
        let replaceItem = false

        if (itemID === 'waystones:warp_plate') {
            replaceItem = stages.stage3.second
        }
        else if (itemID.endsWith('_portstone')) {
            replaceItem = stages.mod_based.mobGrindingUtils.stick
        }
        else if (itemID.endsWith('waystone') || itemID.endsWith('_sharestone')) {
            replaceItem = stages.stage1.core
        }

        if (replaceItem) {
            // Replace on top/middle
            replacer.replaceInputByPosition(
                {id: r.getId()},
                1, 0,
                replaceItem
            )
        }
    });
}