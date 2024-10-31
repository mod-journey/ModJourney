ServerEvents.commandRegistry(e => {
    const { commands: Commands, arguments: Arguments } = e
    //register the command /modjourney roleplay <red|blue|green>
    e.register(Commands.literal('modjourney')
        .requires(s => s.hasPermission(2))

        .then(Commands.literal('roleplay')
            .requires(s => s.hasPermission(2))

            .then(Commands.literal('red')
                .requires(s => s.hasPermission(2))
                .executes(c => roleplay(c.source.player, 'red'))
            )

            .then(Commands.literal('blue')
                .requires(s => s.hasPermission(2))
                .executes(c => roleplay(c.source.player, 'blue'))
            )

            .then(Commands.literal('green')
                .requires(s => s.hasPermission(2))
                .executes(c => roleplay(c.source.player, 'green'))
            )
        )
    )

    /*
        Build helperfunction. As player, we got the object soucre.player. This will abstract from commands as Commands and will
        pipe into our e as event. As the mode you can choose between red, blue an green. The if else Argument, will check, if a player
        have a team now. If a team is located, the player got a inforamtion. If it is teamless, it will add to the coloured team.
        If it use the same command again, the team will revoke. Also a check for tags are implemented. If a admin group will join the Roleplay,
        it will check that they is not on work or have additional permissions.
        If you like to use this Command tree, please add the server teams:
        rp_green, rp_red, rp_blue
    */

    let roleplay = (player, mode) => {

        let administrative_ranks = [
            "orga_im_dienst", "orga_mit_rechten",
            "support_im_dienst", "support_mit_rechten",
            "admin_im_dienst", "admin_mit_rechten"
        ]

        /**
         * @param {String} search_array Your Array with Tags, that will be check
         * @returns {true|false}
         */
        function search_for_tag(search_array) {
            for (let i = 0; i < search_array.length; i++) {
                if (player.stages.has(search_array[i])) {
                    return true;
                }
            }
            return false;
        }

        function team_colour(player) {
            let spieler = player.getTeam().getName()
            if ( spieler === "rp_red") {
                return "§4"
            }
            else if ( spieler === "rp_blue") {
                return "§3"
            }
            else if ( spieler === "rp_green") {
                return "§2"
            }
        }

        if (search_for_tag(administrative_ranks)) {
            player.tell("Um am Roleplay teilnehmen zu können, verlasse bitte deinen §2Administrativen§r Rang, mittels dem \"stick\"")
            return 1
        }

        if (mode === 'red') {
            if (player.stages.has("rp_green") || player.stages.has("rp_blue")) {
                player.tell(`Verlasse bitte deine ${team_colour(player)}Roleplay§r Rolle, bevor Du wechselst.`)
            }
            else if (player.stages.has("rp_red")) {
                Utils.server.runCommandSilent(`team leave ${player.name.string}`)
                player.stages.remove("rp_red")
                player.tell("Du bist nun nicht mehr im §4Roleplay§r tätig.")
            }
            else {
                Utils.server.runCommandSilent(`team join rp_red ${player.name.string}`)
                player.stages.add("rp_red")
                player.tell("Du bist nun für §4Roleplay§r verfügbar.")
            }
            return 1
        }

        else if (mode === 'blue') {
            if (player.stages.has("rp_green") || player.stages.has("rp_red")) {
                player.tell(`Verlasse bitte deine ${team_colour(player)}Roleplay§r Rolle, bevor Du wechselst.`)
            }
            else if (player.stages.has("rp_blue")) {
                Utils.server.runCommandSilent(`team leave ${player.name.string}`)
                player.stages.remove("rp_blue")
                player.tell("Du bist nun nicht mehr im §3Roleplay§r tätig.")
            }
            else {
                Utils.server.runCommandSilent(`team join rp_blue ${player.name.string}`)
                player.stages.add("rp_blue")
                player.tell(`Du bist nun für §3Roleplay§r verfügbar.`)
            }
            return 1
        }

        else if (mode === 'green') {
            if (player.stages.has("rp_blue") || player.stages.has("rp_red")) {
                player.tell(`Verlasse bitte deine ${team_colour(player)}Roleplay§r Rolle, bevor Du wechselst.`)
            }
            else if (player.stages.has("rp_green")) {
                Utils.server.runCommandSilent(`team leave ${player.name.string}`)
                player.stages.remove("rp_green")
                player.tell("Du bist nun nicht mehr im §2Roleplay§r tätig.")
            }
            else {
                Utils.server.runCommandSilent(`team join rp_green ${player.name.string}`)
                player.stages.add("rp_green")
                player.tell("Du bist nun für §2Roleplay§r verfügbar.")
            }
            return 1
        }
        return 1
    }
})