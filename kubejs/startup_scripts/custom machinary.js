// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded startup example script)')

ItemEvents.modification(event => {

    event.modify("immersiveengineering:mold_gear", item => {
        item.maxStackSize = 3
    })
})

