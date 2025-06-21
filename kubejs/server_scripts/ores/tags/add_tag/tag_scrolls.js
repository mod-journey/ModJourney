//priority 50
/*
This File must be move in a future commit, when the tag part in main Process is integreated.
*/

let tag_event_mj_scrolls = event => {
    ServerEvents.tags('item', event => {
        for (let i = 1; i <= 8; i++) {
            event.add('modjourney:rolls_crafting', "mod_journey:scroll" + i)
            event.add('modjourney:rolls_questbook', "mod_journey:scroll" + i)
        }
        event.add('modjourney:rolls_questbook', "mod_journey:scroll9")
    })
}
