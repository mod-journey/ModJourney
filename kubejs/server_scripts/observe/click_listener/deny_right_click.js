ItemEvents.rightClicked("stellaris:oil_bucket", event => {
    event.cancel()
})

// Don't allow to change size of other entitys
ItemEvents.entityInteracted(Item.of('shrink:shrinking_device'), event => {
    event.cancel()
})