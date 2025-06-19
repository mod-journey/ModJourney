//priority: 100

let Jeihide = false;
let tooltip = false;


while (Jeihide) {

    JEIEvents.hideItems(event => {

        hide_ores(event);
        jei_hide(event);

    });
};

while (tooltip) {

    ItemEvents.tooltip(event => {

        tooltip_scrolls(event);
        tooltips(event);

    });
};
