let tooltips = event => {

    // Ändert das Tooltip von 10 auf 3 beim Mob Masher Upgrade Looting
    event.modify(['mob_grinding_utils:saw_upgrade_looting'], tooltip => {
        tooltip.removeLine(1)
        tooltip.insert(1, Text.of('Looting: +1. Max of 3.').yellow())
    })

    // Ändert das Tooltip von 10 auf 1 beim Mob Masher Upgrade Beheading
    event.modify(['mob_grinding_utils:saw_upgrade_beheading'], tooltip => {
        tooltip.removeLine(1)
        tooltip.insert(1, Text.of('Beheading: +1. Max of 1.').yellow())
    })


    // Antimatter Ingot und Ingot
    event.add(/mod_journey:antimatter_(ingot|block)/, {shift: false}, [
        Text.of('')
            .append(Text.gold('Hold '))
            .append(Text.yellow('Shift '))
            .append(Text.gold('to see more info.'))
    ])


    // Antimaterie Ingot
    event.add('mod_journey:antimatter_ingot', {shift: true}, [
        Text.green("Hochkomprimiertes Ingot aus Antimaterie")
    ])

    // Antimaterie Block
    event.add('mod_journey:antimatter_block', {shift: true}, [
        Text.green("Hochkomprimierter Block aus Antimaterie")
    ])



    event.add('mod_journey:the_rod_of_real_life', [
        Text.yellow('Using at own risk...'),
        Text.of('')
            .append(Text.gold('Hold '))
            .append(Text.green('ALT '))
            .append(Text.gold('and '))
            .append(Text.green('F4 '))
            .append(Text.gold('to return to real life'))
    ])

};