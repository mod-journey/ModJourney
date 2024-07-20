// priority: 101

/*
// ES6 format is not working here - @see https://stackoverflow.com/a/49193783/2377961
class RecipeHelper {
    constructor(recipeEvent) {
        this.event = recipeEvent;
    }
}
*/

/**
 * Set the event that is used for all actions
 *
 * @param {dev.latvian.mods.kubejs.recipe.RecipesEventJS|null} recipeEvent
 *
 * @example `
 * const replacer = new RecipeHelper(null)
 * ServerEvents.recipes(event => {
 *    replacer.init(event)
 * }
 *
 * // use the replacer somewhere else
 * replacer.changeRecipeFunction()
 * `
 */
const RecipeHelper = function(recipeEvent) {
    this.event = recipeEvent;
}

// Defining the methods
RecipeHelper.prototype = {
    /**
     * @param {dev.latvian.mods.kubejs.recipe.RecipesEventJS} recipeEvent
     */
    init: function (recipeEvent) {
        this.event = recipeEvent
    },

    // get and set the event - throw error when event is used without initialisation
    // @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
    set event (recipeEvent) { this._event = recipeEvent },
    get event () {
        if (!this._event) throw '"event" is not set, please call init(RecipesEventJS) first'
        return this._event
    },


    /**
     * Replaces input-item by its position in the recipe pattern
     *
     * @param {Object} filter The filter to find the recipe to replace
     *        e.g. {output: 'minecraft:coal'}
     * @param {int} xPos X-Position to replace in the recipe pattern (starting at 0)
     * @param {int} yPos Y-Position to replace in the recipe pattern (starting at 0)
     * @param {Object} newIngredient the item that should be inserted as replace
     *        TODO Add option to pass this as string (e.g. '#wood' => {tag: 'wood}, 'minecraft:wood' => {item: minecraft:wood} ect.)
     *
     *
     * @see https://wiki.latvian.dev/books/kubejs/page/recipes#bkmrk-removing-recipes
     */
    replaceInputByPosition: function (filter, xPos, yPos, newIngredient) {

        this.event.forEachRecipe(filter, r => {
            //console.log(r.json)

            // TODO check which key-letters are unused in this recipe (find a un-used key)
            const patternKey = '1';

            const patternString = r.json.get('pattern').get(yPos);
            // use '' + to trigger convert from Java.lang.String to a native JS String, and build an array from this
            let patternArr = Array.from('' + patternString.getAsString());
            patternArr[ xPos ] = patternKey


            // Combine replaced pattern to a string and set it as new recipe pattern
            r.json.get('pattern').set(yPos, patternArr.join(''));

            // Add new Ingredient
            // TODO check if ingredient is already listed with an patternKey in this recipe
            // TODO remove un-used pattern keys from the removed item (it it does not exist else where in the recipe
            r.json.get('key').add(patternKey, newIngredient)
            //console.log(r.json)
        })
    }
}



