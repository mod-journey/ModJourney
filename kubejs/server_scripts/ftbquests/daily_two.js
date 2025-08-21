//priority 10

const $FTBTeamsAPI = Java.loadClass("dev.ftb.mods.ftbteams.api.FTBTeamsAPI");

QuestBuilder
    .customTask()
    .setMaxProgress(240) // 4h
    .setCheckTimer(20*60) // Timer wird jede Minute geprueft
    .build('5738C3631FA49D6B6')

    .setMaxProgress(1440) // 24h max
    .setCheckTimer(18000) // Timer wird jede 15 Minuten geprueft
    .setCheck(task => { task.progress += 15 }) // Adds progress to the quest.
    .build('597813E4951FDC5E')

// Weekly Quests
let WEEK = 60*60*24*7
let projectStart = new Date(2025, 9, 31, 18, 0).getTime() / 1000;

QuestBuilder
    .customTask()
    .setCheck(taskData => { taskData.progress = Date.now() / 1000 })
    .setMaxProgress(projectStart + WEEK)
    .build('05B74B2E0F42359F')

    .setMaxProgress(projectStart + WEEK * 2)
    .build('0707E0514EDD6A01')

    .setMaxProgress(projectStart + WEEK * 3)
    .build('61DD4DAADD7E6BD3')

    .setMaxProgress(projectStart + WEEK * 4)
    .build('1459E7CC4CC6A32F')


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
