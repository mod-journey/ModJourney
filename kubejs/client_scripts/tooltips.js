let tooltips = event => {

    // Ändert das Tooltip von 10 auf 3 beim Mob Masher Upgrade Looting
    event.modify(['mob_grinding_utils:saw_upgrade_looting'], tooltip => {
        tooltip.removeLine(1)
        tooltip.insert(1, Text.translate('tooltip.sawupgrade_looting', '3').yellow())
    })

    // Ändert das Tooltip von 10 auf 1 beim Mob Masher Upgrade Beheading
    event.modify(['mob_grinding_utils:saw_upgrade_beheading'], tooltip => {
        tooltip.removeLine(1)
        tooltip.insert(1, Text.translate('tooltip.sawupgrade_beheading', '1').yellow())
    })


    // Antimatter Ingot und Ingot
    event.add(/mod_journey:antimatter_(ingot|block)/, {shift: false}, [
        Text.translate('item.mod_journey.tooltip.hold_key_for_info', [
            Text.translate('button.mod_journey.shift').yellow()
        ]).gold()
    ])


    // Antimaterie Ingot
    event.add('mod_journey:antimatter_ingot', {shift: true}, [
        Text.translate('item.mod_journey.antimatter_ingot.tooltip').green()
    ])

    // Antimaterie Block
    event.add('mod_journey:antimatter_block', {shift: true}, [
        Text.translate('item.mod_journey.antimatter_block.tooltip').green()
    ])



    event.add('mod_journey:the_rod_of_real_life', [
        Text.translate('item.mod_journey.the_rod_of_real_life.tooltip').yellow(),
        Text.translate('item.mod_journey.the_rod_of_real_life.tooltip.hold_key', [
            Text.green('ALT'),
            Text.green('F4'),
        ]).gold(),
    ])

};