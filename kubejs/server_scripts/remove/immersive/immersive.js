//priority: 0

let remove_immersive = (event, active, debug) => {
    if (!active) return;
    //entfernt alle Gartenglocken Rezepte.
    event.remove(
        { type: 'immersiveengineering:cloche' }
    );

    //entfernt das Gartenglockenrezept
    event.remove(
        { output: 'immersiveengineering:cloche' }
    );
};