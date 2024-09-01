//priority 50

//This Script replace Alloy_Dust recipes from the thermal centrifuge

ServerEvents.recipes(event => {

    let thermal_alloy= [
        'bronze',
        'electrum',
        'constantan',
        'invar'
    ]

    thermal_alloy.forEach( ore => {
        event.forEachRecipe({id: "thermal:machines/centrifuge/centrifuge_" + ore + "_dust"}, r => {

            let thermal_ores = [
                'tin',
                'lead',
                'silver',
                'nickel',
                'bronze',
                'electrum',
                'invar',
                'constantan',
                'signalum',
                'lumium',
                'enderium',
                'iron',
                'gold',
                'copper'
            ]

            thermal_ores.forEach(ores => {
                //ermitteln der Anzahl an Objekten in der Ausgabe.
                let array_size = r.json.get("result").size()
                //Zaehler fuer die get Befehle und dem Array Check.
                let counter = 0
                //Suchbegriff, zum vergleichen ob Eingabe gleich JSON Wert.
                let thermal_ores_parse = JSON.stringify("thermal:" + ores + "_dust")
                //Ermittelt JSON Wert und wandelt in String um.
                let check_output = r.json.get("result").get(counter).get("item")
                check_output.getAsString()

                //erste Pruefung ob Werte uebereinstimmen und Elemente gleich null.
                if (check_output === thermal_ores_parse) {
                    if (array_size === counter) {
                        r.json.get("result").get(counter).add("item", "alltheores:" + ores + "_dust")
                        event.custom(r.json).id(r.getId())
                    }
                }
                //zweite ueberpruefung ob elemente identisch sind und ausgabe größer wie null.
                if (check_output === thermal_ores_parse) {
                    if (array_size > counter) {
                        r.json.get("result").get(counter).add("item", "alltheores:" + ores + "_dust")
                        counter = counter + 1

                        //Initalisieren eines weiteren foreach und Neusetzung der Variablen, fuer zweite Array Stelle.
                        thermal_ores.forEach(ores => {
                            check_output = r.json.get("result").get(counter).get("item")
                            check_output.getAsString()
                            thermal_ores_parse = JSON.stringify("thermal:" + ores + "_dust")

                            //erneute Pruefung fuer zweite Stelle mit neuen Werten.
                            if (check_output === thermal_ores_parse) {
                                r.json.get("result").get(counter).add("item", "alltheores:" + ores + "_dust")
                                counter = counter - 1
                            }
                        });
                    }
                    //Ueberschreiben des alten Rezeotes nach vollendetem Schleifendurchlauf.
                    event.custom(r.json).id(r.getId())
                }
            });
        })
    });

})