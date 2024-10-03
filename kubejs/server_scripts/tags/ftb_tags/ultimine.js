ServerEvents.tags("item", event => {
    let debug = false;

    let all_tools = [
        tools_axe,
        tools_hoe,
        tools_paxel,
        tools_pickaxe,
        tools_scythe,
        tools_shovel
    ]

    all_tools.forEach(tool_object => {
        // Länge des Reference Arrays(alle Items) ermitteln, anschließend wird dieses Array zur Überprüfung weiter durchgelaufen.
        for (let n = 0; n < tool_object.reference.length; n++) {
            // Überprüfen ob Item in beiden Arrays vorhanden ist.
            if (!tool_object.excluded.includes(tool_object.reference[n])) {
                event.add("ftbultimine:included_tools", tool_object.reference[n])
                if (debug) {
                    console.log("Ultimne True: " + tool_object.reference[n]);
                }
            } else {
                if (debug) {
                    event.add("ftbultimine:excluded_tools", tool_object.reference[n])
                    console.log("Ultimne False: " + tool_object.reference[n]);
                }
            }
        }
    })
})
