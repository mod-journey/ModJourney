//priority 0

let itemcollector_gated = (event, active, debug) => {
    if (!active) return;

    console.log('Ändern der Gated Item Collector Items')

    event.replaceInput(
        { id: 'itemcollectors:basic_collector' },
        'minecraft:obsidian',
        stages.stage1.core
    )
}
