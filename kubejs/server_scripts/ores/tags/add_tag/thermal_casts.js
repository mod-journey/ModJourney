let thermal_casts = (event) => {

    let molds = [
        'immersiveengineering:mold_plate',
        'immersiveengineering:mold_gear',
        'immersiveengineering:mold_rod',
        'immersiveengineering:mold_bullet_casing',
        'immersiveengineering:mold_wire',
        'immersiveengineering:mold_packing_4',
        'immersiveengineering:mold_packing_9',
        'immersiveengineering:mold_unpacking'
    ]


    molds.forEach(mold => {
        event.add("thermal:crafting/dies", mold)
        // this tag prevents the mod to be consumed in recipes
        event.add("thermal:crafting/casts", mold)
    });


}