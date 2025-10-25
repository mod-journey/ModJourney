let add_immersive_excavator = (event, active, debug) => {
    if (!active) return;
    event.forEachRecipe({ type: "immersiveengineering:mineral_mix" }, r => {
        let dim = r.json.get("biome_predicates")
        if (dim.get(0).getAsString().contains("minecraft:is_overworld")) {
            dim.get(0)['add(com.google.gson.JsonElement)']("mod_journey:farmworld")
            event.custom(r.json).id(r.getId())
        }
    });
};
