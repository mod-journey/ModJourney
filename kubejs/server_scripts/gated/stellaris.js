let stellaris_gated = (event, active, debug) => {
    if (!active) return;

    let energy_gen = [
        'stellaris:solar_panel',
        'stellaris:coal_generator',
        'stellaris:radioactive_generator'
    ]

    energy_gen.forEach(staged => {
        event.replaceInput({ output: staged }, "minecraft:lapis_lazuli", mjConfig.stages.stage1.core)
    });

    event.remove({ id: "stellaris:misc/upgrades/radioactive_motor" })
    event.remove({ id: "stellaris:misc/upgrades/hydrogen_motor" })

    event.replaceInput({ output: 'stellaris:hydrogen_motor' }, "minecraft:diamond", "#c:plates/platinum")
    event.replaceInput({ output: 'stellaris:radioactive_motor' }, "#c:ingots/uranium", "#c:plates/iridium")
    event.replaceInput({ output: "stellaris:rover" }, "stellaris:cable", "stellaris:desh_ingot")
    event.replaceInput({ output: "stellaris:oxygen_distributor" }, "minecraft:lapis_lazuli", "stellaris:desh_ingot")

    let replace_cable = [ 'stellaris:water_pump']

    replace_cable.forEach(new_cable => {
        event.replaceInput({ output: new_cable }, "stellaris:cable", "pipez:energy_pipe")
    });

    event.shaped("stellaris:rocket_station", [
        'ABA',
        'BCB',
        'DDD'
    ], {
        A: 'minecraft:lapis_lazuli',
        B: 'stellaris:heavy_metal_ingot',
        C: global.mjConfig.stages.stage1.core,
        D: 'stellaris:iron_plating_block'
    }).id("stellaris:misc/rocket_station_block")
}