// priority: 100

let main_tags = false;

while (main_tags) {
    ServerEvents.tags('item', event => {

        ores_ad_astra_tag(event)
        //ores_meka_tag(event)
        ores_immersive_tag(event)
        ores_thermal_tag(event)
        ores_industrial_tag(event)
        thermal_casts(event)
        ato_tags(event)
        tag_event_mj_scrolls(event)

    })
}