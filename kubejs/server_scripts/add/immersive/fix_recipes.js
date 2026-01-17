/**
 * Fix missing recipes
 *
 * @param {$RecipesKubeEvent} event
 * @param {boolean} active
 */
function fix_immersive_recipes(event, active) {
    if (!active) return;

    event.smelting('immersiveengineering:ingot_hop_graphite', 'immersiveengineering:dust_hop_graphite')
        .cookingTime(200).xp(0.5)
        .id('mod_journey:recipes/smelting/ingot_hop_graphite');
    event.blasting('immersiveengineering:ingot_hop_graphite', 'immersiveengineering:dust_hop_graphite')
        .cookingTime(100).xp(0.5)
        .id('mod_journey:recipes/smelting/ingot_hop_graphite_from_blasting');
}