// priority: 100

let main_tags = true;

if (main_tags) {
    ServerEvents.tags('item', event => {

        ores_ad_astra_tag(event, false)
        ores_meka_tag(event, false)
        ores_immersive_tag(event, false)
        ores_thermal_tag(event, false)
        ores_industrial_tag(event, false)
        thermal_casts(event, false)
        ato_tags(event, false)
        tag_event_mj_scrolls(event, true)
        extreme_reactor_tag(event, true)

    })
}