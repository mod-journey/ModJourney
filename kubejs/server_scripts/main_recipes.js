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

    let gated_event = false;
    let remove_event = false;
    let add_event = true;
    let replace_ores = false;
    let other_events = false;
    let replace_event = false;

    //replacer.init(event);

    ServerEvents.recipes((event) => {



        /* "./gated/* */
        if (gated_event) {
            apotheosis_gated(event);
            adastra_gated(event);
            ae_gated(event);
            arsnoveau_gated(event);
            bloodmagic_gated(event);
            //cookingforblockhead_gated(replacer); //ReplacerHelp Script @Radon
            enderchestandtank_gated(event);
            enerdeio_gated(event);
            extendedcrafting_gated(event);
            extremereactor_gated(event);
            fluxnetwork_gated(event);
            industrialforegoing_gated(event);
            ironjetpacks_gated(event);
            itemcollector_gated(event);
            laserio_gated(event);
            mekanism_gated(event);
            mobgrindingutils(event)
            //mysticalagriculture_gated(replacer); //ReplacerHelp Script @Radon
            powah_gated(event);
            rfttools_gated(event);
            //sophisticatedbackpacks_gated(replacer)
            thermal_gated(event);
            remove_item_by_tag(event);    //Checking scipt of using
        }

        /* "./add/*" */
        if (add_event) {
            add_adastra_items(event, true);
            add_ae2_fluix(event, true);
            add_ae2_skystellingot(event, true);
            add_creativeitemsMagic(event, true);
            add_creativeitemsTechnic(event, true);
            add_immersive_alternativeCircuitRecipes(event, true);
            add_immersive_excavator(event, true);
            //add_industrial_laser_fluidLaser( event ); --> actually no content in this file.
            add_magic_bloodMagic(event, false);         //deactivate, while blood magic is NIY
            add_magic_botania(event, false);            //deactivate, while botania magic is NIY
            add_magic_botanyPots(event, true);
            add_modjourney_antimatter(event, true);
            add_modjourney_bloodmagic(event, false);    //deactivate, while blood magic is NIY
            add_modjourney_scrolls(event, true);
            add_cataclysm(event, false);                //deactivate, while cataclysm is deactivated as mod, while throw a lot of errors.
            add_modjourneycoins(event, true);
        }

        /* "./remove/*" */
        if (remove_event) {
            remove_ae2_portable_cell(event);
            remove_ae2_removeComplete(event);
            remove_aether(event);
            remove_apotheosis(event);
            remove_arsNoveau(event);
            remove_bloodmagic(event);
            remove_botania(event);
            remove_easyVillager(event);
            remove_extremeReactor(event);
            remove_ftbquest(event);
            remove_immersive(event);
            remove_industrial(event);
            remove_itemfilters(event);
            remove_mekanism(event);
            remove_mobGrindingUtils(event);
            remove_mysticalAgriculture(event);
            remove_rftAndXnet(event);
            remove_Thermal(event);
            // ./remove/pickup_mobs.js ---> Player interact events. Muss an der Stelle gesondert gehandelt werden. GGf. in die Ruprik observe? >"remove_pickup_mobs( event );"<
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
            replace_extremereactors(event);
            replace_farmersdelight(event);
            replace_thermal(event);
        }
    })

    if (other_events) {
        immersive_chest_loottable_modify(event);
    };
};


/*
  list of paths, which not implemented now.


./observe/*       Here we obtain the old system, or ref. the commit, if we've a impact to performance.
.                 So if we have here a seperat Event Holder, we will rename the main.js in main_recipes.js and main_tags.js
 */