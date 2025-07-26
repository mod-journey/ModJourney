//priority 50
let tag_event_mj_scrolls = (event, active, debug) => {
    if (!active) return;
        for (let i = 1; i <= 8; i++) {
            event.add('mod_journey:rolls_crafting', "mod_journey:scroll" + i)
            event.add('mod_journey:rolls_questbook', "mod_journey:scroll" + i)
        }
        event.add('mod_journey:rolls_questbook', "mod_journey:scroll9")
}
