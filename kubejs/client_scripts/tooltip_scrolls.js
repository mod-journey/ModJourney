//priority 5

let tooltip_scrolls = event => {

    let technic_scrolls_array = [
        null,
        {unlocks: 'Industrial Foregoing'},
        {unlocks: 'Stellaris'}, //'Ad Astra'
        null,
        {unlocks: 'Applied Energistics'},
        {unlocks: 'Extreme Reactor'},
        {unlocks: 'Powah'},
        {unlocks: 'Ender IO'},
        {unlocks: 'Flux Network'},
        {unlocks: 'Mekanism'},
    ]

    let magic_scrolls_array = [
        null,
        // TODO replace Bloodmagic and add new scroll for occultism
        {unlocks: 'Occultism'},
        {unlocks: 'Ars Noveau'},
        {unlocks: 'Mob Grinding Utils'},
    ]


    // Add text via reg-exp to all non-blank scrolls - see https://regex101.com/r/NWcfGg/1
    event.add(/mod_journey:(scroll_|magic_scroll_)[0-9]/, Text.translate('item.mod_journey.scroll_blank.tooltip.unlock').yellow())

    // Add blank scroll technic and magic
    event.add(/mod_journey:(magic_scroll_blank|blank_scroll)/, {shift: true}, [
            Text.translate('item.mod_journey.scroll_blank.tooltip.needed_for_crafting').green()
        ]
    )

    event.add(/mod_journey:(blank_scroll|magic_scroll_|scroll_)/, {shift: false}, [
        Text.translate('item.mod_journey.tooltip.hold_key_for_info', [
            Text.translate('button.mod_journey.shift').yellow()
        ]).gold()
    ])

    // Add SHIFT-Text - Schriftrolle 1-9
    technic_scrolls_array.forEach((mod, i) => {
        if (mod) {
            event.add(`mod_journey:scroll_${i}`, {shift: true}, [
                Text.translate('item.mod_journey.scroll.tooltip.unlock_questbook',
                    Text.gold(mod.unlocks)
                ).green()
            ])
        }
    })

    // Add SHIFT-Text to magic scrolls
    magic_scrolls_array.forEach((mod, i) => {
        if (mod) {
            event.add(`mod_journey:magic_scroll_${i}`, {shift: true}, [
                Text.translate('item.mod_journey.scroll.tooltip.unlock_questbook',
                    Text.gold(mod.unlocks)
                ).green()
            ])
        }
    })
};