// priority: 100

/**
 * This File is used, to start different Mod Modules. So it's possible, to add Debug in Each Module, or Disable a Module.
 *
 * The E.G.
 *  boatania_recipe_add(event)
 *  botania_recipe_gated(event)
 */

let events_server = true;

if (events_server) {

    let gated_event = true;
    let remove_event = true;
    let add_event = true;
    let replace_ores = false;
    let replace_event = true;
    let customMachine_event = true;



    ServerEvents.recipes((event) => {


        replacer.init(event);

        /* "./gated/* */
        if (gated_event) {
            modjourney_gated_items(event, true);
            apotheosis_gated(event, true);
            ae_gated(event, true);
            arsnoveau_gated(event, true);
            cookingforblockhead_gated(event, true);
            enderchestandtank_gated(event, true);
            enerdeio_gated(event, true);
            extendedcrafting_gated(event, true);
            extremereactor_gated(event, true);
            fluxnetwork_gated(event, true);
            immersive_gated(event, true);
            industrialforegoing_gated(event, true);
            ironjetpacks_gated(event, true);
            itemcollector_gated(event, true);
            laserio_gated(event, true);
            mekanism_gated(event, true);
            mobgrindingutils(event, true);
            mysticalagriculture_gated(event, true);
            powah_gated(event, true);
            rfttools_gated(event, true);
            sophisticatedbackpacks_gated(event, true);
            remove_item_by_tag(event, true);                    //Checking scipt of using
            stellaris_gated(event, true);
            occultism_gated(event, true);
            funtionalStorage_gated(event, true)
            waystones_gated(event, true)

        }

        /* "./add/*" */
        if (add_event) {
            add_ae2_fluix(event, true);
            add_ae2_skystellingot(event, true);
            add_immersive_excavator(event, true);
            add_industrial_laser_fluidLaser(event, true);
            add_modjourney_antimatter(event, true);
            add_modjourney_scrolls(event, true);
            add_modjourneycoins(event, true);
            add_stellaris(event, true);
            easy_villagers_gated(event, true)
        }

        if (customMachine_event) {
            add_custom_machinary_seedplanter(event, true)
            add_custom_machinary_treeplanter(event, true)
            add_custom_machinary_metalpress(event, true)
            add_custom_machinary_brine_converter(event, true)
        }

        /* "./remove/*" */
        if (remove_event) {
            remove_ae2_portable_cell(event, true);
            remove_ae2_removeComplete(event, true);
            remove_aether(event, true);
            remove_apotheosis(event, true, false);
            remove_arsNoveau(event, true);
            remove_extremeReactor(event, true);
            remove_ftbquest(event, true);
            remove_immersive(event, true);
            remove_industrial(event, true);
            remove_mekanism(event, true);
            remove_mobGrindingUtils(event, true);
            remove_mysticalAgriculture(event, true);
            remove_rftAndXnet(event, true);
            remove_stellaris(event, true);
            remove_natureAura(event, true);
            remove_occultism(event, true);
            remove_arsElemental(event, true);
            remove_sophisticated(event, true);
        }

        if (replace_ores) {
            fixAlloyRecipes(event, true)
            changeRecipeToATO(event, true)
        }

        if (replace_event) {
            replace_extremereactors(event, true);
            replace_bamboo(event, true);
            replace_stellaris_steel(event, true);
            replace_stellaris_uran(event, true);
        }

    })
};


/*
  list of paths, which not implemented now.


./observe/*       Here we obtain the old system, or ref. the commit, if we've a impact to performance.
.                 So if we have here a seperat Event Holder, we will rename the main.js in main_recipes.js and main_tags.js
 */