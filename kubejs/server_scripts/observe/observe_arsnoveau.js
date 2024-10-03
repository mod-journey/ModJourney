
BlockEvents.broken(event => {

    //Überprüfung findet nur statt, wenn Aktionen in der Overworld statt finden.
    if (event.player.level.dimension == "minecraft:overworld") {

        //Erstellen eines Objektes, welches die Items in der Hand trackt. Ausgabe ist ID e.g. minecraft:stone
        let observere_items = {
            inHand: event.player.mainHandItem.getId(),
            inOffhand: event.player.offHandItem.getId(),
            //Items können hier zur Überprüfung ins Array hinzugefügt werden.
            badItems: [
                'ars_nouveau:novice_spell_book',
                'ars_nouveau:apprentice_spell_book',
                'ars_nouveau:archmage_spell_book',
                'ars_nouveau:creative_spell_book'
            ]
        }

        //Überprüfen des Arrays in observer items, anhand der Offhand oder Mainhand. Bei zutreffenden setzt wert auf true
        //Anschließend wird beides Zusammengehauen in baditems, wenn einer der Werte true, dann ausgabe true
        let baditemsfind_for_Mainhand = observere_items.badItems.includes(observere_items.inHand)
        let baditemsfind_for_Offhand = observere_items.badItems.includes(observere_items.inOffhand)
        let baditemsfind = baditemsfind_for_Mainhand || baditemsfind_for_Offhand

        if (baditemsfind) {
            //Erstellen des Logobjektes. im player, wird eine rechtsverschiebung für eine Nullstelle. Dann wird gerundet, anschließend wird zurückgerechnet.
            let log_player = {
                player: {
                    name: event.player.name.getString(),
                    x: Math.round(event.player.x * 10) / 10,
                    y: Math.round(event.player.y * 10) / 10,
                    z: Math.round(event.player.z * 10) / 10
                },
                block: {
                    name: event.block.getId(),
                    x: event.block.x,
                    y: event.block.y,
                    z: event.block.z
                }
            }

            //Logausgabe: [04:38:58] [INFO] ars_noveau_logger.js#37: [ars-Logger]: (robimor[-9.9 67 7.8]) Target_Block:(minecraft:grass_block[-10 67 10])
            console.log(`[ars-Logger]: (${log_player.player.name}[${log_player.player.x} ${log_player.player.y} ${log_player.player.z}]) Target_Block:(${log_player.block.name}[${log_player.block.x} ${log_player.block.y} ${log_player.block.z}])`)
        }
    }
})
