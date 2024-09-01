ServerEvents.recipes(event => {
    event.forEachRecipe({ type: 'immersiveengineering:mineral_mix' }, r => {
        let dim = r.json.get("dimensions")

        //überprüfung ob Rezept in der Overworld zu finden ist, wenn ja, wird farming dim hinzugefügt.
        if ( r.json.get("dimensions").get(0).getAsString() + "" == "minecraft:overworld") {
            dim['add(com.google.gson.JsonElement)']("mod_journey:farmworld")
            event.custom(r.json).id(r.getId())
        }
    });
});
