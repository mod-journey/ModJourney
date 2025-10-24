//priority 10
QuestBuilder.debug = true

QuestBuilder
    .customTask()
    .setMaxProgress(240) // 4h
    .setCheckTimer(20*60) // Timer wird jede Minute geprueft
    .build('30D9E8CD52F44C9A')

    .setMaxProgress(1440) // 24h max
    .setCheckTimer(20*15) // Timer wird jede 15 Sekunden geprueft
    // Adds progress to the quest.
    .setCheck((taskData, player, event, builder) => {
        let now = Date.now() / 1000
        if(FTB.isTeamManagerLoaded) {
            const teamOptional = FTB.getTeamManager().getTeamForPlayer(player)
            let questStore = QuestBuilder.getStore(player, teamOptional)
            let taskID = event.task.codeString

            if (!questStore.contains(taskID)) {
                // calc time from first check to real startTime and save it to store
                questStore.putLong(taskID, now - builder.checkTimer/20)
            }
            let questStart = questStore.getLong(taskID)
            let progress = (now-questStart)/60

            // calculate progress depending on start-Time, or set it to max
            taskData.progress = (progress < builder.maxProgress)
                ? Math.floor(progress)
                : builder.maxProgress

            // player.tell("QuestProgress: " +  progress)
        }
        else console.warn('__TEAM MANAGER NOT_LOADED')
    })
    .build('597813E4951FDC5E')

// Weekly Quests
QuestBuilder
    .customTask()
    .setCheck(taskData => { taskData.progress = Date.now() / 1000 })
    .setMaxProgress(global.mjConfig.times.week_1)
    .build('05B74B2E0F42359F')

    .setMaxProgress(global.mjConfig.times.week_2)
    .build('0707E0514EDD6A01')

    .setMaxProgress(global.mjConfig.times.week_3)
    .build('61DD4DAADD7E6BD3')

    .setMaxProgress(global.mjConfig.times.week_4)
    .build('1459E7CC4CC6A32F')


FTBQuestsEvents.customReward("65A83C70BA4FDE02", event => {

    const teamManager = FTB.getTeamManager();
    const playerUUID = event.player.getUuid();
    const teamOptional = teamManager.getTeamForPlayerID(playerUUID);
    let memberCount = 1;
    let rewardItem = stages.coins.silver

    // Check if an item is defined as Icon (otherwise it is identical to altIcon)
    if (!event?.reward?.icon || event.reward.icon.equals(event.reward.altIcon)) {
        console.warn('Quest-Fehler: Kein Quest Reward definiert');
    } else {
        rewardItem = event.reward.icon.ingredient
    }

    if (teamOptional.isPresent()) {
        const team = teamOptional.get();

        // Mitglieder des Teams abrufen und Anzahl ermitteln
        memberCount = team.getMembers().size();

        // Anzahl der Teammitglieder ausgeben
        console.log("Quest-Erfolg: " + event.player.name.getString() + " hat erfolgreich " + memberCount + " '" + rewardItem + "' für sein Team abgeholt.");
        event.player.tell("Du hast erfolgreich " + memberCount + " Münze/n für dein Team abgeholt")
    } else {
        console.warn("Quest-Fehler: " + event.player.name.getString() + " hat nur ein '" + rewardItem + "' erhalten")
        event.player.tell("Etwas ist bei der Abgabe der Quest schiefgelaufen, bitte Kontaktiere umgehend die Orga.")
    }

    for (let n = 1; n <= memberCount; n++) {
        event.player.give(rewardItem)
    }

    let questStore = QuestBuilder.getStore(event.player, teamOptional)
    for (let task of event.reward.quest.tasks) {
        if (task.hasTag('timespan') /*&& task.type.internalId === 2*/) {
            //event.player.tell("QuestProgress Reset: " +  Date.now() / 1000)
            questStore.remove(task.codeString)
        }
    }
})
