//priority: 0

let remove_botania = event => {

    // Linsen Botania
    let lens = [
        'botania:lens_explosive',
        'botania:lens_piston',
        'botania:lens_weight',
        'botania:lens_mine'
    ]

    // Funktionsaufruf zum entfernen der Linsen
    lens.forEach(element => {
        event.remove({ output: element});
    });

    // Staebe Botania
    let rods = [
        'botania:terraform_rod',
        'botania:exchange_rod',
        'botania:water_rod'
    ]

    rods.forEach(element => {
        event.remove({output: element})
    });

    // Enfernen der Laputa Shard
    event.remove({output: 'botania:laputa_shard'})
};