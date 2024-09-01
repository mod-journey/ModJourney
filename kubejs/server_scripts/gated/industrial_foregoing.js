
ServerEvents.recipes(event => {

    /**
     * move this recipe more into late game
     */
    event.replaceInput({id: 'industrialforegoing:ore_laser_base'},
        '#industrialforegoing:machine_frame/advanced',
        '#industrialforegoing:machine_frame/supreme'
    )

    event.replaceInput({id: 'industrialforegoing:laser_drill'},
        '#forge:gears/gold',
        stages.stage2.gear
    )
})