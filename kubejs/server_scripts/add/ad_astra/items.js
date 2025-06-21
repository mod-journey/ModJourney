//priority: 0

let add_adastra_items = (event,active,debug) => {
    if (!active) return;

    event.replaceInput({id: `ad_astra:recipes/astrodux`},
        `ad_astra:steel_ingot`,
        `alltheores:steel_ingot`
    )
}