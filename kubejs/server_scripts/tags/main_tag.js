//priority 0

ServerEvents.tags('item', event => {

    //Basic Turbine
    extreme_tagging( event, "mod_journey:extreme_reactor/basic/turbine", extreme_object.basic.turbine )
    extreme_tagging( event, "mod_journey:extreme_reactor/basic", extreme_object.basic.turbine )

    //Basic Reactor
    extreme_tagging( event, "mod_journey:extreme_reactor/basic/reactor", extreme_object.basic.reactor )
    extreme_tagging( event, "mod_journey:extreme_reactor/basic", extreme_object.basic.reactor )

    //Reinforced Turbine
    extreme_tagging( event, "mod_journey:extreme_reactor/reinforced/turbine", extreme_object.reinforced.turbine )
    extreme_tagging( event, "mod_journey:extreme_reactor/reinforced", extreme_object.reinforced.turbine )

    //Reinforced Reactor
    extreme_tagging( event, "mod_journey:extreme_reactor/reinforced/reactor", extreme_object.reinforced.reactor )
    extreme_tagging( event, "mod_journey:extreme_reactor/reinforced", extreme_object.reinforced.reactor )

    //Fluidizer
    extreme_tagging(event, "mod_journey:extreme_reactor/fluidizer", extreme_object.fluidizer)

    //Reprocessor
    extreme_tagging(event, "mod_journey:extreme_reactor/reprocessor", extreme_object.reprocessor)

    event.add("forge:storage_blocks/uranium", "bigreactors:yellorium_block")
    event.add("forge:ingots/uranium", "bigreactors:yellorium_ingot")

})