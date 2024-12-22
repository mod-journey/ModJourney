ServerEvents.recipes(event => {

    // Take enderpearl recipe and re-create it for duroplast
    event.forEachRecipe({ id: 'thermal:machines/chiller/chiller_ender_to_ender_pearl' }, r => {
        let json = r.json;
        json.get('ingredients').get(0).add('fluid', 'immersiveengineering:phenolic_resin')
        json.get('ingredients').get(1).add('item', 'immersiveengineering:mold_plate')
        json.get('result').get(0).add('item', 'immersiveengineering:plate_duroplast')
        console.log(r.getId() +  ' ' + r.json);

        event.custom(r.json).id('mod_journey/thermal/chiller/phenolic_resin_to_plate_duroplast')
    });

});