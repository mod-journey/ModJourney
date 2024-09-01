ServerEvents.recipes(event => {
    // Replace center item in bottom of recipe with stage item
    replacer.replaceInputByPosition(
        {id: 'sophisticatedbackpacks:stack_upgrade_tier_2'},
        1, 2, {'item': stages.stage1.core}
    )

    replacer.replaceInputByPosition(
        {id: 'sophisticatedbackpacks:stack_upgrade_tier_3'},
        1, 2, {'item': stages.stage2.core}
    )

    replacer.replaceInputByPosition(
        {id: 'sophisticatedbackpacks:stack_upgrade_tier_4'},
        1, 2, {'item': stages.stage3.core}
    )


    // Exp upgrade limited to stage 3
    replacer.replaceInputByPosition(
        {id: 'sophisticatedbackpacks:xp_pump_upgrade'},
        1, 2, {'item': stages.stage2.core}
    )

    // 'sophisticatedbackpacks:everlasting_upgrade'

    /*
    // Potential endgame item - Singularity was not working
    event.replaceInput(
        'sophisticatedbackpacks:inception_upgrade',
        // 'minecraft:diamond', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:diamond"}')
        'minecraft:diamond', 'extendedcrafting:crystaltine_ingot'
    );
     */

    event.remove({id: 'sophisticatedbackpacks:inception_upgrade'});

})
