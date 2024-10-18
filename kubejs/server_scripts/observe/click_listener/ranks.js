ItemEvents.rightClicked("minecraft:stick", event => {
    if (!mod_jounrey_server_check(event)) return;
    if (event.player.stages.has("member")) return;

    /**@param {String} search_tag  search for a player tag.*/
    function player_tag(search_tag) {
        return event.player.stages.has(search_tag);
    }
    /* ranks, that must give to players to first login, so we can track them.*/
    let administrative_ranks = [
        "orga_rang",
        "support_rang",
        "admin_rang"
    ]

    /**
     * @param {String} search_array Your Array with Tags, that will be check
     * @returns True > The first matched Rank by Player || false > false
     */
    function search_for_tag(search_array) {
        for (let i = 0; i < search_array.length; i++) {
            if (player_tag(search_array[i])) {
                return search_array[i];
            }
        }
        return false;
    }

    /*
      if no admin rank was found, the player will add to member. So this Script wont track him anymore
      if some admin rank was found, the player and server will notify, that the player got his no_work rank.
      also a tag will add to player. this is for the first setup.
    */
    if (!(search_for_tag("orga_kein_dienst") || search_for_tag("support_kein_dienst") || search_for_tag("admin_kein_dienst"))) {
        if (!search_for_tag(administrative_ranks)) {
            event.player.stages.add("member")
            console.log(event.player.name.getString() + " hat den Tag \"member\" verliehen bekommen.")
            event.player.tell("§3" + event.player.name.getString() + "§r" + " hat den Tag §3member§r verliehen bekommen.")
        }
        else if (search_for_tag(administrative_ranks) === "orga_rang" && !player_tag("orga_kein_dienst")) {
            event.player.stages.add("orga_kein_dienst")
            console.log(event.player.name.getString() + " hat den Tag \"orga_kein_dienst\" verliehen bekommen.")
            event.player.tell("§3" + event.player.name.getString() + "§r" + " hat den Tag §3orga_kein_dienst§r verliehen bekommen.")
        }
        else if (search_for_tag(administrative_ranks) === "support_rang" && !player_tag("support_kein_dienst")) {
            event.player.stages.add("support_kein_dienst")
            console.log(event.player.name.getString() + " hat den Tag \"support_kein_dienst\" verliehen bekommen.")
            event.player.tell("§3" + event.player.name.getString() + "§r" + " hat den Tag §3support_kein_dienst§r verliehen bekommen.")
        }
        else if (search_for_tag(administrative_ranks) === "admin_rang" && !player_tag("admin_kein_dienst")) {
            event.player.stages.add("admin_kein_dienst")
            console.log(event.player.name.getString() + " hat den Tag \"admin_kein_dienst\" verliehen bekommen.")
            event.player.tell("§3" + event.player.name.getString() + "§r" + " hat den Tag §3admin_kein_dienst§r verliehen bekommen.")
        }
    }
})



/*
wenn spieler item in hand hat
    wenn spieler tag hat orga
        wenn Spieler Tag "orga kein dienst
            adde Spieler zu Orga über FTB-Ranks
            adde Tag "orga im dienst"
            erstelle Konsolen Log, Spieler im Dienst als Orga
            gebe einen Nachricht im Chatt an alle ab Tag Orga, dass Spieler im Dienst ist.
            return
        wenn Spieler Tag "orga im dienst"
            promote Spieler in Luckperms
            adde Tag "orga mit rechten"
            erstelle Konsolen Log, das Spieler als Orga erweiterte Rechte hat.
            gebe eine Nachricht im Chatt an alle ab Tag Orga, dass Spieler erweiterte Rechte aktiv hat.
            return
        wenn Spieler Tag "orga mit rechten"
            demote Spieler in Luckperms
            remove Spieler aus Orga über FTB-Ranks
            erstelle Konsolen Log, dass Spieler als Orga seinen Dienst beendet hat
            gebe eine Nachricht im Chatt, an alle ab Tag Orga, dass Spieler seinen Dienst beendet hat.

            adde Tag "orga-kein-dienst"
            return
    wenn spieler in support
        code

    wenn spieler in admin
        code

    orga_rang
    orga_kein_dienst (normaler member)
    orga_im_dienst (lediglich farbkennung)
    orga_mit_rechten (rechte)

    support_rang
    support_kein_diest (normaler member)
    support_im_dienst (lediglich farbkennung)
    support_mit_rechten (rechte)

    admin_rang
    admin_kein_dienst (normaler member)
    admin_im_dienst (lediglich farbkennung)
    admin_mit_rechten (rechte)

*/