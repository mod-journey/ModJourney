/**
 *
 * @param {$RecipesKubeEvent} event
 * @param {boolean} active
 * @param {boolean} debug
 */
let modifyMetalpress = (event, active, debug) => {
        //event.customFunction('_____Hallo Welt')

    event.forEachRecipe({ type: "immersiveengineering:metal_press" }, r => {
        // Sat energy cost for all recipes (but unpacking) to 2400 (immersive standard costs)
        if (r.json.get('mold').getAsString() !== 'immersiveengineering:mold_unpacking') {
            r.json.add('energy', 2400)
        }
    });
}