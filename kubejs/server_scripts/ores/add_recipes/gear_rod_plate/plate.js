//priority 50


let change_plates = (event) => {

    //Löschen von Rezepten
        ato.alloy.concat(ato.metall,ato.vanilla).forEach(metal => {
            event.remove({output: `#forge:plates/${metal}`})    //entfernen aller alten Zahnrad Rezepte
            event.remove({id: "thermal:machines/press/press_" + metal + "_ingot_to_plate"}) //entfernen von der Thermal Extra-Wurst
        });

    //Erstellen neuer Zahnrad Rezepte
        // nach Tag: ingots/storage
        ato.alloy.concat(ato.metall,ato.vanilla).forEach(metal => {
            thermal_press(event,`forge:ingots/${metal}`,1,`alltheores:${metal}_plate`,1,ato.mold.plate,`thermal/plate/${metal}`)
            immersive_press(event,`forge:ingots/${metal}`,1,`alltheores:${metal}_plate`,1,2400,ato.mold.plate,`immersive/plate/${metal}`)
            plate_shapeless(event,`forge:ingots/${metal}`,2,`alltheores:${metal}_plate`,1,`shapeless/plate/${metal}`)
        });

        //nach Tag: gems/storage
        ato.gems.forEach(metal => {
            thermal_press(event,`forge:gems/${metal}`,4,`alltheores:${metal}_plate`,1,ato.mold.plate,`plate/${metal}`)
            immersive_press(event,`forge:ingots/${metal}`,1,`alltheores:${metal}_plate`,1,2400,ato.mold.plate,`immersive/plate/${metal}`)
            plate_shapeless(event,`forge:gems/${metal}`,2,`alltheores:${metal}_plate`,1,`shapeless/plate/${metal}`)
        });

}