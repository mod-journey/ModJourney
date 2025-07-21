let remove_stellaris = (event, active, debug) => {
    if (!active) return;

    let remove = [
        'stellaris:cable',
        'stellaris:cable_t2',
        'stellaris:cable_t3',
        'stellaris:pipe_t1',
        'stellaris:pipe_t2',
        'stellaris:pipe_t3',
        'stellaris:pumpjack',
        'stellaris:pumpjack_drill',
        'stellaris:oil_finder'
    ]

    remove.forEach(element => {
        event.remove({ output: element })
    });

}