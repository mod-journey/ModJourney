//priority 50

ServerEvents.recipes(event => {

    let ores = [
        'uranium',
        'aluminum',
        'osmium',
        'lead',
        'tin',
        'silver',
        'nickel'

    ]
    ores.forEach( ore => {
        event.forEachRecipe({ id: "industrialforegoing:laser_drill_ore/raw_materials/" + ore }, r => {
            r.json.get("output").remove("tag")
            r.json.get("output").add("item", "alltheores:raw_" + ore)
            event.custom(r.json).id(r.getId())
        })
    });


})