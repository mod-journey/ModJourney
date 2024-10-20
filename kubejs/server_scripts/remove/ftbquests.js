ServerEvents.recipes(event => {

    //ftbquests item remove
    let ftbquests_items = [
        'ftbquests:barrier',
        'ftbquests:stage_barrier',
        'ftbquests:detector',
        'ftbquests:loot_crate_opener',
        'ftbquests:screen_1',
        'ftbquests:screen_3',
        'ftbquests:screen_5',
        'ftbquests:screen_7',
        'ftbquests:task_screen_configurator',
       ]
    ftbquests_items.forEach(element => {
        event.remove({ output: element});
    });
})