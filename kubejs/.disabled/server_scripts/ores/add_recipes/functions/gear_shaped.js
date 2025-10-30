//priority 90

/**
    * @param {var} event base event handler. Must be written, so the Method not work.
    * @param {String} input as Tag! e.g. forge:ingots/iron
    * @param {String} output as Item-ID
    * @param {Int} output_count as Int but not more than 64
    * @param {String} ID ID only matches one times in registry, otherwise fires a error!
 */
let gear_shaped = (event,input,output,output_count,ID) => {
    event.shaped(
        Item.of( output, output_count),
        [
          ' G ',
          'GIG',
          ' G '
        ],
        {
          G: `#${input}`,
          I: 'minecraft:iron_nugget'
        }
    ).id("mod_journey:" + ID)
}