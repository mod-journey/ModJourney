let stellaris_gated = (event, active, debug) => {
    if (!active) return;

    let energy_gen = [
        'stellaris:solar_panel',
        'stellaris:coal_generator',
        'stellaris:radioactive_generator'
    ]

    energy_gen.forEach(staged => {
        event.replaceInput({ output: staged }, "minecraft:lapis_lazuli", stages.stage1.core)
    });

    event.remove({ id: "stellaris:misc/upgrades/radioactive_motor" })
    event.remove({ id: "stellaris:misc/upgrades/hydrogen_motor" })

    event.replaceInput({ output: 'stellaris:hydrogen_motor' }, "minecraft:diamond", "#c:plates/platinum")
    event.replaceInput({ output: 'stellaris:radioactive_motor' }, "#c:ingots/uranium", "#c:plates/iridium")


}