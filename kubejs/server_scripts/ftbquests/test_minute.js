//priority 10

FTBQuestsEvents.customTask('24A0B0ED3ABF66A9', event => {
    event.maxProgress = 60 // 4h max

    event.setCheckTimer(20) // Timer wird jede  Minuten geprueft

    event.setCheck((task) => {
        task.progress++ // Adds progress to the quest.
    })
})
