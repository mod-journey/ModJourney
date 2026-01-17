ItemEvents.entityInteracted("cataclysm:infernal_forge", event => {

    let op = event.player.getUsername().toString()
    let banned = event.getTarget().getUsername().toString()

    if (!event.player.stages.has("admin")) return;
    if (event.target.isPlayer()) {
        event.server.runCommand(`/tellraw @a [{"text":"Der Operator ${op} hat ${banned} mit dem ","color":"white","bold":false},{ "text": "Bannhammer ", "color": "dark_red", "bold": true },{"text":"erschlagen!","color":"white","bold":false}]`)
        event.server.runCommand(`/ban ${banned}`)
    }
})