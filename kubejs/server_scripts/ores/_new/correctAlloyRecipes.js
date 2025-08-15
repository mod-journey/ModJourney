ServerEvents.recipes(event => {

    let alloy = [
        { id: 'alltheores:invar_ingot', name: 'invar' },
        { id: 'alltheores:electrum_ingot', name: 'electrum' },
        { id: 'alltheores:bronze_ingot', name: 'bronze' },
        { id: 'alltheores:brass_ingot', name: 'brass' },
        { id: 'alltheores:enderium_ingot', name: 'enderium' },
        { id: 'alltheores:lumium_ingot', name: 'lumium' },
        { id: 'alltheores:signalum_ingot', name: 'signalum' },
        { id: 'alltheores:constantan_ingot', name: 'constantan' }
    ]
    let keys = false

    for (let i = 0; i < alloy.length; i++) {
        event.forEachRecipe({ id: `alltheores:arcfurnace/${alloy[i].name}/ingot` }, r => {
            let inputValue = r.json.get("input").get("count").getAsInt()
            let additives = r.json.get("additives")
            let outputValue = r.json.get("results").get(0).get("count").getAsInt()

            //counter variables
            let inputComplete = 0;
            let additivesValue = 0;

            //got the additives container and count the inputs
            for (let n = 0; n < additives.size(); n++) {
                additivesValue += additives.get(n).get("count").getAsInt()
            }

            //adds the received values to one
            inputComplete = additivesValue + inputValue

            //when output not equal input, overwrite output similiar the input.
            if (outputValue === inputComplete) {
                console.log(`Nothing change by ${alloy[i].id}. The output and Inputs are equal`)
            } else {
                console.log(`The output will change by: ${alloy[i].id} from ${outputValue} to ${inputComplete}.`)

                //overwrite output
                r.json.get("results").get(0).remove("count")
                r.json.get("results").get(0).add("count", inputComplete)

                event.remove(r.getId())
                event.custom(r.json).id(r.getId())
            }
        })
    }
})