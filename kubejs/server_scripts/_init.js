// priority: 100

/**
 * init.js
 *
 * this script is used for initializing classes and helper functions
 * it must be loaded after the classes and helper functions are loaded
 */

/**
 * @var {RecipeHelper}
 */
const replacer= new RecipeHelper(null);
ServerEvents.recipes(event => {
    replacer.init(event)
})