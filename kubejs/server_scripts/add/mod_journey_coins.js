ServerEvents.recipes(event => {

    // Rezept für 1 Silbermünze aus 9 Bronze-Münzen
    event.shaped('mod_journey:silver_coin', [
        'BBB',
        'BBB',
        'BBB'
    ], {
        B: 'mod_journey:bronze_coin'
    });

    // Rezept für 1 Goldmünze aus 9 Silbermünzen
    event.shaped('mod_journey:gold_coin', [
        'SSS',
        'SSS',
        'SSS'
    ], {
        S: 'mod_journey:silver_coin'
    });

    // Rückwärts-Rezept für 9 Bronze-Münzen aus 1 Silbermünze
    event.shapeless(Item.of('mod_journey:bronze_coin', 9), ['mod_journey:silver_coin']);

    // Rückwärts-Rezept für 9 Silber-Münzen aus 1 Goldmünze
    event.shapeless(Item.of('mod_journey:silver_coin', 9), ['mod_journey:gold_coin']);

});