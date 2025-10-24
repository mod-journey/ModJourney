let add_custom_machinary_seedplanter = (event, active, debug) => {
    if (!active) return;

    //Define Objk variables for better reading.
    let croptopia_obj = global.seeds.croptopia
    let mystical_obj = global.seeds.mystical

    //Crafting the Machine itselfs:
    event.shaped('custommachinery:custom_machine_item[custommachinery:machine="mod_journey:seed_planter"]', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'industrialforegoing:plastic',
        B: Item.of('industrialforegoing:plant_gatherer'),
        C: 'minecraft:hopper',
        D: '#c:seeds',
        E: 'minecraft:bucket',
        F: Item.of('industrialforegoing:plant_sower')
    })

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

    mystical_obj.elemental.forEach(crop => {
        seedPlanterForMystical(crop.seed, crop.result, 0.25, 1000, 1200)
    });

    mystical_obj.tier1.forEach(crop => {
        seedPlanterForMystical(crop.seed, crop.result, 0.25, 1000, 1200)
    });

    mystical_obj.tier2.forEach(crop => {
        seedPlanterForMystical(crop.seed, crop.result, 0.225, 2000, 1800)
    });

    mystical_obj.tier3.forEach(crop => {
        seedPlanterForMystical(crop.seed, crop.result, 0.2, 3000, 2400)
    });

    mystical_obj.tier4.forEach(crop => {
        seedPlanterForMystical(crop.seed, crop.result, 0.175, 4000, 3000)
    });

    mystical_obj.tier5.forEach(crop => {
        seedPlanterForMystical(crop.seed, crop.result, 0.15, 8000, 3600)
    });

    mystical_obj.tier6.forEach(crop => {
        seedPlanterForMystical(crop.seed, crop.result, 0.1, 10000, 4800)
    });

}