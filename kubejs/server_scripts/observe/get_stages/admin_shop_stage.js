PlayerEvents.tick(event => {

    if (event.server.tickCount % 100 === 0) {

        if (mod_jounrey_server_check(event)) {

            if (event.player.stages.has("spawn")) {

                let player_in_technic_region = check_in_region(
                    event,
                    technic_admin.x.min,
                    technic_admin.x.max,
                    technic_admin.z.min,
                    technic_admin.z.max
                )
                let player_in_magic_region = check_in_region(
                    event,
                    magic_admin.x.min,
                    magic_admin.x.max,
                    magic_admin.z.min,
                    magic_admin.z.max
                )

                if (player_in_magic_region || player_in_technic_region) {
                    let player_has_tag = event.player.stages.has("admin_shop")

                    if (!player_has_tag) {
                        event.player.stages.add("admin_shop")

                        if (player_in_technic_region) {
                            event.player.tell("Willkommen im Server Technik Shop.")
                        }

                        if (player_in_magic_region) {
                            event.player.tell("Willkommen im Server Magie Shop.")
                        }
                    }
                } else {
                    let player_has_tag = event.player.stages.has("admin_shop")

                    if (player_has_tag) {
                        event.player.stages.remove("admin_shop")
                        event.player.tell("Du verlässt nun den Server Shop.")
                    }
                }

            }
        }
    }
})