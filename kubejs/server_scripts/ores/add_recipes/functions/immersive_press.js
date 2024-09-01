//priority 85

/**
    * @param {var} event base event handler. Must be written, so the Method not work.
    * @param {String} input as Tag eg. forge:ingots/bronze
    * @param {Int} input_count as Int eg. 4
    * @param {String} output as ID. eg. thermal:bronze_ingot
    * @param {Int} output_count as Int eg. 2
    * @param {Int} energy_cost base energy amount value in RF.
    * @param {String} mold as ID eg. immersiveengineering:mold_gear
    * @param {String} ID eg. gear/bronze
    * @example thermal_press( "forge:ingots/bronze" , 2 , "thermal:bronze_gear" , 2, 2400 , "immersiveengineering:mold_gear" , "gear/bronze" )
 */
var immersive_press = (event,input,input_count,output,output_count,energy_cost,mold,ID) => {
    event.custom({
        "type": "immersiveengineering:metal_press",
        "conditions": [{
            "type": "forge:not",
            "value": {
                "type": "forge:tag_empty",
                "tag":  input
            }
        }],
        "energy": energy_cost,
        "input": {
            "base_ingredient": {
                "tag": input
            },
            "count": input_count
        },
        "mold": mold,
        "result": {
            "base_ingredient": {
              "item": output
            },
            "count": output_count
          }
    }).id("mod_journey:" + ID)
}