let ato_tags = (event) => {

    let ores = [
        'copper',
        'uranium',
        'tin',
        'lead',
        'osmium'
    ]

    ores.forEach(ore => {
        event.add("mekanism:shards/" + ore, "alltheores:" + ore + "_shard")
        event.add("mekanism:clumps/" + ore, "alltheores:" + ore + "_clump")
        event.add("mekanism:crystals/" + ore, "alltheores:" + ore + "_crystal")
        event.add("mekanism:dirty_dusts/" + ore, "alltheores:" + "dirty_" + ore + "_dust")
    });

}