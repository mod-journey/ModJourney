let remove_aether = (event, active, debug) => {
    if (!active) return;
    // Entfernen der
    event.remove({output: Item.of('aether:ice_ring')})
    event.remove({output: Item.of('aether:ice_pendant')})

};
