BlockEvents.broken(event => {

    if (event.player.stages.has("spawn")) {
        if (!event.player.stages.has("admin")) {
            if (!event.player.stages.has("playershop")) {
                event.cancel()
            }
        }
    }

})