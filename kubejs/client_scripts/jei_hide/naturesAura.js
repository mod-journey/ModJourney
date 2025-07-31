let hideNaturesAura = (event, active, debug) => {
    if (!active) return;

    let hideItem = [
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

    hideItem.forEach(hideItems => {
        event.remove(hideItems)
    });
}