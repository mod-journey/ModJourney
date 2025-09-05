let modjourney_gated_items = (event, active, debug) => {
    if (!active) return;

    event.shapeless(
        Item.of('mod_journey:nitro_cube', 1),
        ['4 x powah:nitro_crystal_block']
    ).id('mod_journey:shapless/nitro_crystal_block');

    event.shapeless(
        Item.of('mod_journey:copperchunk', 8),
        ['4 x minecraft:cut_copper']
    ).id('mod_journey:shapless/copperchunk');

    event.shaped('mod_journey:lumber', [
        '   ',
        'SWS',
        'WSW'
    ], {
        S: 'minecraft:slime_ball',
        W: 'minecraft:oak_planks'
    }).id('mod_journey:shaped/lumber');

    event.shaped('mod_journey:steel_carrier', [
        'SP ',
        'PIP',
        ' PS'
    ], {
        S: 'alltheores:steel_rod',
        P: 'industrialforegoing:plastic',
        I: 'alltheores:iridium_rod'
    }).id('mod_journey:shaped/steel_carrier');

    event.shaped('mod_journey:hardend_steel_plate', [
        'SSS',
        'SCS',
        'SSS'
    ], {
        S: 'alltheores:steel_plate',
        C: 'immersiveengineering:circuit_board'
    }).id('mod_journey:shaped/hardend_steel_plate');

    event.shaped('mod_journey:platin_plate', [
        'SSS',
        'SCS',
        'SSS'
    ], {
        S: 'alltheores:platinum_plate',
        C: 'alltheores:steel_block'
    }).id('mod_journey:shaped/platin_plate');

    event.shaped('mod_journey:staging/frame_core_1', [
        'CLC',
        'LBL',
        'CLC'
    ], {
        B: 'minecraft:nether_bricks',
        C: 'mod_journey:copperchunk',
        L: 'mod_journey:lumber'
    }).id('mod_journey:shaped/frame_core_1');

    event.shaped('mod_journey:staging/frame_core_2', [
        'CLC',
        'LBL',
        'CLC'
    ], {
        B: 'mod_journey:staging/frame_core_1',
        C: 'mod_journey:hardend_steel_plate',
        L: 'mod_journey:lumber'
    }).id('mod_journey:shaped/frame_core_2');

    event.shaped('mod_journey:staging/frame_core_3', [
        'CLC',
        'LBL',
        'CLC'
    ], {
        B: 'mod_journey:staging/frame_core_2',
        C: 'mod_journey:platin_plate',
        L: 'mod_journey:steel_carrier'
    }).id('mod_journey:shaped/frame_core_3');

    event.shaped('mod_journey:staging/frame_core_4', [
        'CLC',
        'LBL',
        'CLC'
    ], {
        B: 'mod_journey:staging/frame_core_3',
        C: 'mod_journey:nitro_cube',
        L: 'mod_journey:platin_plate'
    }).id('mod_journey:shaped/frame_core_4');

}