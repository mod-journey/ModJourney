//priority 50

ServerEvents.recipes(event => {

    // Durchläuft den Rezepthändler für mekanism
    event.forEachRecipe({mod: "mekanism"}, r => {

        //definiert die Erze aus der Erzvervielfachung. Eisen und Gold sind in ATO nicht mit dabei
        let ores = [
            'osmium',
            'copper',
            'tin',
            'lead',
            'uranium'
        ]

        ores.forEach(element => {

            //Ändert die Dirty Dust Rezepte um
            //Filter für Crushing
            if (r.json.get("type") + '' === '"mekanism:crushing"') {
                //Filter für Ausgabe
                if (r.json.get("output").get("item") + '' === '"mekanism:dirty_dust_' + element + '"' ) {
                    //Überschreiben des alten Elements item mit neuem Inhalt.
                    r.json.get("output").add("item", "alltheores:dirty_" + element + "_dust")
                    //Neuanlegen des Rezeptes unter selber ID.
                    event.custom(r.json).id(r.getId())
                }
            }

            //Filter für Purifying
            if (r.json.get("type") + '' === '"mekanism:purifying"') {
                //Filter für Ausgabe
                if (r.json.get("output").get("item") + '' === '"mekanism:clump_' + element + '"' ) {
                    //Überschreiben des alten Elements item mit neuem Inhalt.
                    r.json.get("output").add("item", "alltheores:" + element + "_clump")
                    //Neuanlegen des Rezeptes unter selber ID.
                    event.custom(r.json).id(r.getId())
                }
            }

            //Filter für Injecting
            if (r.json.get("type") + '' === '"mekanism:injecting"') {
                //Filter für Ausgabe
                if (r.json.get("output").get("item") + '' === '"mekanism:shard_' + element + '"' ) {
                    //Überschreiben des alten Elements item mit neuem Inhalt.
                    r.json.get("output").add("item", "alltheores:" + element + "_shard")
                    //Neuanlegen des Rezeptes unter selber ID.
                    event.custom(r.json).id(r.getId())
                }
            }

            //Filter für Crystalizing
            if (r.json.get("type") + '' === '"mekanism:crystallizing"') {
                //Filter für Ausgabe
                if (r.json.get("output").get("item") + '' === '"mekanism:crystal_' + element + '"' ) {
                    //Überschreiben des alten Elements item mit neuem Inhalt.
                    r.json.get("output").add("item", "alltheores:" + element + "_crystal")
                    //Neuanlegen des Rezeptes unter selber ID.
                    event.custom(r.json).id(r.getId())
                }
            }
        });
    })
})