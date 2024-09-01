//priority 10

let ores_meka_tag = (event)  => {


    let meka_ores = [
        'osmium',
        'tin',
        'lead',
        'uranium'
    ]

    let meka_alloys = [
        'bronze',
        'steel'
    ]

    let meka_vanilla = [
        'gold',
        'iron',
        'copper',
        'diamond'
    ]

    meka_ores.concat(meka_alloys).forEach(name => {
        add_removeTag( event, 'mekanism:nugget_' + name )
        add_removeTag( event, 'mekanism:block_' + name )
        add_removeTag( event, 'mekanism:dust_' + name )
        add_removeTag( event, 'mekanism:ingot_' + name )
    });

    meka_ores.forEach(name => {
        add_removeTag( event, 'mekanism:block_raw_' + name )
        add_removeTag( event, 'mekanism:deepslate_' + name + '_ore')
        add_removeTag( event, 'mekanism:' + name + '_ore')
        add_removeTag( event, 'mekanism:raw_' + name)
    });

    meka_vanilla.forEach(name => {
        add_removeTag(event, 'mekanism:dust_' + name )
    });

    meka_ores.concat("coppper").forEach(name => {
        add_removeTag(event,'mekanism:crystal_' + name )
        add_removeTag(event,'mekanism:shard_' + name )
        add_removeTag(event,'mekanism:dirty_dust_' + name )
        add_removeTag(event,'mekanism:clump_' + name )
    });
}