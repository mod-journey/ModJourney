// priority: 100

/**
 * This File is used, to start different Mod Modules. So it's possible, to add Debug in Each Module, or Disable a Module.
 *
 * The E.G.
 *  boatania_recipe_add(event)
 *  botania_recipe_gated(event)
 */
ServerEvents.recipes((event) => {
    /* "./gated/* */
    replacer.init(event);

    adastra_gated( event );
    ae_gated( event );
    arsnoveau_gated( event );
    bloodmagic_gated( event );
    cookingforblockhead_gated( replacer ); //ReplacerHelp Script @Radon
    enderchestandtank_gated( event );
    enerdeio_gated( event );
    extendedcrafting_gated( event );
    extremereactor_gated( event );
    fluxnetwork_gated( event );
    industrialforegoing_gated( event );
    ironjetpacks_gated( event );
    itemcollector_gated( event );
    laserio_gated( event );
    mekanism_gated( event );
    mobgrindingutils( event )
    mysticalagriculture_gated( replacer ); //ReplacerHelp Script @Radon
    powah_gated( event );
    rfttools_gated( event );
    sophisticatedbackpacks_gated( replacer )
    thermal_gated( event );

    remove_item_by_tag( event );    //Checking scipt of using


    /* "./add" */
    add_adastra_items( event );
    add_ae2_fluix( event );
    add_ae2_skystellingot( event );
    add_creativeitemsMagic( event );
    add_creativeitemsTechnic( event );
    add_immersive_alternativeCircuitRecipes ( event );
    add_immersive_excavator( event );
    //add_industrial_laser_fluidLaser( event ); --> actually no content in this file.
    add_magic_bloodMagic( event );
    add_magic_botania( event );
    add_magic_botanyPots( event );
    add_modjourney_antimatter( event );
    add_modjourney_bloodmagic( event );
    add_modjourney_scrolls( event );
    // ./add/mod_journey/tag_scrolls.js ---> Tag Event auf Items ggf. verschieben in tags im Zukünftigen Kommit. >"tag_event_mj_scrolls( event );"<
    add_cataclysm( event );
    add_modjourneycoins( event );
})