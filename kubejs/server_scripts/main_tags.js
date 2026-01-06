// priority: 100

let item_tags = true;
let fluid_tags = true;

if (item_tags) {
    ServerEvents.tags('item', event => {

        tag_event_mj_scrolls(event, true)
        extreme_reactor_tag(event, true)
        tag_fuer_event(event, true)
        item_stellaris(event, true)
        naturesAura_tags(event, true)
        tagsForCustomMachines(event, true)

    })

    if (fluid_tags) {

        ServerEvents.tags("fluid", event => {

            fluid_stellaris(event, true)
        })
    }
}