//priority 10

let ores_immersive_tag = (event) => {

    let immersive_ore = [
        'aluminum',
        'lead',
        'silver',
        'nickel',
        'uranium'
    ];


    let immersive_alloy = [
        'constantan',
        'electrum',
        'steel'
    ];

    let immersive_vanilla = [
        "gold",
        "copper",
        "iron"
    ]

    immersive_ore.concat(immersive_alloy).forEach(name => {
        add_removeTag( event, 'immersiveengineering:nugget_' + name )
        add_removeTag( event, 'immersiveengineering:storage_' + name )
        add_removeTag( event, 'immersiveengineering:dust_' + name )
        add_removeTag( event, 'immersiveengineering:ingot_' + name )
        add_removeTag( event, 'immersiveengineering:plate_' + name )
    });

    immersive_ore.forEach(name => {
        add_removeTag( event, 'immersiveengineering:ore_' + name )
        add_removeTag( event, 'immersiveengineering:deepslate_ore_' + name )
        add_removeTag( event, 'immersiveengineering:raw_' + name )
        add_removeTag( event, 'immersiveengineering:raw_block_' + name )
    });

    immersive_vanilla.forEach(name => {
        add_removeTag(event, 'immersiveengineering:plate_' + name)
        add_removeTag(event, 'immersiveengineering:dust_' + name )
    });

}