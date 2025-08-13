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

]

const stages = {
    stage1: {
        vanilla: "mod_journey:frame_core_1",
        core: 'mod_journey:frame_core_2',
        second: '',
        endgame: '',
        magic: {
            early: '#mod_journey:magic/stage/one/early',
            mid: 'naturesaura:birth_spirit',
            end: 'naturesaura:sky_ingot'
        },
    },
    stage2: {
        core: 'mod_journey:frame_core_3',
        // indirect gated via darksteel and ender io allow smelting
        gear: 'enderio:dark_bimetal_gear',
        second: '',
        endgame: '',
        magic: {
            early: dummy_items[1].id,
            mid: dummy_items[2].id,
            end: dummy_items[3].id,
        },
    },
    stage3: {
        core: 'mod_journey:frame_core_4',
        second: '',
        endgame: '',
        magic: {
            early: 'ars_nouveau:source_gem',
            mid: 'ars_nouveau:archmage_spell_book',
            end: 'apothic_enchanting:ender_library'
        },
    },
    mod_based: {
        mekanism: "mekanism:steel_casing"
    },
    coins: {
        bronze: "mod_journey:copper_coin",
        silver: "mod_journey:silver_coin",
        gold: "mod_journey:gold_coin"
    }
}

/* Zugriff auf das Objekt mittels "stages.stage1.core" order stages.stage3.magic*/

console.info("Laden der Staged Items.")