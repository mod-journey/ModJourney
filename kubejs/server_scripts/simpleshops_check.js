//priority 0

/**
 * Dieses Skript fragt die Koordinaten vom Spieler ab, Sollten die Koordinaten zutreffen und der Spieler den genannten Tag nicht haben
 * wird seine Aktion auf den creativ simple shop unterbunden. Das Objekt ließe sich mit eigenen Werten füllen.
 */

BlockEvents.rightClicked('simpleshops:creative_simple_shop', event => {

    //setzen der Variablen für bessere Lesbarkeit
    let has_tag = event.player.getTags();
    let playerX = event.player.x;
    let playerZ = event.player.z;

    //Erstellen eines Objektes, Werte können hier angepasst werden
    let coord = {
        tech: {
            x: {
                min: 64,
                max: 79
            },
            z: {
                min: -16,
                max: 32
            },
            tag: "tech"
        },
        magic: {
            x: {
                min: 48,
                max: 64
            },
            z: {
                min: -16,
                max: 32
            },
            tag: "magic"
        }
    };

    //Matrix erstellung. Prüft ob sich Spieler im genannten Bereich befindet. Gibt true oder false zurück
    let tech_x_check = (playerX >= coord.tech.x.min && playerX <= coord.tech.x.max);
    let tech_z_check = (playerZ >= coord.tech.z.min && playerZ <= coord.tech.z.max);

    let magic_x_check = (playerX >= coord.magic.x.min && playerX <= coord.magic.x.max);
    let magic_z_check = (playerZ >= coord.magic.z.min && playerZ <= coord.magic.z.max);


    //Abfrage ob sich Spieler im genannten Bereich befindet. (schont die Performance.)
    //folgend die Abfragen ob die im Ojekt genannten Tags vergeben sind, wenn dies nicht der Fall ist, wird der Callbak
    //ausgeführt und der Rechtsklick abgebrochen
    if (tech_x_check && tech_z_check) {
        if (!has_tag.contains(coord.tech.tag)) {
            event.server.tell("Dir fehlt Folgender Tag um hier einzukaufen: " + coord.tech.tag);
            event.server.tell("Erfülle Quests im Questbuch um hier einkaufen zu können.");
            event.cancel();
        };
    };

    if (magic_x_check && magic_z_check) {
        if (!has_tag.contains(coord.magic.tag)) {
            event.server.tell("Dir fehlt Folgender Tag um hier einzukaufen: " + coord.magic.tag);
            event.server.tell("Erfülle Quests im Questbuch um hier einkaufen zu können.");
            event.cancel();
        };
    };
});