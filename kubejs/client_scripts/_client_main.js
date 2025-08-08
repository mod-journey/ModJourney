//priority: 100

let Jeihide = true;
let tooltip = true;


if (Jeihide) {

    RecipeViewerEvents.removeEntries("item", event => {
        jei_hide(event, false);                 // Aktuell noch nicht auf Neo 1.21.1 angepasst
        stellaris_remove_items(event, true);
        hideNaturesAura(event, true);
        hide_occultism(event, true);
        hide_arsElemental(event, true);


        hide_mekanism_items(event, true)
        hide_immersiveenigneering_items(event, true)
    });
};


if (tooltip) {

    ItemEvents.modifyTooltips(event => {
        tooltip_scrolls(event);
        tooltips(event);

    });
};