let item_stellaris = (event, active, debug) => {
    if (!active) return;

    let uran = [
        'stellaris:uranium_ingot',
        'stellaris:raw_uranium'
    ];

    let sand = [
        'stellaris:mars_sand',
        'stellaris:moon_sand',
        'stellaris:venus_sand',
    ];

    uran.forEach(uran_tag => {
        event.removeAllTagsFrom(uran_tag);
        event.add("mod_journey:enriched/uran", uran_tag);
    });

    event.removeAllTagsFrom("stellaris:steel_block")

    sand.forEach(sand_block => {
        event.add('minecraft:sand', sand_block);
        event.add('c:sands', sand_block);
        event.add('minecraft:smelts_to_glass', sand_block);
    });
}