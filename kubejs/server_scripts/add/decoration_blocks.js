//priority 10

/**
 * Collection of all recipes for decoration blocks
 *
 * @param {$RecipesKubeEvent} event
 * @param {boolean} active
 */
function add_decoration_blocks(event, active) {
    if (!active) return;

    // Add recipe as blasting (not .smelting()) to avoid the recipe to be picked up by mekanism and enderIO machines
    event.blasting('undergarden:ashen_deepturf_block', 'undergarden:deepturf_block').cookingTime(200).xp(3)
    event.blasting('undergarden:ashen_deepturf', 'undergarden:deepturf').cookingTime(100).xp(0.5)
}