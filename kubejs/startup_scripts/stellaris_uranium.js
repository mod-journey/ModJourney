ItemEvents.modification(event => {

    event.modify('stellaris:uranium_ingot', item => {
        item.setItemName("Enriched Uranium")
    })

    event.modify('stellaris:raw_uranium', item => {
        item.setItemName("Enriched Raw Uranium")
    })

})