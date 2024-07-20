//priority 5
// Höhere Priority wird zuerst gelesen.

/*
Hier werden die Stages Items definiert!
*/
/** Die Items schalten die nächst höhere Stage frei! */
const stages = {
    stage1 : {
        core: 'immersiveengineering:circuit_board',
        second:  '',
        endgame: '',
        magic: {
            early:  'botania:manasteel_ingot',
            mid:    'botania:elementium_ingot',
            end:    'botania:terrasteel_ingot'
        },
    },
    stage2 : {
        core: 'ad_astra:glacio_stone',
        second: '',
        endgame: '',
        magic: {
            early:  'bloodmagic:life_essence_bucket',
            mid:    'bloodmagic:largebloodstonebrick',
            end:    'bloodmagic:hellforgedparts'
        },
    },
    stage3 : {
        core: 'powah:crystal_nitro',
        second: '',
        endgame: '',
        magic: {
            early:  'ars_nouveau:source_gem',
            mid:    'ars_nouveau:archmage_spell_book',
        },
    }
}

/* Zugriff auf das Objekt mittels "stages.stage1.core" order stages.stage3.magic*/

console.log("Laden der Staged Items.")