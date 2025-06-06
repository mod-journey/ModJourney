//priority: 0

/**
 * Add a custom Recipe for the Item Hellforge Parts. Normaly you can loot it only. In our case,
 * it's a gated Item. So you must also entered the hidden Realm to craft it.
 */

let add_magic_bloodMagic = event => {
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
};