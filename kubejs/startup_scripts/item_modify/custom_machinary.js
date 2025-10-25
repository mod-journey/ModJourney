//priority: 0

let item_modify_custommachinary = (event, active, debug) => {
    if (!active) reutrn;

    event.modify("immersiveengineering:mold_gear", item => {
        item.maxStackSize = 3
    })
    event.modify("immersiveengineering:mold_wire", item => {
        item.maxStackSize = 3
    })
    event.modify("immersiveengineering:mold_plate", item => {
        item.maxStackSize = 3
    })
    event.modify("immersiveengineering:mold_rod", item => {
        item.maxStackSize = 3
    })

}

