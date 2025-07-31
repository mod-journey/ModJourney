//priority 5

/*  Hatte eine implementierung mit Objekten oder Arrays versucht, leider bleibt das Script nach dem Durchladen auf dem
    letzten Zählerstand stehen, womit sich so keine vereinfachte Form der Informationsübertragung mitteilen lässt. Tatsächlich
    prüft das script bei jedem mal rüberhovern über das Item, ob die Kondition "shift" erfüllt ist.
*/

let tooltip_scrolls = event => {


    event.add(/mod_journey:scroll_/, {shift: false}, [
        Text.gold('Hold '),
        Text.yellow('Shift '),
        Text.gold('to see more info.')
    ])


    let magic_scrolls_array = [
        1,
        2,
        3,
        "blank"
    ]


    event.add(/mod_journey:magic_scroll_/, Text.yellow('Mit diesem Gegenstand, lassen sich verdeckte Quests freischalten.'))

    event.add(/mod_journey:magic_scroll_/, {shift: false}, [
        Text.gold('Hold '),
        Text.yellow('Shift '),
        Text.gold('to see more info.')
    ])


 /*
    //Schriftrolle 1
    // TODO Rework this to run over an array e.g. ['First Mod', 'Second Mod'].forEach((i, name) => event.addAdvanced('mod_journey:scroll_' + i, (item, advanced, text) => {})
    event.addAdvanced('mod_journey:scroll_1', (item, advanced, text) => {
        if (event.shift) {
            text.add(2,[
                Text.green("Schaltet im Questbuch frei:")      //Wenn Shift, wird dieser Text angezeigt. Text kann hier definiert werden.
            ])
            text.add(3,[
                Text.gold("Industrial Foregoing")
            ]);
        };
    });

    //Schriftrolle 2
    event.addAdvanced('mod_journey:scroll_2', (item, advanced, text) => {
        if (event.shift) {
            text.add(2,[
                Text.green("Schaltet im Questbuch frei:")      //Wenn Shift, wird dieser Text angezeigt. Text kann hier definiert werden.
            ])
            text.add(3,[
                Text.gold("Ad Astra")
            ]);
        };
    });

    //Schriftrolle 3
    event.addAdvanced('mod_journey:scroll_3', (item, advanced, text) => {
        if (event.shift) {
            text.add(2,[
                Text.green("Schaltet im Questbuch frei:")      //Wenn Shift, wird dieser Text angezeigt. Text kann hier definiert werden.
            ])
            // text.add(3,[
            //     Text.gold("Thermal Series")
            // ]) // todo vermutlich löschen?
        }
    })

    //Schriftrolle 4
    event.addAdvanced('mod_journey:scroll_4', (item, advanced, text) => {
        if (event.shift) {
            text.add(2,[
                Text.green("Schaltet im Questbuch frei:")      //Wenn Shift, wird dieser Text angezeigt. Text kann hier definiert werden.
            ])
            text.add(3,[
                Text.gold("Applied Energistics")
            ])
        }
    })

    //Schriftrolle 5
    event.addAdvanced('mod_journey:scroll_5', (item, advanced, text) => {
        if (event.shift) {
            text.add(2,[
                Text.green("Schaltet im Questbuch frei:")      //Wenn Shift, wird dieser Text angezeigt. Text kann hier definiert werden.
            ])
            text.add(3,[
                Text.gold("Extreme Reactor")
            ])
        }
    })

    //Schriftrolle 6
    event.addAdvanced('mod_journey:scroll_6', (item, advanced, text) => {
        if (event.shift) {
            text.add(2,[
                Text.green("Schaltet im Questbuch frei:")      //Wenn Shift, wird dieser Text angezeigt. Text kann hier definiert werden.
            ])
            text.add(3,[
                Text.gold("Powah")
            ])
        }
    })

    //Schriftrolle 7
    event.addAdvanced('mod_journey:scroll_7', (item, advanced, text) => {
        if (event.shift) {
            text.add(2,[
                Text.green("Schaltet im Questbuch frei:")      //Wenn Shift, wird dieser Text angezeigt. Text kann hier definiert werden.
            ])
            text.add(3,[
                Text.gold("Ender IO")
            ])
        }
    })

    //Schriftrolle 8
    event.addAdvanced('mod_journey:scroll_8', (item, advanced, text) => {
        if (event.shift) {
            text.add(2,[
                Text.green("Schaltet im Questbuch frei:")      //Wenn Shift, wird dieser Text angezeigt. Text kann hier definiert werden.
            ])
            text.add(3,[
                Text.gold("Flux Network")
            ])
        }
    })

    //Schriftrolle 9
    event.addAdvanced('mod_journey:scroll_9', (item, advanced, text) => {
        if (event.shift) {
            text.add(2,[
                Text.green("Schaltet im Questbuch frei:")      //Wenn Shift, wird dieser Text angezeigt. Text kann hier definiert werden.
            ])
            text.add(3,[
                Text.gold("Mekanism")
            ])
        }
    })

    //leere Schriftrolle
    event.addAdvanced('mod_journey:blank_scroll', (item, advanced, text) => {
        if (!event.shift) {
            text.add(1, [
                Text.gold('Hold '),
                Text.yellow('Shift '),
                Text.gold('to see more info.')
            ])
        } else {
            text.add(1,[
                Text.green("Wird zum craften von Schriftrollen benötigt.")
            ])
        }
    })


    //Magic Scroll Blank
    event.addAdvanced('mod_journey:magic_scroll_blank', (item, advanced, text) => {
        if (event.shift) {
            text.add(2, [
                Text.green("Wird zum weitercraften benötigt")
            ])
        }
    })

    //Magic Scroll Blank
    // TODO Rework this to run over an array e.g. ['First Mod', 'Second Mod'].forEach((i, name) => event.addAdvanced('mod_journey:magic_scroll_' + i, (item, advanced, text) => {})
    event.addAdvanced('mod_journey:magic_scroll_1', (item, advanced, text) => {
        if (event.shift) {
            text.add(2, [
                Text.green("Schaltet Blood Magic frei.")
            ])
        }
    })

    //Magic Scroll Blank
    event.addAdvanced('mod_journey:magic_scroll_2', (item, advanced, text) => {
        if (event.shift) {
            text.add(2, [
                Text.green("Schaltet Ars Noveau frei.")
            ])
        }
    })

    //Magic Scroll Blank
    event.addAdvanced('mod_journey:magic_scroll_3', (item, advanced, text) => {
        if (event.shift) {
            text.add(2, [
                Text.green("Schaltet Mob Grinding Utils frei.")
            ])
        }
    })

*/
};