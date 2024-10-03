//priority 0

ServerEvents.recipes(event => {

    // Debug Variablen
    let debug = "false"
    let recipe_new = "false"
    let recipe_old = "false"

    //entfernen der Spawnermodule Ignore Players.
    let spawn_modifiers = [
        "apotheosis:spawner/ignore_players_inverted",
        "apotheosis:spawner/ignore_players",
    ];

    spawn_modifiers.forEach(element => {
        event.remove({id: element});
    });


    // Intitalisieren eines Objektes, zum Bauen neuer Rezepte.
    let new_stat_changes = {
        id: "",
        value: 1,
        min: 1,
        max: 1
    };

    /**     Modifizieren der Spawnermodule. Gehe jedes Rezept in einer Schleife durch, was den Typ spawner_modifier hat.
     *      Vergleiche den aktuellen Rezeptdurchlauf mit dem Angegebenen Wert.
     *      Einrichtung von Debug Variablen
     *      Bearbeite das oben genannte Objekt auf deine Wünsche. Achtung in inverted Rezepten den max Bereich immer auf -1 lassen.
     *      Gehe in das Objekt rein und schreibe das Objekt neu.
     *      Lege das Rezept neu an, mit der gleichen ID
     *      Einrichten einer Debug Variable
    */

    event.forEachRecipe({ type: "apotheosis:spawner_modifier" }, r => {

        if (r.getId() === 'apotheosis:spawner/spawn_count') {
            if (debug === "true" || recipe_old === "true") {console.log("Rezept alt: " + r.json)};

            Object.assign(new_stat_changes, {
                id: "spawn_count",
                value: 1,
                min: -1,
                max: 8
            });

            r.json.get("stat_changes").set(0, new_stat_changes);
            event.custom(r.json).id(r.getId());

            if (debug === "true" || recipe_new === "true") {console.log("Rezept neu: " + r.json)};
        }


        if (r.getId() === 'apotheosis:spawner/min_delay') {
            if (debug === "true" || recipe_old === "true") {console.log("Rezept alt: " + r.json)};

            Object.assign(new_stat_changes, {
                id:"min_delay",
                value: -10,
                min: 100,
                max: -1
            });

            r.json.get("stat_changes").set(0, new_stat_changes);
            event.custom(r.json).id(r.getId());

            if (debug === "true" || recipe_new === "true") {console.log("Rezept neu: " + r.json)};
        }


        if (r.getId() === 'apotheosis:spawner/max_delay') {
            if (debug === "true" || recipe_old === "true") {console.log("Rezept alt: " + r.json)};

            Object.assign(new_stat_changes, {
                id: "max_delay",
                value: -10,
                min: 200,
                max: -1
            })

            r.json.get("stat_changes").set(0, new_stat_changes)
            event.custom(r.json).id(r.getId())

            if (debug === "true" || recipe_new === "true") {console.log("Rezept neu: " + r.json)};
        }


        if (r.getId() === 'apotheosis:spawner/max_nearby') {
            if (debug === "true" || recipe_old === "true") {console.log("Rezept alt: " + r.json)};

            Object.assign(new_stat_changes, {
                id: "max_nearby_entities",
                value: 2,
                min: -1,
                max: 16
            })

            r.json.get("stat_changes").set(0, new_stat_changes)
            event.custom(r.json).id(r.getId())

            if (debug === "true" || recipe_new === "true") {console.log("Rezept neu: " + r.json)};
        }
    });

     // Entfernen des Augmenting Table
     event.remove({output: 'apotheosis:augmenting_table'})
})