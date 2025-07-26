let remove_easyVillager = (event, active, debug) => {
    if (!active) return;

    event.remove([
        { output:"easy_villagers:iron_farm" }
    ]);

};