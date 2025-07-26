//priority 10


let add_industrial_laser_fluidLaser = (event, active, debug) => {
    if (!active) return;

        event.custom({
        type: "industrialforegoing:laser_drill_fluid",
        catalyst: {
            item: "industrialforegoing:black_laser_lens"
        },
        entity: "minecraft:empty",
        output: {
            amount: 10,
            id: "stellaris:oil"
        },
        rarity: [
            {
                biome_filter: {
                    blacklist: [],
                    whitelist: [
                        "c:is_ocean"
                    ]
                },
                depth_max: 64,
                depth_min: 20,
                dimension_filter: {
                    blacklist: [],
                    whitelist: []
                },
                weight: 8
            }
        ]
    }).id("mod_journey:fluid_laser/oil")

}