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


    /* "./add/*" */
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

    /* "./remove/*" */
    remove_ae2_portable_cell( event );
    remove_ae2_removeComplete( event );
    remove_aether( event );
    remove_apotheosis( event );
    remove_arsNoveau( event );
    remove_bloodmagic( event );
    remove_botania( event );
    remove_easyVillager( event );
    remove_extremeReactor( event );
    remove_ftbquest( event );
    remove_immersive( event );
    remove_industrial( event );
    remove_itemfilters( event );
    remove_mekanism( event );
    remove_mobGrindingUtils( event );
    remove_mysticalAgriculture( event );
    remove_rftAndXnet( event );
    remove_Thermal( event );
    // ./remove/pickup_mobs.js ---> Player interact events. Muss an der Stelle gesondert gehandelt werden. GGf. in die Ruprik observe? >"remove_pickup_mobs( event );"<



    /**
     * list of paths, which not implemented now.
     *
     *
     * ./ores/*          ATTENTION, here ive allready implement chunks of codes  to outsourcing in the past project.
     * ./observe/*       Here we obtain the old system, or ref. the commit, if we've a impact to performance.
     * ./replace/*       in replace/loot, we use LootJS as addon from KJS. So perhaps we add this Lootingtables or change it as datapack?
     * ./tags/*          ATTENTION, here ive allready implement chunks of codes  to outsourcing in the past project.
     *                   So while we have here a seperat Event Holder, we will rename the main.js in main_recipes.js and main_tags.js
     */
})