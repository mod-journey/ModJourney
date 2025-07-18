// priority: 0

let item_modify_mobgrinding = (event, active, debug) => {
    if (!active) return;

    event.modify('mob_grinding_utils:saw_upgrade_looting', item => {
        item.maxStackSize = 3
    })

    event.modify('mob_grinding_utils:saw_upgrade_beheading', item => {
        item.maxStackSize = 1
    })

};