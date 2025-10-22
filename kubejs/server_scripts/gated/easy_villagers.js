//priority 0

let easy_villagers_gated = (event, active, debug) => {
    if (!active) return;

    event.replaceInput(
        {id: "easy_villagers:iron_farm"},
        "minecraft:stone",
        stages.stage1.core
    )
}