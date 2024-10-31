ItemEvents.rightClicked("minecraft:stick", event => {
    if (event.player.stages.has("member")) {

        let stick = JsonIO.read("kubejs/data/random_fact.json")

        let random = Math.floor(Math.random() * stick.wissen.length) + 1;
        if (random <= stick.wissen.length) {
            event.player.tell("§2Random Fact:§r")
            event.player.tell(stick.wissen[random])
        }
    }
})