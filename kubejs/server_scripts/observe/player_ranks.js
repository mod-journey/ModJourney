const ftbTimeRanks = [
    'weekling',
    'double-weekling',
    'triple-weekling',
    'monthling'
]

/**
 * Checks if player are missing any of the time ranks and add them
 */
PlayerEvents.loggedIn(e => {
    e.entity.tell(`Welcome ${e.entity.name.string}`);

    ftbTimeRanks.forEach(rank => {

        // run if player does not have the rang
        if ( !e.entity.getTags().contains(rank) ) {
            Utils.server.runCommandSilent(`ftbranks add ${e.entity.name.string} ${rank}`);

            // Utils.server.runCommandSilent(`tag ${e.entity.name.string} add ${rang}`)
            e.entity.addTag(rank)
            console.log(`Added rank ${rank} to player ${e.entity.name.string}`);
        }

    })

})