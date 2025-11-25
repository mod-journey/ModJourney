let hide_arsElemental = (event, active, debug) => {
    if (!active) return;

    event.remove( "ars_elemental:ritual_archwood_forestation" )
    event.remove( "ars_elemental:ritual_archwood_forest" )
}