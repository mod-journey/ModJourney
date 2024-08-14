//priority 0

// Quellen:
// https://kubejs.com/wiki/events
// https://kubejs.com/wiki/tutorials/item-interactions
// Für Mob-Grinding-Utils gibt es ein Tag: https://github.com/vadis365/Mob-Grinding-Utils/blob/MC1.18/MobGrindingUtils/MobGrindingUtils/src/generated/resources/data/mob_grinding_utils/tags/entity_types/no_swab.json
// Siehe auch: https://www.reddit.com/r/allthemods/comments/rojacg/comment/ht3c1dm/?utm_source=share&utm_medium=mweb3x

// Heres defined the blacklisted cataclysm bosses, so you can add more if you want.
let bosses_blacklist = [
    "cataclysm:the_harbinger",
    "cataclysm:the_leviathan",
    "cataclysm:amethyst_crab",
    "cataclysm:ancient_remnant",
    "cataclysm:modern_remnant",
    "cataclysm:ignis",
    "cataclysm:ender_guardian",
    "cataclysm:netherite_monstrosity",
    "cataclysm:ender_golem"
];

//remove the right-click event from enderio soulvials. The event wehre canceld.
ItemEvents.entityInteracted('enderio:empty_soul_vial', event => {

    bosses_blacklist.forEach(blacklisted_mob => {
        if(event.target.type != blacklisted_mob) return
        event.cancel();
    });
});

// Add no_swab Tag to the blacklisted Mobs.
ServerEvents.tags('entity_type', event => {
    bosses_blacklist.forEach(blacklisted_mob => {
        event.add('mob_grinding_utils:no_swab', blacklisted_mob)
    });
})

//remove the right-click event from the imprisoment from industiral. The event wehre canceld.
ItemEvents.entityInteracted('industrialforegoing:mob_imprisonment_tool', event => {

    bosses_blacklist.forEach(blacklisted_mob => {
        if(event.target.type != blacklisted_mob) return
        event.cancel();
    });
});