let item_stellaris = (event, active, debug) => {
    if (!active) return;

    let uran = [
        'stellaris:uranium_ingot',
        'stellaris:raw_uranium'
    ];

    uran.forEach(uran_tag => {
        event.removeAllTagsFrom(uran_tag);
        event.add("mod_journey:enriched/uran", uran_tag);
    });

}