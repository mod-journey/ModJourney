//priority 85
/**
    * @param {var} event base event handler. Must be written, so the Method not work.
    * @param {String} input as Tag eg. forge:ingots/bronze
    * @param {Int} input_count as Int eg. 4
    * @param {String} output as ID. eg. thermal:bronze_ingot
    * @param {Int} output_count as Int eg. 2
    * @param {String} mold as ID eg. immersiveengineering:mold_gear
    * @param {String} ID eg. gear/bronze
    * @example thermal_press( "forge:ingots/bronze" , 2 , "thermal:bronze_gear" , 2 , "immersiveengineering:mold_gear" , "gear/bronze" )
*/

var thermal_press = (event,input,input_count,output,output_count,mold,ID) => {
    event.custom({
        "type": "thermal:press",
        "conditions": [{
            "type": "forge:not",
            "value": {
                "type": "forge:tag_empty",
                "tag":  input
            }
        }],
        "ingredients": [
        {
            "tag": input,
            "count": input_count
        },
        {
            "item": mold
        }
        ],
        "result": [
        {
            "item": output,
            "count": output_count
        }
        ]
    }).id("mod_journey:" + ID)
}