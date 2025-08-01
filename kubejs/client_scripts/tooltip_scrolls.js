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
        'Blood Magic',
        'Ars Noveau',
        'Mob Grinding Utils',
    ]


    event.add(/mod_journey:magic_scroll_/, Text.yellow('Mit diesem Gegenstand, lassen sich verdeckte Quests freischalten.'))

    event.add(/mod_journey:(blank_scroll|magic_scroll_|scroll_)/, {shift: false}, [
        Text.gold('Hold '),
        Text.yellow('Shift '),
        Text.gold('to see more info.')
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


    // leere Schriftrolle und Magic Scroll Blank
    event.add(/mod_journey:(magic_scroll_blank|blank_scroll)/, {shift: true}, [
                Text.green("Wird zum craften von Schriftrollen benötigt.")
        ]
    )


    // Add SHIFT-Text to magic scrolls
    magic_scrolls_array.forEach((modName, i) => {
        if (modName) {
            event.add(`mod_journey:magic_scroll_${i}`, {shift: true}, [
                Text.green(`Schaltet ${modName} frei.`),
            ])
        }
    })
};