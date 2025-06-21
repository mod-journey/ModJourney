//priority: 100

let startup = false

if (startup) {
    ItemEvents.modification(event => {
        item_modify(event);

    });
};

StartupEvents.registry('block', event => {
    block_add(event, true);
});

StartupEvents.registry('item', event => {
    item_add(event, true);
});