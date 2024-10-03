//priority 10

ServerEvents.recipes(event => {
    let ars_weather_and_time =[
        'ars_nouveau:ritual_moonfall',
        'ars_nouveau:ritual_cloudshaping',
        'ars_nouveau:ritual_sunrise']

    let ars_biome_modification = [
        'ars_nouveau:ritual_conjure_island_plains',
        'ars_nouveau:ritual_forestation',
        'ars_nouveau:ritual_flowering',
        'ars_nouveau:ritual_conjure_island_desert',
    ]
    let ars_spell_maker = [
        'ars_nouveau:spell_turret',
        'ars_nouveau:timer_spell_turret',
        'ars_nouveau:basic_spell_turret',
        'ars_nouveau:rotating_spell_turret'
    ]
    let ars_tps_killer = [
        'ars_nouveau:storage_lectern'
    ]
    let ars_warped_scrolls = [
        'ars_nouveau:warp_scroll',
        'ars_nouveau:stable_warp_scroll',
        'ars_nouveau:portal',
        'ars_nouveau:ritual_warping'
    ]

    ars_weather_and_time.concat(ars_biome_modification, ars_spell_maker, ars_tps_killer, ars_warped_scrolls).forEach(element => {
        event.remove({output: element})
    });


    let ars_glyphen = [
        'ars_nouveau:wololo',
        'ars_nouveau:glyph_animate_block',
        'ars_nouveau:glyph_linger',
        'ars_nouveau:glyph_wall',
        'ars_nouveau:burst'
    ]

    ars_glyphen.forEach(glyphen => {
        event.remove({output: glyphen});
    });

    event.remove([
        { output: 'ars_nouveau:annotated_codex' }
    ])

    event.shapeless(
        Item.of('ars_nouveau:annotated_codex', 1),
        [
            Item.of("ars_nouveau:archmage_spell_book"),
            '5x thermal:gold_coin'
        ]
    ).id("modjourney:creative/annotated_codex")
})


