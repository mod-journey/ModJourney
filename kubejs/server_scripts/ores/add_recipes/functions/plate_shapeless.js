//priority 90

/**
    * @param {var} event base event handler. Must be written, so the Method not work.
    * @param {String} input as Tag! e.g. forge:ingots/iron
    * @param {Int} input_count as Int. Not more than 8!
    * @param {String} output as Item-ID
    * @param {Int} output_count as Int but not more than 64
    * @param {String} ID ID only matches one times in registry, otherwise fires a error!
 */
let plate_shapeless = (event,input,input_count,output,output_count,ID) => {
    event.shapeless(
        Item.of(output, output_count), [
            `${input_count}x #${input}`,
            `immersiveengineering:hammer`
        ]
    ).id("mod_journey:" + ID)
}

