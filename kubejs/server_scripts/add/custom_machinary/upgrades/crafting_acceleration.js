let add_custom_machinary_crafting_acceleration_cards = (event, active, debug) => {
    if (!active) return;

    event.shaped('mod_journey:upgrades/acceleration_card_1', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'alltheores:constantan_gear',
        B: 'ars_nouveau:ritual_harvest',
        C: 'ae2:engineering_processor',
        D: global.mjConfig.stages.stage1.core,
        E: 'alltheores:signalum_gear',
        F: 'megacells:cell_component_4m'
    })

    event.shaped('mod_journey:upgrades/acceleration_card_2', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'enderio:dark_bimetal_gear',
        B: 'ars_nouveau:ritual_fertility',
        C: 'mod_journey:upgrades/acceleration_card_1',
        D: global.mjConfig.stages.stage2.core,
        E: 'enderio:vibrant_gear',
        F: 'megacells:cell_component_16m'
    })

    event.shaped('mod_journey:upgrades/acceleration_card_3', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'alltheores:netherite_gear',
        B: 'ars_nouveau:summon_focus',
        C: 'mod_journey:upgrades/acceleration_card_2',
        D: global.mjConfig.stages.stage3.core,
        E: 'alltheores:enderium_gear',
        F: 'megacells:cell_component_64m'
    })
}