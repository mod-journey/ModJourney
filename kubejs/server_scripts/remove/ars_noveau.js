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

    ars_weather_and_time.concat(ars_biome_modification, ars_spell_maker, ars_tps_killer).forEach(element => {
        event.remove({output: element})
    });

})


