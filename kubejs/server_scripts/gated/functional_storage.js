let funtionalStorage_gated = (event, active, debug) => {
    if (!active) return;

    event.replaceInput(
        { id: "functionalstorage:water_generator_upgrade" },
        "minecraft:bucket",
        global.mjConfig.stages.stage2.core
    )

    event.replaceInput(
        { id: "functionalstorage:dripping_upgrade" },
        "minecraft:cauldron",
        global.mjConfig.stages.stage2.core
    )

    event.remove({id: "functionalstorage:obsidian_upgrade"})
    event.shapeless(
        Item.of("functionalstorage:obsidian_upgrade", 1),
        [
            "4x functionalstorage:dripping_upgrade",
            `1x ${global.mjConfig.stages.stage2.core}`,
            "4x functionalstorage:water_generator_upgrade"
        ]
    )
}