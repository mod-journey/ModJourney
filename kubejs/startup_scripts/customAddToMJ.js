let customAddToMJ = (event, active) => {
    if (!active) return;

    //add custom Machines under the mod_journey:* Namespace, so the Machines will habe their own ID.
    let customMachines = [
        "tree_planter",
        "seed_planter",
        "brine_converter",
        "mechanical_press",
        "pulverizer",
        "refinary"
    ];

    for (let i = 0; i < customMachines.length; i++) {
        event.create(`mod_journey:${customMachines[i]}`, `custommachinery`)
    };

};