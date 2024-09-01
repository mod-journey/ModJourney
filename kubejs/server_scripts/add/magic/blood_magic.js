//priority 10

/**
 * Fügt ein Rezept hinzu damit die hellforgeparts (Welche als Gated Item eingetragen sind), im
 * weiteren Spielfortschritt auch craftbar sind. Ansonsten findet man diese nämlich nur im hidden Realm.
 */

ServerEvents.recipes(event => {
    event.shaped(Item.of('bloodmagic:hellforgedparts', 1),
        [
            'BNB',
            'NGN',
            'BNB'
        ], {
            B: 'bloodmagic:largebloodstonebrick',
            N: 'thermal:netherite_gear',
            G: 'apotheosis:mythic_material'
        }
    );
});