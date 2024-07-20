// priority: 95

// In diesem Skript werden Plates, Rods und Gears auf ATO vereinheitlicht.
// Craftingrezepte mittels Craftingfeld werden entfernt. siehe ./remove.js
// Alle weiteren sind in den Pressen aus Thermal und Immersive herstellbar.

ServerEvents.recipes(event => {

    //Bezug aus helperfunctions.js
    advanced_atos.forEach(element => {
      thermal_presse(
        "forge:ingots/" + element, 1,           //Input Item, Count
        'immersiveengineering:mold_rod',        //Second Input: Mold
        "alltheores:" + element + "_rod",       //result Item
        "thermal:ingots_into_rods/" + element   //Recipe ID, only a-z and _ and / and :
      )
      thermal_presse(
        "forge:ingots/" + element, 1,
        "immersiveengineering:mold_plate",
        "alltheores:" + element + "_plate",
        "thermal:ingots_into_plates/" + element
      )
    });

  var change_thermal_press = (werkstoff) => {
    advanced_atos.forEach(element => {
        event.forEachRecipe({type: 'thermal:press', id: "thermal:machines/press/press_" + element + "_ingot_to_" + werkstoff}, r => {
          let json = r.json;
          let output = r.json.get("result").get(0)
          output.add( "item", 'alltheores:' + element + '_' + werkstoff)
          event.custom(r.json).id(r.getId())
        });
    });
  };

  change_thermal_press("gear");
  change_thermal_press("plate");


  var thermal_smelter = (werkstoff) => {
    advanced_atos.splice(-3)            //Test

    advanced_atos.forEach(element => {
      let smelter1 = "thermal:machines/smelter/smelter_"
      let smelter2 = "_plate_to_"

      event.forEachRecipe({id: smelter1 + element + smelter2 + werkstoff}, r => {
        let json = r.json
        let output = r.json.get("result").get(0)
        output.add("item", "alltheores:" + element + "_" + werkstoff)
        event.custom(r.json).id(r.getId())
      });
    });
  }

  var thermal_smelter2 = (werkstoff_input, werkstoff_output) => {
    advanced_atos.forEach(element => {
      event.forEachRecipe({id: "thermal:machines/smelter/smelter_" + element + "_" + werkstoff_input}, r => {
        let json = r.json
        let output = r.json.get("result").get(0)
        output.add("item", "alltheores:" + element + "_" + werkstoff_output)
        event.custom(r.json).id(r.getId())
      });
    });
  }

  var thermal_smelter3 = (werkstoff_input, werkstoff_output) => {
    advanced_atos.forEach(element => {
      event.forEachRecipe({id: "thermal:machines/smelter/smelter_" + werkstoff_input + "_" + element}, r => {
        let json = r.json
        let output = r.json.get("result").get(0)
        output.add("item", "alltheores:" + element + "_" + werkstoff_output)
        event.custom(r.json).id(r.getId())
      });
    });
  }
  console.log(advanced_atos)

  thermal_smelter("ingot");
  thermal_smelter2("dust", "ingot");
  thermal_smelter3("alloy", "ingot")


})
