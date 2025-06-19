//priority: 100

let startup = false

while (startup) {

    StartupEvents.registry('block', event => {
        block_add(event);

    });


    StartupEvents.registry('item', event => {
        item_add(event);

    })

    ItemEvents.modification(event => {
        item_modify(event);

    });

};