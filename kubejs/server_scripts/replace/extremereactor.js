//priority 10

/**
 * Dieses Skript wandelt die Eingaben im Fluidizer auf den Tag forge:uran um. Yellorium ist gleichzusetzen mit Uran.
 */
ServerEvents.recipes(event => {

    event.replaceInput(
        {input: "bigreactors:yellorium_ingot"},
        "bigreactors:yellorium_ingot",
        "#forge:ingots/uranium"
    )

    event.forEachRecipe([{type: 'bigreactors:fluidizersolid'}, {type: 'bigreactors:fluidizersolidmixing'}], r => {

        if (r.json.get("type") + '' === '"bigreactors:fluidizersolid"') {
            if (r.json.get("ingredient").get("ingredient").get("item") + '' === '"bigreactors:yellorium_block"') {
                r.json.get("ingredient").get("ingredient").remove("item")
                r.json.get("ingredient").get("ingredient").add("tag", "forge:storage_blocks/uranium")
                event.custom(r.json).id(r.getId())
            }

            if (r.json.get("ingredient").get("ingredient").get("item") + '' === '"bigreactors:yellorium_ingot"') {
                r.json.get("ingredient").get("ingredient").remove("item")
                r.json.get("ingredient").get("ingredient").add("tag", "forge:ingots/uranium")
                event.custom(r.json).id(r.getId())
            }
        }

        if (r.json.get("type") + '' === '"bigreactors:fluidizersolidmixing"') {
            for (let i = 1; i <= 2; i++) {
                if (r.json.get(`ingredient${i}`).get("ingredient").get("item") + '' === '"bigreactors:yellorium_block"') {
                    r.json.get(`ingredient${i}`).get("ingredient").remove("item")
                    r.json.get(`ingredient${i}`).get("ingredient").add("tag", "forge:storage_blocks/uranium")
                    event.custom(r.json).id(r.getId())
                    console.log(r.json)
                }
            }

            for (let i = 1; i <= 2; i++) {
                if (r.json.get(`ingredient${i}`).get("ingredient").get("item") + '' === '"bigreactors:yellorium_ingot"') {
                    r.json.get(`ingredient${i}`).get("ingredient").remove("item")
                    r.json.get(`ingredient${i}`).get("ingredient").add("tag", "forge:ingots/uranium")
                    event.custom(r.json).id(r.getId())
                    console.log(r.json)
                }
            }
        }
    })
})