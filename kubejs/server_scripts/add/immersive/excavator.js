ServerEvents.recipes(event => {
    event.forEachRecipe({ type: 'immersiveengineering:mineral_mix' }, r => {
        let json = r.json;
        let dim = r.json.get("dimensions")
        //console.log(Object.keys(r))                                  // Liefert Informationen bezüglich der IDs in den Logs
        dim['add(com.google.gson.JsonElement)']("farming:dim") //https://discord.com/channels/303440391124942858/1127448911871737936/1127667372023631872
        //console.log(dim)
        //console.log(r.getId())
        event.custom(
            r.json
        ).id(r.getId())
    });
});

/* Hier werden die Rezepte aus der initalisierung für den Excavator abgegriffen. und der
dem Parameter r übergeben. Mittels der varriable json sagen wir, dass r als json umgewandelt
werden soll. Mit der variable dim holen wir uns das child dimensionen heraus.
anschließend fügen wir dem child eine weitere dimension hinzu.
schlussfolglich erstellen wir ein neues custom event welches die modifizierte r.json enthält und
geben die rezept id gleich der, welche ursprungs id das rezept hatte. diese wird mittels getID() ermittelt
*/
