PlayerEvents.tick(event => {

    if (event.server.tickCount % 100 === 0) {

        if(mod_jounrey_server_check(event)) {

            if(event.player.stages.has("spawn")) {

                let player_in_playershop_region = check_in_region(
                    event,
                    player_shops.x.min,
                    player_shops.x.max,
                    player_shops.z.min,
                    player_shops.z.max
                )
                && event.player.y <= player_shops.y.max
                && event.player.y >= player_shops.y.min

                if (player_in_playershop_region) {
                    let player_has_tag = event.player.stages.has("playershop")
                    if (!player_has_tag) {
                        event.player.stages.add("playershop")
                        event.player.tell("Willkommen auf dem freien Markt.")
                    }
                } else {
                    let player_has_tag = event.player.stages.has("playershop")
                    if (player_has_tag) {
                        event.player.stages.remove("playershop")
                        event.player.tell("Du verlässt nun den freien Markt.")
                    }
                }
            }
        }
    }
})