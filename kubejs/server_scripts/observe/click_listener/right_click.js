BlockEvents.rightClicked(event => {
    //mittels der stage/playertag admin umgeht man die protection.
    if (event.player.stages.has("spawn")) {
        if (!event.player.stages.has("admin")) {
            //Wenn man im playershop ist, dürfen aktionen ausgeführt werden. Wenn spieler außerhalb der Fläche bauen, gibt es immer noch grieflogger.
            if (event.player.stages.has("playershop")) {

            }
            // Erneute Logik zum einkaufen für die Adminshops.
            else if (event.player.stages.has("admin_shop")) {
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
                //Wenn der Spieler sich in der Region aufhält und nicht die stage hat, elche über das questbuch gesteuert wird, wird seine aktion verhindert.
                if (player_in_technic_region) {
                    if (!event.player.stages.has("technic")) {
                        event.player.tell("Du bist aktuell noch nicht Berechtigt, hier einkaufen zu dürfen")
                        event.cancel()
                    }
                }
                if (player_in_magic_region) {
                    if (!event.player.stages.has("magic")) {
                        event.player.tell("Du bist aktuell noch nicht Berechtigt, hier einkaufen zu dürfen")
                        event.cancel()
                    }
                }

                //Trifft keiner der oben genannten Punkte zu, ist das rechtsklicken im Spawn deaktiviert.
            } else {
                if (event.block.id === "minecraft:birch_door") {

                } else {
                    event.cancel()
                }

            }
        }
    }
})