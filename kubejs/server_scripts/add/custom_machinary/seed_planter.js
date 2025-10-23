let add_custom_machinary_seedplanter = (event, active, debug) => {
    if (!active) return;

    //Define Objk variables for better reading.
    let croptopia_obj = global.seeds.croptopia
    let mystical_obj = global.seeds.mystical

    /**
     * @example seed_planter("seed", 0.25, "crop", 0.1, 200, 4000)
     * @param {String} seed
     * @param {float} seed_chance
     * @param {String} crop
     * @param {float} crop_chance
     * @param {Int} time
     * @param {Int} energy
     */
    let seedPlanterForCroptopia = (seed, seed_chance, crop, crop_chance, time, energy) => {
        event.recipes.custommachinery.custom_machine("mod_journey:seed_planter", time)
            .requireEnergy(energy)
            .requireFluid("1000 x minecraft:water")
            .requireItem(`1x ${seed}`)
            .produceItem(`1x ${crop}`)
            .produceItem(`1x ${crop}`).chance(crop_chance)
            .produceItem(`1x ${seed}`)
            .produceItem(`1x ${seed}`).chance(seed_chance)
    }

    /**
     * @param {String} seed
     * @param {String} result
     * @param {float} second_result
     * @param {Int} energy
     * @param {Int} time
     */
    function seedPlanterForMystical(seed, result, second_result, energy, time) {
        event.recipes.custommachinery.custom_machine("mod_journey:seed_planter", time)
            .requireEnergy(energy)
            .requireFluid("1000 x minecraft:water")
            .requireItem(`1x ${seed}`)
            .produceItem(`1x ${seed}`)
            .produceItem(`1x ${result}`)
            .produceItem(`1x ${result}`).chance(second_result)
    }

    croptopia_obj.forEach(id => {
        seedPlanterForCroptopia(id.seed, 0.25, id.crop, 0.5, 200, 2400)
    })

}