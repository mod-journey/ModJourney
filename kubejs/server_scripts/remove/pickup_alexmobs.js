//priority 0

let pickup_alexmobs = (event) => {

    let blacklist_mob = [
        'alexsmobs:cachalot_whale',
        'alexsmobs:giant_squid',
        'alexsmobs:spawn_egg_void_worm',
        'alexsmobs:spawn_egg_centipede',
        'alexsmobs:spawn_egg_bone_serpent',
        'alexsmobs:spawn_egg_anaconda'
    ]

    blacklist_mob.forEach(blacklisted_mob => {

        if(event.target.type != blacklisted_mob) return (
            event.cancel()
        );

    });
}

ItemEvents.entityInteracted('enderio:empty_soul_vial', event => {

    pickup_alexmobs(event)

});

ItemEvents.entityInteracted('industrialforegoing:mob_imprisonment_tool', event => {

    pickup_alexmobs(event)

});