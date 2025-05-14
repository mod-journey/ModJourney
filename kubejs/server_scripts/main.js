// priority: 100

/**
 * This File is used, to start different Mod Modules. So it's possible, to add Debug in Each Module, or Disable a Module.
 *
 * The E.G.
 *  boatania_recipe_add(event)
 *  botania_recipe_gated(event)
 */
ServerEvents.recipes((event) => {
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
})