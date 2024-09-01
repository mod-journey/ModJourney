//priority 0

//sammelstelle zum entfernen der Tags, nachdem alle Rezepthändler durchgelaufen sind.
//Kann durch auskommentieren bedarfsweise ausgeschaltet werden.
ServerEvents.tags('item', event => {

    ores_ad_astra_tag(event)
    ores_meka_tag(event)
    ores_immersive_tag(event)
    ores_thermal_tag(event)
    ores_industrial_tag(event)

})