//priority 5
// Höhere Priority wird zuerst gelesen.

/*
Hier werden die Stages Items definiert!
*/
/** Die Items schalten die nächst höhere Stage frei! */
const dummy_items = [
    { id: "mod_journey:dummy_1" },
    { id: "mod_journey:dummy_2" },
    { id: "mod_journey:dummy_3" },
    { id: "mod_journey:dummy_4" },
    { id: "mod_journey:dummy_5" },
    { id: "mod_journey:dummy_6" },
    { id: "mod_journey:dummy_7" },
    { id: "mod_journey:dummy_8" },
    { id: "mod_journey:dummy_9" }
]

const stages = {
    stage1: {
        core: 'immersiveengineering:circuit_board',
        second: '',
        endgame: '',
        magic: {
            early: dummy_items[0].id,
            mid: dummy_items[1].id,
            end: dummy_items[2].id
        },
    },
    stage2: {
        core: 'stellaris:mercury_cobblestone',
        // indirect gated via darksteel and ender io allow smelting
        gear: 'enderio:dark_bimetal_gear',
        second: '',
        endgame: '',
        magic: {
            early: dummy_items[3].id,
            mid: dummy_items[4].id,
            end: dummy_items[5].id,
        },
    },
    stage3: {
        core: 'powah:crystal_nitro',
        second: '',
        endgame: '',
        magic: {
            early: dummy_items[6].id,
            mid: dummy_items[7].id,
            end: dummy_items[8].id
        },
    },
    mod_based: {
        mekanism: "mekanism:steel_casing"
    },
    coins: {
        bronze: "",
        silver: "",
        gold: ""
    }
}

/* Zugriff auf das Objekt mittels "stages.stage1.core" order stages.stage3.magic*/

// TODO move this file to startup-scripts and change "stages." to "global.mjConfig.stages." in all files
global.mjConfig.stages = stages

console.info("Laden der Staged Items.")