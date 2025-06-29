// priority: 0

let remove_ae2_portable_cell = (event, active, debug) => {
    if (!active) return;

    let portable_cell = [
        'appbot:portable_mana_storage_cell_1k',
        'appbot:portable_mana_storage_cell_4k',
        'appbot:portable_mana_storage_cell_16k',
        'appbot:portable_mana_storage_cell_64k',
        'appbot:portable_mana_storage_cell_256k',
        'ae2:portable_item_cell_4k',
        'ae2:portable_item_cell_16k',
        'ae2:portable_item_cell_64k',
        'ae2:portable_item_cell_256k',
        'ae2:portable_fluid_cell_1k',
        'ae2:portable_fluid_cell_4k',
        'ae2:portable_fluid_cell_16k',
        'ae2:portable_fluid_cell_64k',
        'ae2:portable_fluid_cell_256k',
        'appmek:portable_chemical_storage_cell_1k',
        'appmek:portable_chemical_storage_cell_4k',
        'appmek:portable_chemical_storage_cell_16k',
        'appmek:portable_chemical_storage_cell_64k',
        'appmek:portable_chemical_storage_cell_256k',
        'megacells:portable_item_cell_1m',
        'megacells:portable_item_cell_4m',
        'megacells:portable_item_cell_16m',
        'megacells:portable_item_cell_64m',
        'megacells:portable_item_cell_256m',
        'megacells:portable_fluid_cell_1m',
        'megacells:portable_fluid_cell_4m',
        'megacells:portable_fluid_cell_16m',
        'megacells:portable_fluid_cell_64m',
        'megacells:portable_fluid_cell_256m',
        'megacells:portable_mana_cell_1m',
        'megacells:portable_mana_cell_4m',
        'megacells:portable_mana_cell_16m',
        'megacells:portable_mana_cell_64m',
        'megacells:portable_mana_cell_256m',
        'megacells:portable_chemical_cell_1m',
        'megacells:portable_chemical_cell_4m',
        'megacells:portable_chemical_cell_16m',
        'megacells:portable_chemical_cell_64m',
        'megacells:portable_chemical_cell_256m'
    ]

    portable_cell.forEach((element) => {
        event.remove({
            output: element
        });
    });

};