//priority 10

ServerEvents.recipes(event => {

    let colours = [
        'white',
        'orange',
        'magenta',
        'light_blue',
        'yellow',
        'lime',
        'pink',
        'gray',
        'light_gray',
        'cyan',
        'purple',
        'blue',
        'brown',
        'green',
        'red',
        'black'
    ];

    //Durchläuft alle Rezepte mit dem Suchfilger UND auf MOD und Rezepttyp
    event.forEachRecipe({mod: "botanypots", type: "minecraft:crafting_shaped"}, r => {

        //Absuchen nach jeder Farbe
        colours.forEach(colour => {

            //Einleiten der Variablen für bessere Lesebarkeit
            let result_filter =  r.json.get("result").get("item") + '';
            let glazed_pot = `"botanypots:${colour}_glazed_terracotta_botany_pot"`;
            let glazed_hopper_pot = `"botanypots:${colour}_glazed_terracotta_hopper_botany_pot"`;
            let normal_pot = `"botanypots:${colour}_terracotta_botany_pot"`;
            let normal_hopper_pot = `"botanypots:${colour}_terracotta_hopper_botany_pot"`;
            let concrete_pot = `"botanypots:${colour}_concrete_hopper_botany_pot"`;
            let concrete_hopper_pot = `"botanypots:${colour}_concrete_botany_pot"`;

            //wenn Result aus aktuellem Rezept mit Item.id übereinstimmt, entferne shaped Rezept und lege Ofen Rezept an.
            if (result_filter === glazed_pot) {

                event.remove(
                    {output: `botanypots:${colour}_glazed_terracotta_botany_pot`}
                );

                event.smelting(
                    `1x botanypots:${colour}_glazed_terracotta_botany_pot`,
                    `1x botanypots:${colour}_terracotta_botany_pot`
                ).id(
                    `mod_journey:smelting/botanypots/${colour}`
                );
            };

            if (result_filter === glazed_hopper_pot) {

                event.remove({
                    id: `botanypots:botanypots/crafting/${colour}_glazed_terracotta_compact_hopper_botany_pot`
                });

                event.smelting(
                    `1x botanypots:${colour}_glazed_terracotta_hopper_botany_pot`,
                    `1x botanypots:${colour}_terracotta_hopper_botany_pot`
                ).id(
                    `mod_journey:smelting/botanypots/hopper/${colour}`
                );
            };

            //Wenn Filter auf normale Botany Pots zutrifft, dann ändere das Shape und Füge einen Key samt JSON Objekt hinzu. Legt das rezept dann unter gleicher ID an.
            if (result_filter === normal_pot || result_filter === normal_hopper_pot) {
                event.remove({id: r.getId()})
                r.json.get("pattern").set(2, " L ");
                r.json.get("key").add("L", {"item": "botania:livingrock"});
                event.custom(r.json).id(`mod_journey:crafting/${result_filter.slice(12,-1)}`); //Nutze vorhandene Ausgabe. parse den String zurecht. (etnfernt Anführungszeichen und mod: botanypots:)
            };

            //entfertn concrete Botany Pots
            if (result_filter === concrete_pot || result_filter === concrete_hopper_pot) {
                event.remove({output: `botanypots:${colour}_concrete_hopper_botany_pot`});
                event.remove({output: `botanypots:${colour}_concrete_botany_pot`});
            }
        });
    });
});