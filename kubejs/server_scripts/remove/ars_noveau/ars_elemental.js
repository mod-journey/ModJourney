let remove_arsElemental = (event, active, debug) => {
    if (!active) return;

    event.remove([
        {id:"ars_elemental:ritual_archwood_forestation"},
        {id: "ars_elemental:ritual_archwood_forest"}
    ])
}
