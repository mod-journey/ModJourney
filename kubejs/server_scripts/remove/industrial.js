//priority: 0

let remove_industrial = (event, active, debug) => {
    if (!active) return;

    //enfernt alle infinity crafting Rezepte
    let infinity_stuff = [
        'saw',
        'hammer',
        'trident',
        'backpack',
        'launcher',
        'nuke',
        'drill'
    ]

    infinity_stuff.forEach(element => {
        event.remove({
            output: Item.of('industrialforegoing:infinity_' + element)
        })
    });

    //remove Soul Laser Base, while add it to creativ Item Shop in QB.
    event.remove({output: "industrialforegoingsouls:soul_laser_base"})

};
