let remove_occultism = (event, active, debug) => {
    if (!active) return;

    event.remove([
        { id: "occultism:ritual/summon_djinni_night_time" },
        { id: "occultism:ritual/summon_djinni_day_time" },
        { id: "occultism:ritual/summon_djinni_clear_weather" }
    ])

    event.forEachRecipe({ mod: "occultism", type: "occultism:miner" }, r => {

        let output = r.json.get("result").get("tag");
        if (output !== null) {

            let remove_them_all = [
                "c:storage_blocks/raw_platinum",
                "c:ores/platinum",
                "c:ores/iridium",
                "c:storage_blocks/raw_iridium",
                "c:storage_blocks/raw_osmium",
                "c:ores/osmium"
            ]

            remove_them_all.forEach(ore_to_remove => {
                if (output.getAsString().contains(ore_to_remove)) {
                    event.remove(r.getId())
                }
            });
        }
    });
}

