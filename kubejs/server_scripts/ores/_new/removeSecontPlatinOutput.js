ServerEvents.recipes(event => {
    let secondNickelIDs = [
        "immersiveengineering:crusher/ore_nickel",
        "alltheores:sag_milling/nickel/raw",
        "alltheores:crusher/nickel/from_raw_block",
        "alltheores:crusher/nickel/from_ore",
        "alltheores:crusher/nickel/from_raw"
    ]
    secondNickelIDs.forEach(recipe_id => {
        event.forEachRecipe({ id: recipe_id }, r => {

            if (r.json.has("secondaries")) {
                console.log("davor: " + r.json)
                r.json.remove("secondaries")
                event.custom(r.json).id(r.getId())



                console.log("danach: " + r.json)
            }
            if (r.json.has("outputs")) {
                event.remove(r.getId())
            }
        })
    })

})