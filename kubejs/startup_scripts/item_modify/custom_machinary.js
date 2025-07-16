//priority: 0

let item_modify_custommachinary = (event, active, debug) => {
    if (!active) reutrn;

    event.modify("immersiveengineering:mold_gear", item => {
        item.maxStackSize = 3
    })

}

