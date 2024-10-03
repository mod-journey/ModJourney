//priority 10

ServerEvents.recipes(event => {

    /**
        * Hinzufügen des geronnenen Blutblocks,
        * 2147483647 Int, hatte die letzte Zahl abgeschnitten, und den restbetrag durch 5 geteilt.
        * gemessen an einem Altar der 200k Blut die Minute abarbeiten kann, kommt man hier auf einen Klumpen von 3,5h ca.
        * Somit kann hier ein Block innerhalb von ca. alle 1 1/2 Tage gecraftet werden.
    */
    event.custom({
        "type": "bloodmagic:altar",
        "altarSyphon": 42000000,
        "consumptionRate": 50,
        "drainRate": 5,
        "input": {
          "item": "minecraft:netherite_block"
        },
        "output": {
          "item": "mod_journey:clotted_blood_clump"
        },
        "upgradeLevel": 4
    }).id("modjourney:shapless/clotted_blood_clump")

    event.shapeless(
        Item.of('mod_journey:clotted_bloodblock', 1), [
        '9x mod_journey:clotted_blood_clump'
    ]).id("modjourney:shapless/clotted_blood_block")
});