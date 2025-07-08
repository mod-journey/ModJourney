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
    let other_events = false;
    let replace_event = true;
    let customMachine_event = true;



    ServerEvents.recipes((event) => {

        replacer.init(event);

        /* "./gated/* */
        if (gated_event) {
            apotheosis_gated(event, true);
            adastra_gated(event, false);                         //Ersetzung durch Stellaris Ticket #12
            ae_gated(event, true);
            arsnoveau_gated(event, true);
            cookingforblockhead_gated(event, true);
            enderchestandtank_gated(event, true);
            enerdeio_gated(event, true);
            extendedcrafting_gated(event, true);
            extremereactor_gated(event, true);
            fluxnetwork_gated(event, true);
            industrialforegoing_gated(event, true);
            ironjetpacks_gated(event, true);
            itemcollector_gated(event, true);
            laserio_gated(event, true);
            mekanism_gated(event, true);
            mobgrindingutils(event, false);                     //much items like weapons and armor must replace, if we have new magic mods.
            mysticalagriculture_gated(event, true);
            powah_gated(event, true);
            rfttools_gated(event, true);
            sophisticatedbackpacks_gated(event, false);
            remove_item_by_tag(event, true);                    //Checking scipt of using
        }

        /* "./add/*" */
        if (add_event) {
            add_adastra_items(event, false);                     //Ersetzung durch Stellaris Ticket #12
            add_ae2_fluix(event, true);
            add_ae2_skystellingot(event, true);
            add_creativeitemsMagic(event, true);
            add_creativeitemsTechnic(event, true);
            add_immersive_excavator(event, true);
            add_industrial_laser_fluidLaser(event, false);      //actually no content in this file.
            add_modjourney_antimatter(event, true);
            add_modjourney_scrolls(event, true);
            add_cataclysm(event, false);                        //deactivate, while cataclysm is deactivated as mod, while throw a lot of errors.
            add_modjourneycoins(event, true);
        }

        if (customMachine_event) {
            add_custom_machinary_seedplanter(event, true)
            add_custom_machinary_treeplanter(event, true)
            add_custom_machinary_coalgen(event, true)
            add_custom_machinary_watergen(event, true)
            add_custom_machinary_metalpress(event, false)
        }

        /* "./remove/*" */
        if (remove_event) {
            remove_ae2_portable_cell(event, true);
            remove_ae2_removeComplete(event, true);
            remove_aether(event, false);                        //forgot to install to pack. will be merged in a few days
            remove_apotheosis(event, true, false);
            remove_arsNoveau(event, true);
            remove_easyVillager(event, true);
            remove_extremeReactor(event, true);
            remove_ftbquest(event, true);
            remove_immersive(event, true);
            remove_industrial(event, true);
            remove_mekanism(event, true);
            remove_mobGrindingUtils(event, true);
            remove_mysticalAgriculture(event, true);
            remove_rftAndXnet(event, true);
        }

        if (replace_ores) {
            event.remove({ output: "#ore:remove" })

            change_gears(event)
            change_plates(event)
            change_rods(event)

            ores_replace_immersive(event);
            ores_replace_laser(event);
            ores_replace_mekanism_main(event);
            ores_replace_ore_duplication(event);
            ores_replace_thermal_thermal(event);
            ores_replace_thermal_centrifuge(event);
            ores_replace_thermal_packing(event);
            ores_replace_thermal_pulverizer(event);
            ores_replace_thermal_smelter(event);
            ores_replace_adastra(event);
            ores_replace_steel(event);
            ores_remove(event);
        }

        if (replace_event) {
            replace_extremereactors(event, true);
            replace_bamboo(event, true);
            replace_stellaris_steel(event, true);
            replace_stellaris_uran(event, true);
        }
    })

    if (other_events) {
        immersive_chest_loottable_modify(event);
        remove_pickup_mobs(event);
    };


};


/*
  list of paths, which not implemented now.


./observe/*       Here we obtain the old system, or ref. the commit, if we've a impact to performance.
.                 So if we have here a seperat Event Holder, we will rename the main.js in main_recipes.js and main_tags.js
 */