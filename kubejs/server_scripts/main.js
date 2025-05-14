// priority: 100

/**
 * This File is used, to start different Mod Modules. So it's possible, to add Debug in Each Module, or Disable a Module.
 *
 * The E.G.
 *  boatania_recipe_add(event)
 *  botania_recipe_gated(event)
 */
ServerEvents.recipes((event) => {

    adastra_gated( event );
    ae_gated( event );
    arsnoveau_gated( event );
    bloodmagic_gated( event );
    cookingforblockhead_gated( event );
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
    mobgrindingutils( event );
})