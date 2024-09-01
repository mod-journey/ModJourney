//priority 0

console.log('Ändern der Gated ExtremeReactors2 Items')

ServerEvents.recipes(event => {

    // Staging der Reactor Frames.
    event.replaceInput(
        { id: 'bigreactors:reactor/basic/casing' },
        '#forge:sand',
        stages.stage2.core
    )

    //beschränkung auf upgrade Rezept vom advanced Reactor
    event.remove({id: "bigreactors:reactor/reinforced/casing"})

})