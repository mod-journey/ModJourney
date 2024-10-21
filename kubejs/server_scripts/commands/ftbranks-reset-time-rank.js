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
        /*
        .then(Commands.argument('target',
            Arguments.PLAYER.create(e))
            .executes(resetTimeRankCommand)
        )
        */
    )
})

/**
 * @param {Internal.CommandContext<Internal.CommandSourceStack_>} c
 * @return number
 *
 * @todo make this function working for player as argument (e.g. pass "Arguments" from commandRegistry as second arg)
 */
function resetTimeRankCommand(c) {
    /*
    // getArguments() is not found even if it is part of the keys in "c"
    try {
        console.log(Object.keys(c))
        console.log(c.getArgument())
    } catch (e) {
        console.warn(e)
    }*/

    // disable command in server console, because there is no player
    if (c.source.isPlayer()) return resetTimeRank(c.source.player)
    else {
        console.warn('This command can only be executed for players')
        return 0
    }
}