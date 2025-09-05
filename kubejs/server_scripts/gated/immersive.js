let immersive_gated = (event, active, debug) => {
    if (!active) return;

    // while the type is not shaped or shapless
    // "immersiveengineering:turn_and_copy"

    event.forEachRecipe({
        type: "immersiveengineering:turn_and_copy",
        output: "immersiveengineering:rs_engineering"
    }, r => {
        let replace = r.json.get("key").get("c")

        replace.remove("tag")
        replace.add("item", stages.stage1.vanilla)
        event.custom(r.json).id(r.getId())
    })
}