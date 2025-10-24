//priority 0

// Here you can define Mobs, which should protect from capturing.
let bosses_blacklist = [
    "cataclysm:the_harbinger",
    "cataclysm:the_leviathan",
    "cataclysm:amethyst_crab",
    "cataclysm:ancient_remnant",
    "cataclysm:modern_remnant",
    "cataclysm:ignis",
    "cataclysm:ender_guardian",
    "cataclysm:netherite_monstrosity",
    "cataclysm:ender_golem",
    "minecraft:iron_golem"
];

// A list on Entity Tags, that will given, to protect it to capture them.
ServerEvents.tags('entity_type', event => {

    bosses_blacklist.forEach(blacklisted_mob => {
        event.add('mob_grinding_utils:no_swab', blacklisted_mob)
        event.add('mob_grinding_utils:no_spawn', blacklisted_mob)
        event.add('enderio:soul_vial_blacklist', blacklisted_mob)
        event.add('industrialforegoing:mob_imprisonment_tool_blacklist', blacklisted_mob)
        event.add('industrialforegoing:mob_duplicator_blacklist', blacklisted_mob)
        event.add('ars_nouveau:jar_blacklist', blacklisted_mob)
        event.add('ars_nouveau:animal_summon_blacklist', blacklisted_mob)
        event.add('apothic_spawners:blacklisted_from_spawners', blacklisted_mob)
        event.add('c:capturing_not_supported', blacklisted_mob)     //occultism

    });

})