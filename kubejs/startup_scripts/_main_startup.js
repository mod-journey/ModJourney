//priority: 100

let startup = true

if (startup) {
    ItemEvents.modification(event => {
        item_modify_mobgrinding(event, true);
        item_modify_stellaris(event, true);
        item_modify_custommachinary(event, true);
    });

    StartupEvents.registry('block', event => {
        block_add(event, true);
    });

    StartupEvents.registry('item', event => {
        item_add(event, true);
    });
};



