ItemEvents.tooltip(event => {

    //Ändert das Tooltip von 10 auf 3 beim Mob Masher Upgrade Looting
    event.addAdvanced(['mob_grinding_utils:saw_upgrade_looting'], (item, advanced, text) => {
        text.set(1, [
            Text.of('Looting: +1. Max of 3.').yellow()
        ])
    })

    //Ändert das Tooltip von 10 auf 1 beim Mob Masher Upgrade Beheading
    event.addAdvanced(['mob_grinding_utils:saw_upgrade_beheading'], (item, advanced, text) => {
        text.set(1, [
            Text.of('Beheading: +1. Max of 1.').yellow()
        ])
    })


    //Antimatter Ingot

    //Fügt den Scrolls eine Beschreibung hinzu
    let mod_journey_items = [
        'mod_journey:anti_ingot',
        'mod_journey:antimatter_block'
    ]
    mod_journey_items.forEach(items => {
        event.addAdvanced(items, (item, advanced, text) => {
            if (!event.shift) {
                text.add(1, [
                    Text.gold('Hold '),
                    Text.yellow('Shift '),
                    Text.gold('to see more info.')
                ])
            }
        })
    });


    //Antimaterie Ingot
    event.addAdvanced('mod_journey:anti_ingot', (item, advanced, text) => {
        if (event.shift) {
            text.add(1,[
                Text.green("Hochkomprimiertes Ingot aus Antimaterie")
            ])
        }
    })

    //Antimaterie Block
    event.addAdvanced('mod_journey:antimatter_block', (item, advanced, text) => {
        if (event.shift) {
            text.add(1,[
                Text.green("Hochkomprimierter Block aus Antimaterie")
            ])
        }
    })



    event.addAdvanced('mod_journey:the_rod_of_real_life', (item, advanced, text) => {
        text.add(1, [ Text.yellow('Using at own risk...') ])
        text.add(2, [
            Text.gold('Hold '),
            Text.green('ALT '),
            Text.gold('and '),
            Text.green('F4 '),
            Text.gold('to return to real life')
        ])
    })

})