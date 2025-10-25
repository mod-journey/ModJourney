/**
 * @param {String} catalyst Industrial Lense
 * @param {String} output The Output as Itemtag e.g. c:ores/iron
 * @returns biomeWhitelist || dimensionWhitelist || maxDepth || minDepth || weight
 * @example let uranOreLaser = LaserOreBuilder("industrialforegoing:green_laser_lens", "c:ores/uranium")
 *                                  .dimensionWhitelist("c:is_nether") //or simple biome-String
 *                                  .maxDepth(30)
 *                                  .minDepth(-64)
 * //To create the recipe, now it can run the event.custom handler.
 * uranOreLaser.createRecipe(event, "mod_id:id/name/path")
 *
 */
function LaserOreBuilder(catalyst, output) {
    let recipe = {
        type: "industrialforegoing:laser_drill_ore",
        catalyst: { item: catalyst },
        output: { tag: output },
        rarity: [
            {
                biome_filter: { blacklist: [], whitelist: [] },
                depth_max: 255,
                depth_min: 0,
                dimension_filter: { blacklist: [], whitelist: [] },
                weight: 1
            }
        ]
    };

    return {
        /** @param {String} biome @returns {LaserOreBuilderInstance} */
        biomeWhitelist: function (biome) {
            recipe.rarity[0].biome_filter.whitelist = [biome];
            return this;
        },
        /** @param {String} dimension @returns {LaserOreBuilderInstance} */
        dimensionWhitelist: function (dimension) {
            recipe.rarity[0].dimension_filter.whitelist = [dimension];
            return this;
        },
        /**@param {integer} max @returns {LaserOreBuilderInstance} */
        maxDepth: function (max) {
            recipe.rarity[0].depth_max = max;
            return this;
        },
        /**@param {integer} min @returns {LaserOreBuilderInstance} */
        minDepth: function (min) {
            recipe.rarity[0].depth_min = min;
            return this;
        },
        /**@param {integer} weight @returns {LaserOreBuilderInstance} */
        weight: function (weight) {
            recipe.rarity[0].weight = weight;
            return this;
        },
        /**@param {$CustomMachineRecipeBuilder_} event @param {String} id @returns {LaserOreBuilderInstance} */
        createRecipe: function (event, id) {
            event.custom(recipe).id(id);
            return this;
        },
        /**@returns {Object} */
        build: function () {
            return recipe;
        }
    };
}
/**
 * @typedef {ReturnType<typeof LaserOreBuilder>} LaserOreBuilderInstance
 */
