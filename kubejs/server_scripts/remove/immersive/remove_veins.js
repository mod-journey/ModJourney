ServerEvents.recipes(event => {

    event.forEachRecipe({ mod: "immersiveengineering", type: "immersiveengineering:mineral_mix" }, r => {
        if (r.getId().contains("immersiveengineering:mineral/pentlandite")) {
            event.remove(r.getId())
        }
    })

})