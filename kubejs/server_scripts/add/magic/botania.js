//priority 10

/**
 * Fügt Custom Rezepte fürs Manatablett hinzu. Eine Überarbeitung mit Respektive
 * der Eingangszutat kann aus dem GIT Ticket: #83 entnommen werden.
 * Ein Eisenbarren zu Manastahlbarren verbrauch 3k Mana. Ein Eisenbkock 27k
 * Es wird eine Schleife für Formlose Rezepte begonnen 1-8.
 * Am Ende eines Rezeptes, wird die mana_store Variable um 27k erhöht und es geht weiter mit dem
 * nächsten Rezept. 2 Manastahlbarren ergeben Tablet mit 54k Mana. usw.
 *
 */

ServerEvents.recipes(event => {

    let mana_store = 27000;

    for (let n = 1; n <= 8; n++ ) {

        event.shapeless(
            Item.of(`botania:mana_tablet`, `{mana:${mana_store}}`),
            [
                `botania:mana_tablet`,
                `${n}x botania:manasteel_block`
            ]
        )

        mana_store = mana_store + 27000;
    }

});