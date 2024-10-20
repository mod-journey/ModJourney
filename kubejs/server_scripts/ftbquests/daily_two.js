const $FTBTeamsAPI = Java.loadClass("dev.ftb.mods.ftbteams.api.FTBTeamsAPI");

FTBQuestsEvents.customReward("65A83C70BA4FDE02", event => {

    const teamManager = $FTBTeamsAPI.api().getManager();
    const playerUUID = event.player.getUuid();
    const teamOptional = teamManager.getTeamForPlayerID(playerUUID);

    if (teamOptional.isPresent()) {
        const team = teamOptional.get();

        // Mitglieder des Teams abrufen
        const teamMembers = team.getMembers();

        // Anzahl der Mitglieder im Team
        const memberCount = teamMembers.size();

        // Anzahl der Teammitglieder ausgeben
        console.log("Quest-Erfolg: " + event.player.name.getString() + " hat erfolgreich " + memberCount + " Münze/n für sein Team abgeholt.");
        event.player.tell("Du hast erfolgreich " + memberCount + " Münze/n für dein Team abgeholt")

        for (let n = 1; n <= memberCount; n++) {

            event.player.give("mod_journey:gold_coin")
        }
    } else {
        console.log("Quest-Fehler: " + event.player.name.getString() + " hat nur einen Goldcoin erhalten")
        event.player.tell("Etwas ist bei der Abgabe der Quest schiefgelaufen, bitte Kontaktiere umgehend die Orga.")
        event.player.give("mod_journey:gold_coin")
    }
})