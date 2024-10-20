ServerEvents.recipes(event => {

    // Entfernen der 
    event.remove({output: Item.of('aether:ice_ring', '{Damage:0}')})
    event.remove({output: Item.of('aether:ice_pendant', '{Damage:0}')})

})
