//priority 10

FTBQuestsEvents.customTask('30D9E8CD52F44C9A', event => {
    event.maxProgress = 240 // 4h max

    event.setCheckTimer(1200) // Timer wird jede  Minuten geprueft

    event.setCheck((task) => {
        task.progress++ // Adds progress to the quest.
    })
})
