//priority: 0
let remove_mobGrindingUtils = event => {

    //entfernt das Hühnerfutter zum erstellen von Erde welche Mobs oder Tiere spwawnt.
    let mob_grinding = [
        'mob_grinding_utils:nutritious_chicken_feed',
        'mob_grinding_utils:gm_chicken_feed_cursed'
    ]

    mob_grinding.forEach(element => {
        event.remove({
            output: element
        })
    });

};