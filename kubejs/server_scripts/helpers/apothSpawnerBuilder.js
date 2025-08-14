/**
 * @param {String} type The name of modifier "spawn_count, min_delay etc."
 * @param {String} mainhand The item in mainhand to held
 * @param {boolean} inverse The inverted recipe. When true and you've a max val, then you've a false with min val.
 *
 * @returns value && (min || max) && createRecipe
 * @example apothSpawnerBuilder(min_delay, "minecraft:nether_star", true)
 *      .min(100)   //the value in Ticks
 *      .value(-5)  //the counter amount
 *      .createRecipe(event)    //build Recipe
 * @example apothSpawnerBuilder(min_delay, "minecraft:nether_star", false)
 *      .max(2400)
 *      .value(5)
 *      .createRecipe(event)
 */
function apothSpawnerBuilder(type, mainhand, inverse) {

    let recipe = {
        type: "apothic_spawners:spawner_modifier",
        mainhand: {
            item: mainhand
        },
        stat_changes: [{
            type: `apothic_spawners:${type}`
        }]
    }

    if (inverse) {
        recipe.offhand = { item: "minecraft:quartz" };
        recipe.consumes_offhand = false;
    }

    return {
        /** @param {String} value @returns {apothSpawnerBuilderInstance} */
        value: function (value) {
            recipe.stat_changes[0].value = value;
            return this;
        },
        /**@param {integer} min @returns {apothSpawnerBuilderInstance} */
        min: function (min) {
            recipe.stat_changes[0].min = min;
            return this;
        },
        /**@param {integer} max @returns {apothSpawnerBuilderInstance} */
        max: function (max) {
            recipe.stat_changes[0].max = max;
            return this;
        },
        /**
         *
         * @param {$KubeRecipe} event @returns {apothSpawnerBuilderInstance}
         */
        createRecipe: function (event) {
            if (inverse) {
                event.custom(recipe).id(recipe.type + "s/_inverse/" + type);
                console.log(recipe)
                return this;
            }
            else {
                event.custom(recipe).id(recipe.type + "s/" + type);
                console.log(recipe)
                return this;
            }

        }
    }
}
/** @typedef {ReturnType<typeof apothSpawnerBuilder>} apothSpawnerBuilderInstance */