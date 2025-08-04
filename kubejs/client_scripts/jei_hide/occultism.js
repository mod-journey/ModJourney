let hide_occultism = (event, active, debug) => {
    if (!active) return;

    let hide_item = [
        "occultism:ritual_dummy/summon_djinni_clear_weather",
        "occultism:ritual_dummy/summon_djinni_night_time",
        "occultism:ritual_dummy/summon_djinni_day_time"
    ]

    hide_item.forEach(hide_items => {
        event.remove(hide_items)
    });

}