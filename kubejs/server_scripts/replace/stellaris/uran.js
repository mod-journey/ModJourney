let replace_stellaris_uran = (event, active, debug) => {
    if (!active) return;

    let uran = [
        'stellaris:raw_uranium_block',
        'stellaris:uranium_block',
        'stellaris:mercury_uranium_ore',
        'stellaris:uranium_ingot',
        'stellaris:raw_uranium'

    ]

    uran.forEach(uran_remove => {
        event.remove({ mod: "stellaris", output: uran_remove })
    });

    event.shaped(Item.of("stellaris:raw_uranium", 1), [
        'ABA',
        'ACA',
        'ACA'
    ], {
        A: '#c:glass_blocks',
        B: '#c:plates/steel',
        C: '#c:ingots/uranium'

    }).id("mod_journey:misc/enriched_uranium_shaped")

    event.smelting('1x stellaris:uranium_ingot', 'stellaris:raw_uranium',0.5,600)
    event.blasting('1x stellaris:uranium_ingot', 'stellaris:raw_uranium',0.25,300)

}