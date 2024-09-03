//priority 10

FTBQuestsEvents.customTask('51300044341BFFCC', event => {
    event.maxProgress = 1440 // 4h max

    event.setCheckTimer(18000) // Timer wird jede  Minuten geprueft

    event.setCheck((task) => {
        task.progress + 15 // Adds progress to the quest.
    })
})
