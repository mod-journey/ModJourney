//priority: 0

let remove_bloodmagic = (event, active, debug) => {
    if (!active) return;

    event.remove([
        {id: "bloodmagic:array/day"},
        {id: "bloodmagic:array/night"}
    ]);
};