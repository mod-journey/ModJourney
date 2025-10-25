let hide_occultism = (event, active, debug) => {
    if (!active) return;

    let hide_item = [
        "occultism:ritual_dummy/summon_djinni_clear_weather",
        "occultism:ritual_dummy/summon_djinni_night_time",
        "occultism:ritual_dummy/summon_djinni_day_time",
        'occultism:ritual_dummy/summon_afrit_rain_weather',
        'occultism:ritual_dummy/summon_afrit_thunder_weather',
        'occultism:ritual_dummy/misc_trinity_gem',
        'occultism:trinity_gem'
    ]

    hide_item.forEach(hide_items => {
        event.remove(hide_items)
    });

}