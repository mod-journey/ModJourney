/**
 * this script replaces duplicate recipes for crop-storage blocks
 *
 * @todo improve this to make it more dynamically
 *   - find all crop-items
 *     - walk over all thermal recipes that have crop as input and storage block as output
 *       - for all of these thermal recipes, check if there is a similar farmers delight recipe
 *       - if yes:
 *         - Replace recipe
 *           - from 9x crop -> farmers_delight:crop_block (e.g. 'farmersdelight:carrot_crate')
 *           - to x9 thermal:crop_block (e.g. 'thermal:carrot_block') -> 9x farmers_delight:carrot_block (shaped recipe)
 *
 */

ServerEvents.recipes(event => {
    const blockPattern = '["###","###","###"]';
    const crops = [
        'apple',
        'potato',
        'carrot',
        'beetroot',
        //'thermal:tomato',
        //'farmersdelight:tomato'
    ]


   crops.forEach(inputCrop => {
       // todo extract crop-name without mod-prefix (split at :)
       let thermalOutput = `thermal:${inputCrop}_block`

       /*
       // recipeID e.g. thermal:storage/carrot_block
       event.forEachRecipe([
                {type: 'minecraft:crafting_shaped', input: inputCrop, mod: 'thermal'},
                {type: 'minecraft:crafting_shaped', input: inputCrop, mod: 'thermal_cultivation',}
            ], r => {

           // todo store thermal recipeID and skip changing the farmers delight recipe, if this crop does not have a thermal recipe
           if (r.getId().endsWith('_block')) {
               console.log(r.getId())
               console.log(r.json)
           }
       })*/


       /**
        * find storage block recipe (recipeID e.g. farmersdelight:carrot_crate)
        * and replace e.g.
        *   9 carrot => 1 farmersdelight:carrot_crate
        *   with
        *   9 thermal:carrot_block => 9x farmersdelight:carrot_crate
        */
        event.forEachRecipe({type: 'minecraft:crafting_shaped', input: inputCrop, mod: 'farmersdelight'}, r => {
            //if (r.getId().endsWith('_crate') && blockPattern.equals(r.json.get('pattern'))) {
            if (blockPattern.equals(r.json.get('pattern'))) {
                r.replaceInput(inputCrop, thermalOutput)
                r.json.get('result').add('count', 9)
            }
        })


    })

})

