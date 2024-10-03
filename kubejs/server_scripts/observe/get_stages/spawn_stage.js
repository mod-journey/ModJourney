PlayerEvents.tick(event => {

    if (event.server.tickCount % 100 === 0) {

        if (mod_jounrey_server_check(event)) {
            //Abfragen der Region für den Spawn.
            let player_in_spawn_radius = check_in_region(
                event,
                spawn_area.x.min,
                spawn_area.x.max,
                spawn_area.z.min,
                spawn_area.z.max
            )

            // Ist der Spieler im Spawn und hat noch nicht den Spawn Tag. Erhält er eine Nachricht und erhält den SpawnTag.
            // Ist der Spieler außerhalb des Spawnbereichs und der hat noch den Spawn Tag, erhält er eine Nachricht und der Tag wird removed.
            if (player_in_spawn_radius) {
                let player_has_tag = event.player.stages.has("spawn")
                if (!player_has_tag) {
                    event.player.stages.add("spawn")
                    event.player.tell("Du betrittst nun den Spawn.")
                }
            } else {
                let player_has_tag = event.player.stages.has("spawn")
                if (player_has_tag) {
                    event.player.stages.remove("spawn")
                    event.player.tell("Du verlässt nun den Spawn")
                }
            }
            let player_has_tag = event.player.stages.has("spawn")
            if (player_has_tag) {
                if (event.player.level.getDimension().toString() !== "minecraft:overworld") {
                    event.player.stages.remove("spawn")
                    event.player.tell("Du verlässt nun den Spawn")
                }
            }
        }
    }
})