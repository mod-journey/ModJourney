//priority 0

let remove_apotheosis = (event, active, debug) => {
    if (!active) return;

    // Entfernen des Augmenting Table
    event.remove({ output: 'apotheosis:augmenting_table' })

    //entfernen der Spawnermodule Ignore Players.
    let spawn_modifiers = [
        "apothic_spawners:spawner_modifiers/ignore_players",
        "apothic_spawners:spawner_modifiers/_inverse/ignore_players",
    ];

    spawn_modifiers.forEach(element => {
        event.remove({ id: element });
    });

    //modify the max Spawn Count
    apothSpawnerBuilder("spawn_count", "minecraft:fermented_spider_eye", false)
        .value(2)
        .max(8)
        .createRecipe(event)

    //modify the minimum Delay between spawner waves
    apothSpawnerBuilder("min_delay", "minecraft:sugar", false)
        .value(-5)
        .min(100)
        .createRecipe(event)

    apothSpawnerBuilder("min_delay", "minecraft:sugar", true)
        .value(5)
        .max(3600)
        .createRecipe(event)

    //modify the maximum between spawner waves
    apothSpawnerBuilder("max_delay", "minecraft:clock", false)
        .value(-5)
        .min(200)
        .createRecipe(event)

    apothSpawnerBuilder("max_delay", "minecraft:clock", true)
        .value(5)
        .max(7200)
        .createRecipe(event)

    //modify how much same entitis in spawn range, to disable spawning.
    apothSpawnerBuilder("max_nearby_entities", "minecraft:ghast_tear", false)
        .max(16)
        .value(2)
        .createRecipe(event)
};