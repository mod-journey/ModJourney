ServerEvents.recipes(event => {

    // Rezept für 1 Silbermünze aus 9 Bronze-Münzen
    event.shaped('thermal:silver_coin', [
        'BBB',
        'BBB',
        'BBB'
    ], {
        B: 'thermal:bronze_coin'
    });

    // Rezept für 1 Goldmünze aus 9 Silbermünzen
    event.shaped('thermal:gold_coin', [
        'SSS',
        'SSS',
        'SSS'
    ], {
        S: 'thermal:silver_coin'
    });

    // Rückwärts-Rezept für 9 Bronze-Münzen aus 1 Silbermünze
    event.shapeless(Item.of('thermal:bronze_coin', 9), ['thermal:silver_coin']);

    // Rückwärts-Rezept für 9 Silber-Münzen aus 1 Goldmünze
    event.shapeless(Item.of('thermal:silver_coin', 9), ['thermal:gold_coin']);

});