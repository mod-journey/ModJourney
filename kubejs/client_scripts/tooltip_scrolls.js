//priority 5

/*  Hatte eine implementierung mit Objekten oder Arrays versucht, leider bleibt das Script nach dem Durchladen auf dem
    letzten Zählerstand stehen, womit sich so keine vereinfachte Form der Informationsübertragung mitteilen lässt. Tatsächlich
    prüft das script bei jedem mal rüberhovern über das Item, ob die Kondition "shift" erfüllt ist.
*/

ItemEvents.tooltip(event => {

    for (let i = 1; i <= 9; i++) {

        //Fügt den Scrolls eine Beschreibung hinzu
        event.addAdvanced('mod_journey:scroll' + i, (item, advanced, text) => {

            text.add(1, [ Text.yellow('Mit diesem Gegenstand, lassen sich verdeckte Quests freischalten.') ])
            if (!event.shift) {
                text.add(2, [
                    Text.gold('Hold '),
                    Text.yellow('Shift '),
                    Text.gold('to see more info.')
                ])
            }
        })
    }

    //Schriftrolle 1
    event.addAdvanced('mod_journey:scroll1', (item, advanced, text) => {
        if (event.shift) {
            text.add(2,[
                Text.green("NIY")      //Wenn Shift, wird dieser Text angezeigt. Text kann hier definiert werden.
            ])
        }
    })

    //Schriftrolle 2
    event.addAdvanced('mod_journey:scroll2', (item, advanced, text) => {
        if (event.shift) {
            text.add(2,[
                Text.green("NIY")      //Wenn Shift, wird dieser Text angezeigt. Text kann hier definiert werden.
            ])
        }
    })

    //Schriftrolle 3
    event.addAdvanced('mod_journey:scroll3', (item, advanced, text) => {
        if (event.shift) {
            text.add(2,[
                Text.green("NIY")      //Wenn Shift, wird dieser Text angezeigt. Text kann hier definiert werden.
            ])
        }
    })

    //Schriftrolle 4
    event.addAdvanced('mod_journey:scroll4', (item, advanced, text) => {
        if (event.shift) {
            text.add(2,[
                Text.green("NIY")      //Wenn Shift, wird dieser Text angezeigt. Text kann hier definiert werden.
            ])
        }
    })

    //Schriftrolle 5
    event.addAdvanced('mod_journey:scroll5', (item, advanced, text) => {
        if (event.shift) {
            text.add(2,[
                Text.green("NIY")      //Wenn Shift, wird dieser Text angezeigt. Text kann hier definiert werden.
            ])
        }
    })

    //Schriftrolle 6
    event.addAdvanced('mod_journey:scroll6', (item, advanced, text) => {
        if (event.shift) {
            text.add(2,[
                Text.green("NIY")      //Wenn Shift, wird dieser Text angezeigt. Text kann hier definiert werden.
            ])
        }
    })

    //Schriftrolle 7
    event.addAdvanced('mod_journey:scroll7', (item, advanced, text) => {
        if (event.shift) {
            text.add(2,[
                Text.green("NIY")      //Wenn Shift, wird dieser Text angezeigt. Text kann hier definiert werden.
            ])
        }
    })

    //Schriftrolle 8
    event.addAdvanced('mod_journey:scroll8', (item, advanced, text) => {
        if (event.shift) {
            text.add(2,[
                Text.green("NIY")      //Wenn Shift, wird dieser Text angezeigt. Text kann hier definiert werden.
            ])
        }
    })

    //Schriftrolle 9
    event.addAdvanced('mod_journey:scroll9', (item, advanced, text) => {
        if (event.shift) {
            text.add(2,[
                Text.green("NIY")      //Wenn Shift, wird dieser Text angezeigt. Text kann hier definiert werden.
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
})