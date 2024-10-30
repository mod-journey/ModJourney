ServerEvents.commandRegistry(e => {
  const { commands: Commands, arguments: Arguments } = e

  e.register(Commands.literal('modjourney')
    .requires(s => s.hasPermission(2))
    // Unterbefehle
    .then(Commands.literal('survival')
      .requires(s => s.hasPermission(2))
      .executes(c => setGamemode(c.source.player, 'survival'))
    )
    .then(Commands.literal('spectator')
      .requires(s => s.hasPermission(2))
      .executes(c => setGamemode(c.source.player, 'spectator'))
    )
    .then(Commands.literal('event')
      .requires(s => s.hasPermission(2))
      .executes(c => events(c.source.player))
      .then(Commands.argument('target', Arguments.PLAYER.create(e))
        .requires(s => s.hasPermission(2))
        .executes(c => events(
          Arguments.PLAYER.getResult(c, 'target')
        ))
      )
    )
  )

  // Helper-Funktion zum Wechseln des Spielmodus
  // In Line 20 und 26 ggf. noch ein Objekt für das Tagsystem einbauen.
  let setGamemode = (player, mode) => {
    if (mode === 'survival') {
      Utils.server.runCommandSilent(`gamemode survival ${player.name.string}`)
      Utils.server.runCommandSilent(`tell @a[tag=admin_rang] §3${player.name.string}§r befindet sich nun im §3Survival Modus§r.`)
      player.tell("Du befindest dich nun im §3Survival Modus§r")
      console.log(`"${player.name.string}" hat seinen Spielmodus zu Survival geändert`)
    }
    else if (mode === 'spectator') {
      Utils.server.runCommandSilent(`gamemode spectator ${player.name.string}`)
      Utils.server.runCommandSilent(`tell @a[tag=admin_rang] §3${player.name.string}§r befindet sich nun im §2Spectator Modus§r.`)
      player.tell("Du befindest dich nun im §2Spectator Modus§r")
      console.log(`"${player.name.string}" hat seinen Spielmodus zu Spectator geändert`)
    }
    return 1
  }

  let events = (player) => {
    if (player.stages.has("event")) {
      player.stages.remove("event")
      player.tell("Du wurdest erfolgreich vom Event abgemeldet.")
    } else {
      player.stages.add("event")
      player.tell("Du wurdest erfolgreich zum Event angemeldet.")
    }
    return 1
  }
})