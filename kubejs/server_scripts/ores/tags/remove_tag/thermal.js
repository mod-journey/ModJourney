//priority 10

let ores_thermal_tag = (event) => {

    let thermal_ores = [
        'tin',
        'lead',
        'silver',
        'nickel'
    ]

    let thermal_alloys = [
        'bronze',
        'electrum',
        'invar',
        'constantan',
        'signalum',
        'lumium',
        'enderium'
    ]

    let thermal_vanilla = [
        'gold',
        'iron',
        'copper'
    ]


    thermal_ores.concat(thermal_alloys).forEach(name => {
        add_removeTag(event, 'thermal:' + name + '_nugget')
        add_removeTag(event, 'thermal:' + name + '_gear')
        add_removeTag(event, 'thermal:' + name + '_plate')
        add_removeTag(event, 'thermal:' + name + '_block')
        add_removeTag(event, 'thermal:' + name + '_dust')
        add_removeTag(event, 'thermal:' + name + '_ingot')
    });


    thermal_ores.forEach(name => {
        add_removeTag(event, 'thermal:raw_' + name + '_block')
        add_removeTag(event, 'thermal:deepslate_' + name + '_ore')
        add_removeTag(event, 'thermal:' + name + '_ore')
    });

    thermal_vanilla.concat("diamond").forEach(name => {
        add_removeTag(event, `thermal:${name}_gear`)
        add_removeTag(event, `thermal:${name}_plate`)
        add_removeTag(event, `thermal:${name}_dust`)
    });
}