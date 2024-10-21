ItemEvents.rightClicked("minecraft:stick", event => {
    if (!mod_jounrey_server_check(event)) return;
    if (event.player.stages.has("member")) return;

    let controll_rank = true;

    /* ranks, that must give to players to first login, so we can track them.*/
    let administrative_ranks = [
        "orga_rang",        "orga_kein_dienst",         "orga_im_dienst",      "orga_mit_rechten",
        "support_rang",     "support_kein_dienst",      "support_im_dienst",   "support_mit_rechten",
        "admin_rang",       "admin_kein_dienst",        "admin_im_dienst",     "admin_mit_rechten"
    ]

    /**
     * @param {String} search_array Your Array with Tags, that will be check
     * @returns {true|false}
     */
    function search_for_tag(search_array) {
        for (let i = 0; i < search_array.length; i++) {
            if (event.player.stages.has(search_array[i])) {
                return true;
            }
        }
        return false;
    }

    /* If no Admin Rank is given, player will add to Member, so that Script will not work anymore for them. */
    if (!search_for_tag(administrative_ranks)) {
        event.player.stages.add("member")
        console.log(event.player.name.getString() + " hat den Tag \"member\" verliehen bekommen.")
        event.player.tell("§3" + event.player.name.getString() + "§r" + " hat den Tag §3member§r verliehen bekommen.")
        controll_rank = false
    }

    /**
     * @param {String} old_tag The Player Tag, which will looking for.
     * @param {String} new_tag The Player Tag, which will add now.
     * @param {Int} status
     */

    function promote_player(old_tag, new_tag, status) {
        if (event.player.stages.has(old_tag)) {
            if (controll_rank) {
                //Feste Commands
                event.server.runCommandSilent(`tag ${event.player.name.getString()} add ${new_tag}`)
                event.server.runCommandSilent(`tag ${event.player.name.getString()} remove ${old_tag}`)

                //Logging
                event.player.tell(`Du hast deinen Rang gewechselt von §3${old_tag}§r zu §3${new_tag}§r.`)
                console.log(`"${event.player.name.getString()}" hat seinen Rang gewechselt von "${old_tag}" zu "${new_tag}"`)

                if (status === 1) {
                    console.log(` ${event.player.name.getString()} ist nun als ${new_tag.split("_")[0]} aktiv.`)
                    event.server.runCommandSilent(`lp user ${event.player.name.getString()} parent add ${new_tag}`)
                }
                if (status === 2) { //wenn Spieler beitritt "Rang aktiv"
                    event.server.runCommandSilent(`team join ${new_tag.split("_")[0]} ${event.player.name.getString()}`)
                    console.log(` ${event.player.name.getString()} ist nun als ${new_tag.split("_")[0]} aktiv.`)
                }
                else if (status === 3) { //wenn Spieler beitritt "Rechte aktiv"
                    event.server.runCommandSilent(`luckperms user ${event.player.name.getString()} promote`)
                    console.log(`${event.player.name.getString()} hat nun erweiterte Rechte.`)
                }
                else if (status === 4) { //wenn Spieler beitritt "Rang inaktiv"
                    event.server.runCommandSilent(`team leave ${event.player.name.getString()}`)
                    event.server.runCommandSilent(`luckperms user ${event.player.name.getString()} demote`)
                }
                return controll_rank = false
            }
        }
    }

    // promoting rank admin
    promote_player("admin_rang", "admin_kein_dienst", 1)
    promote_player("admin_kein_dienst", "admin_im_dienst", 2)
    promote_player("admin_im_dienst", "admin_mit_rechten", 3)
    promote_player("admin_mit_rechten", "admin_kein_dienst", 4)

    // promoting rank orga
    promote_player("orga_rang", "orga_kein_dienst", 1)
    promote_player("orga_kein_dienst", "orga_im_dienst", 2)
    promote_player("orga_im_dienst", "orga_mit_rechten", 3)
    promote_player("orga_mit_rechten", "orga_kein_dienst", 4)

    // promoting rank support
    promote_player("support_rang", "support_kein_dienst", 1)
    promote_player("support_kein_dienst", "support_im_dienst", 2)
    promote_player("support_im_dienst", "support_mit_rechten", 3)
    promote_player("support_mit_rechten", "support_kein_dienst", 4)

})