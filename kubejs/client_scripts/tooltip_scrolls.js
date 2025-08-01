//priority 5

let tooltip_scrolls = event => {

    let technic_scrolls_array = [
        null,
        'Industrial Foregoing',
        'Stellaris', //'Ad Astra'
        'Thermal Series',
        'Applied Energistics',
        'Extreme Reactor',
        'Powah',
        'Ender IO',
        'Flux Network',
        'Mekanism',
    ]

    let magic_scrolls_array = [
        null,
        // TODO replace Bloodmagic and add new scroll for occultism
        'Blood Magic',
        'Ars Noveau',
        'Mob Grinding Utils',
    ]


    // Add text via reg-exp to all non-blank scrolls - see https://regex101.com/r/NWcfGg/1
    event.add(/mod_journey:(scroll_|magic_scroll_)[0-9]/, Text.yellow('Mit diesem Gegenstand, lassen sich verdeckte Quests freischalten.'))

    // Add blank scroll technic and magic
    event.add(/mod_journey:(magic_scroll_blank|blank_scroll)/, {shift: true}, [
            Text.green("Wird zum craften von Schriftrollen benötigt.")
        ]
    )

    event.add(/mod_journey:(blank_scroll|magic_scroll_|scroll_)/, {shift: false}, [
        Text.gold('Hold ')
            .append(Text.yellow('Shift '))
            .append(Text.gold('to see more info.'))
    ])

    // Add SHIFT-Text - Schriftrolle 1-9
    technic_scrolls_array.forEach((modName, i) => {
        if (modName) {
            event.add(`mod_journey:scroll_${i}`, {shift: true}, [
                    Text.green("Schaltet im Questbuch frei:"),
                    Text.gold(modName),
                ]
            )
        }
    })

    // Add SHIFT-Text to magic scrolls
    magic_scrolls_array.forEach((modName, i) => {
        if (modName) {
            event.add(`mod_journey:magic_scroll_${i}`, {shift: true}, [
                Text.green("Schaltet im Questbuch frei:"),
                Text.gold(modName),
            ])
        }
    })
};