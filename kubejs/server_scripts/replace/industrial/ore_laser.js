ServerEvents.recipes(event => {
    event.forEachRecipe(
        { mod: "industrialforegoing", type: "industrialforegoing:laser_drill_ore" },
        r => {
            let output = r.json.get("output");
            let tag = output.get("tag");

            if (tag === null) return;    //Wenn im Ouput kein tag output, skippe.

            if (tag.getAsString().includes("c:raw_materials/iridium")) { //Suchfilter
                let rarityArray = r.json.get("rarity"); //gehe in den key (Ab hier valides Array)

                for (let i = 0; i < rarityArray.size(); i++) {
                    let entry = rarityArray.get(i);     //holen der einzelnen Index vom array

                    let newDimensionFilter = JSON.parse('{"whitelist": ["stellaris:venus"], "blacklist": []}'); //objekt welches ins array neu eingetragen wird
                    entry.add("dimension_filter", newDimensionFilter);  //bauen des neuen objektes
                    rarityArray.set(i, entry);  //füge das neue objekt an index des zählers
                }
                r.json.add("rarity", rarityArray);  //Füge dem ursprungsobjekt das eben gebaute Objekt hinzu.
                //event.custom(r.json).id(r.getId()); //Überschreibe das alte JSON mit der gleichen ID, quasi überschreibe
            }

            if (tag.getAsString().includes("c:raw_materials/platinum")) {
                let rarityArray = r.json.get("rarity");

                for (let i = 0; i < rarityArray.size(); i++) {
                    let entry = rarityArray.get(i);

                    let newDimensionFilter = JSON.parse('{"whitelist": ["stellaris:mars"], "blacklist": []}');
                    entry.add("dimension_filter", newDimensionFilter);
                    rarityArray.set(i, entry);
                }
                r.json.add("rarity", rarityArray);
                //event.custom(r.json).id(r.getId());
            }

            if (tag.getAsString().includes("c:raw_materials/osmium")) {
                let rarityArray = r.json.get("rarity");

                for (let i = 0; i < rarityArray.size(); i++) {
                    let entry = rarityArray.get(i);

                    let newDimensionFilter = JSON.parse('{"whitelist": ["stellaris:mercury"], "blacklist": []}');
                    entry.add("dimension_filter", newDimensionFilter);
                    rarityArray.set(i, entry);
                }
                r.json.add("rarity", rarityArray);
                //event.custom(r.json).id(r.getId());
            }
        }
    );
});