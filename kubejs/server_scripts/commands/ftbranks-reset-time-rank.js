/**
 * registers a custom command to reset ftb time rank for a player
 *
 * @see https://kubejs.com/wiki/tutorials/chat#command-registry-event
 */
ServerEvents.commandRegistry(e => {
    const {commands: Commands, arguments: Arguments} = e

    e.register(Commands.literal('ftbranks-reset-time-rank')
        .requires(s => s.hasPermission(2))
        .executes(resetTimeRankCommand)
    )
})

/**
 * @param {Internal.CommandContext<Internal.CommandSourceStack_>} c
 * @return number
 */
function resetTimeRankCommand(c) {
    // disable command in server console, because there is no player
    if (c.source.isPlayer()) return resetTimeRank(c.source.player)
    else {
        console.warn('This command can only be executed for players')
        return 0
    }
}