//priority 50


let change_gears = (event) => {

    //entfernen aller alten Zahnrad Rezepte
        event.remove({output: "#forge:gears", not:{mod: "enderio"}})
    //Initalisieren für alle Rezepte, welche nicht auf den Standartweg zu löschen sind.
        ato.alloy.concat(ato.metall,ato.vanilla).forEach(metal => {
            event.remove({id: "thermal:machines/press/press_" + metal + "_ingot_to_gear"})
        });

    //Erstellen neuer Zahnrad Rezepte
        // nach Tag: ingots/storage
        ato.alloy.concat(ato.metall,ato.vanilla).forEach(metal => {
            thermal_press(event,`forge:ingots/${metal}`,4,`alltheores:${metal}_gear`,1,ato.mold.gear,`thermal/gear/${metal}`)
            immersive_press(event,`forge:storage_blocks/${metal}`,1,`alltheores:${metal}_gear`,2,4800,ato.mold.gear,`immersive/gear/${metal}`)
            gear_shaped(event,`forge:ingots/${metal}`,`alltheores:${metal}_gear`,1,`shaped/gear/${metal}`)
        });

        //nach Tag: gems/storage
        ato.gems.forEach(metal => {
            thermal_press(event,`forge:gems/${metal}`,4,`alltheores:${metal}_gear`,1,ato.mold.gear,`gear/${metal}`)
            immersive_press(event,`forge:storage_blocks/${metal}`,1,`alltheores:${metal}_gear`,2,4800,ato.mold.gear,`immersive/gear/${metal}`)
            gear_shaped(event,`forge:gems/${metal}`,`alltheores:${metal}_gear`,1,`shaped/gear/${metal}`)
        });
}