//priority 50

ServerEvents.recipes(event => {

    console.log("Start Ore-Rezept Editing: AdAstra")

    //Ersetzt die Ausgabe von Ad Astra Compressor
    event.forEachRecipe([
        {id: "ad_astra:compressing/steel_plate_from_compressing_steel_ingot"},
        {id: "ad_astra:compressing/iron_plate_from_compressing_iron_ingot"}],
        r => {

            if (r.json.get("output").get("id") + '' === '"ad_astra:iron_plate"') {
                r.json.get("output").add("id", "alltheores:iron_plate")
                event.custom(r.json).id(r.getId())
            }
            if (r.json.get("output").get("id") + '' === '"ad_astra:steel_plate"') {
                r.json.get("output").add("id", "alltheores:steel_plate")
                event.custom(r.json).id(r.getId())
            }
        }
    )

    //entfernt ad Astra Eisen und Steel Rezepte, diese sind Anderweitig abgedeckt, durch ATO
    let astra_remove = [
        "ad_astra:iron_plate",
        "ad_astra:iron_rod",
        "ad_astra:steel_plate",
        "ad_astra:steel_ingot",
        "ad_astra:steel_nugget",
        "ad_astra:steel_block"
    ]
    astra_remove.forEach(element => {
        event.remove({ output: element })
    });

})