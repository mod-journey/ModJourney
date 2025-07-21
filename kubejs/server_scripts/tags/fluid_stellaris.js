let fluid_stellaris = (event, active, debug) => {
    if (!active) return;

    event.add( "c:oil/raw" ,"stellaris:oil")
    event.add( "c:fuel/rocket" ,"stellaris:fuel")

}