//priority: 100

let Jeihide = true;
let tooltip = false;


if (Jeihide) {

    RecipeViewerEvents.removeEntries("item", event => {

        hide_ores(event, false);                // Aktuell noch nicht auf Neo 1.21.1 angepasst
        jei_hide(event, false);                 // Aktuell noch nicht auf Neo 1.21.1 angepasst
        stellaris_remove_items(event, true)

        hide_mekanism_items(event, true)

    });
};


// Aktuell noch nicht auf Neo 1.21.1 angepasst
if (tooltip) {

    ItemEvents.tooltip(event => {

        tooltip_scrolls(event);
        tooltips(event);

    });
};