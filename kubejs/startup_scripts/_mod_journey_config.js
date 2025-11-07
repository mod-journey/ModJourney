//priority: 200

let WEEK = HOUR*24*7
let SECONDS_PER_MINUTE = 60
let SECONDS_PER_HOUR   = SECONDS_PER_MINUTE * 60
let SECONDS_PER_DAY    = SECONDS_PER_HOUR * 24
let SECONDS_PER_WEEK   = SECONDS_PER_DAY * 7

const mjConfig = {
    stages: {
        stage1: {
            vanilla: "mod_journey:staging/frame_core_1",
            core: 'mod_journey:staging/frame_core_2',
            second: '',
            endgame: '',
            magic: {
                early: '#mod_journey:magic/stage/one/early',
                mid: 'naturesaura:birth_spirit',
                end: 'naturesaura:sky_ingot'
            },
        },
        stage2: {
            core: 'mod_journey:staging/frame_core_3',
            // indirect gated via darksteel and ender io allow smelting
            gear: 'enderio:dark_bimetal_gear',
            second: '',
            endgame: '',
            magic: {
                early: 'occultism:crushed_end_stone',
                mid: 'occultism:soul_gem',
                end: 'occultism:chalk_void',
            },
        },
        stage3: {
            core: 'mod_journey:staging/frame_core_4',
            second: 'enderio:pulsating_crystal', // Mid-game
            endgame: '',
            magic: {
                early: 'ars_nouveau:source_gem',
                mid: 'ars_nouveau:archmage_spell_book',
                end: 'apothic_enchanting:ender_library'
            },
        },
        mod_based: {
            mekanism: "mekanism:steel_casing",
            mobGrindingUtils: {
                stick: '#c:rods/iridium',
                swords: [
                    'naturesaura:depth_sword',
                    'naturesaura:infused_iron_sword'
                ],
                helmets: [
                    'naturesaura:depth_helmet',
                    'naturesaura:infused_iron_helmet'
                ],
                chestplates: [
                    'naturesaura:depth_chest',
                    'naturesaura:infused_iron_chest'
                ],
                pents: [
                    'naturesaura:depth_pants',
                    'naturesaura:infused_iron_pants'
                ],
                shoes: [
                    'naturesaura:depth_shoes',
                    'naturesaura:infused_iron_shoes'
                ]
            }
        },
        coins: {
            bronze: "mod_journey:copper_coin",
            silver: "mod_journey:silver_coin",
            gold: "mod_journey:gold_coin"
        }
    },

    times: {
        projectStart: new Date(2025, 9, 31, 18, 0).getTime() / 1000
    }
}

for (let i=1; i<=4; i++) {
    mjConfig.times[`week_${i}`] = mjConfig.times.projectStart + (WEEK/1000) * i;
}

global.mjConfig = mjConfig

/*
// Debug Times
Object.entries(global.mjConfig.times).forEach(([key, time]) => {
    let date = new Date(time*1000)
    console.log(`ProjectTimes ${key}: ${date.toString()}`)
})
*/

