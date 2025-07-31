let remove_natureAura = (event, active, debug) => {
    if (!active) return;

    let removeItem = [
        'naturesaura:snow_creator',
        'naturesaura:dimension_rail_overworld',
        'naturesaura:dimension_rail_nether',
        'naturesaura:dimension_rail_end',
        'naturesaura:chunk_loader',
        'naturesaura:clock_hand',
        'naturesaura:time_changer',
        'naturesaura:weather_changer',
        'naturesaura:placer'
    ]

    removeItem.forEach(removeItems => {
        event.remove({ output: removeItems })
    });
}