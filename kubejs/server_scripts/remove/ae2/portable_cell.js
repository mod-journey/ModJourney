// priority: 0

let remove_ae2_portable_cell = (event, active, debug) => {
    if (!active) return;

        event.remove([
            { mod: "megacells", output: /portable/i },
            { mod: "appflux", output: /portable/i },
            { mod: "appmek", output: /portable/i },
            { mod: "arseng", output: /portable/i },
            { mod: "ae2things", output: /portable/i },
            { mod: "ae2", output: /portable/i }
        ])
};