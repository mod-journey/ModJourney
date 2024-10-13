/**
 * this script handels server side unlocking of week-ranks
 */
const weeksSinceServerStart = 0;
const ftbTimeRanks = [
    'weekling',
    'double-weekling',
    'triple-weekling',
    'monthling'
]

/**
 * Resets week ranks for player and removes tags
 * (works only for ranks defined via server command)
 *
 * @param {Internal.ServerPlayer} player
 */
function resetTimeRank(player) {
    ftbTimeRanks.forEach(rank => {
        // Only remove ranks that are assigned from server using tags
        if ( player.getTags().contains(rank) ) {
            player.tell(`Reset rank ${rank}`);
            console.log(`Reset ${rank} for player ${player.name.string}`);
            Utils.server.runCommandSilent(`ftbranks remove ${player.name.string} ${rank}`);
            player.removeTag(rank)
        }
    })

    // player.runCommand(`ftbranks list_ranks_of ${player.name.string}`)
    return 1
}

/**
 * Checks if player are missing any of the time ranks and add them
 */
PlayerEvents.loggedIn(e => {
    e.entity.tell(`Welcome ${e.entity.name.string}`);

    ftbTimeRanks.forEach((rank, i) => {
        const unlock = weeksSinceServerStart > i

        // run if player does not have the rang
        if ( unlock && !e.entity.getTags().contains(rank) ) {
            Utils.server.runCommandSilent(`ftbranks add ${e.entity.name.string} ${rank}`);

            // Utils.server.runCommandSilent(`tag ${e.entity.name.string} add ${rang}`)
            e.entity.addTag(rank)
            console.log(`Added rank ${rank} to player ${e.entity.name.string}`);
        }

    })

    // e.entity.runCommand(`ftbranks list_ranks_of ${e.entity.name.string}`)
})