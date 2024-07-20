//priority 0

/*
    Main File to load the gated tome Books from Apotheosis
    To unload specific Function, you can comment out this line in this file.
*/
ServerEvents.recipes(event => {

    bow_tome_shaped( event, stages.stage3.magic.early )
    boots_tome_shaped( event, stages.stage3.magic.early )
    chestplate_tome_shaped( event, stages.stage3.magic.early )
    fishing_tome_shaped( event, stages.stage3.magic.early )
    helmet_tome_shaped( event, stages.stage3.magic.early )
    leggings_tome_shaped( event, stages.stage3.magic.early )
    pickaxe_tome_shaped( event, stages.stage3.magic.early )
    other_tome_shaped( event, stages.stage3.magic.early  )
    weapon_tome_shaped(  event, stages.stage3.magic.early  )

})