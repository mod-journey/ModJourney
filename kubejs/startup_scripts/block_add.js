//priority 90

let block_add = (event, active, debug) => {

    if (!active) return;

    //Erstellen des Antimatter-Blocks
    event.create('mod_journey:antimatter_block')
        .stoneSoundType()
        .hardness(1.0)
        .resistance(1.0)
        .requiresTool(true)
        .tagBlock('minecraft:needs_diamond_tool')
        .tagBlock('minecraft:mineable/pickaxe')

    //Erstellen des geronnen_blut_blocks
    event.create('mod_journey:clotted_bloodblock')
        .stoneSoundType()
        .hardness(1.0)
        .resistance(1.0)
        .requiresTool(true)
        .tagBlock('minecraft:needs_diamond_tool')
        .tagBlock('minecraft:mineable/pickaxe')

    event.create("mod_journey:venus_platinum_ore")
        .tag("c:ores")
        .tag("c:ores/platinum")
        .tag("c:ores_in_ground/stone")
        .tagBlock("minecraft:incorrect_for_iron_tool")
        .tagBlock("minecraft:mineable/pickaxe")
        .tagBlock("minecraft:incorrect_for_gold_tool")
        .tagBlock("minecraft:incorrect_for_stone_tool")
        .tagBlock("minecraft:incorrect_for_wooden_tool")
        .tagBlock("minecraft:incorrect_for_iron_tool")
        .tagBlock("stellaris:incorrect_for_steel_tools")
        .tagBlock("immersiveengineering:incorrect_for_steel_tool")
        .tagBlock("minecraft:needs_diamond_tool")
        .tagBlock("mekanism:atomic_disassembler_ore")
        .tagBlock("immersiveengineering:mineable/drill")

    event.create("mod_journey:mars_iridium_ore")
        .tag("c:ores")
        .tag("c:ores/iridium")
        .tag("c:ores_in_ground/stone")
        .tagBlock("minecraft:incorrect_for_iron_tool")
        .tagBlock("minecraft:mineable/pickaxe")
        .tagBlock("minecraft:incorrect_for_gold_tool")
        .tagBlock("minecraft:incorrect_for_stone_tool")
        .tagBlock("minecraft:incorrect_for_wooden_tool")
        .tagBlock("minecraft:incorrect_for_iron_tool")
        .tagBlock("stellaris:incorrect_for_steel_tools")
        .tagBlock("immersiveengineering:incorrect_for_steel_tool")
        .tagBlock("minecraft:needs_diamond_tool")
        .tagBlock("mekanism:atomic_disassembler_ore")
        .tagBlock("immersiveengineering:mineable/drill")

    event.create("mod_journey:merkur_angelsite")
        .tag("c:ores")
        .tag("c:ores/angelsite")
        .tag("c:ores_in_ground/stone")
        .tagBlock("minecraft:incorrect_for_iron_tool")
        .tagBlock("minecraft:mineable/pickaxe")
        .tagBlock("minecraft:incorrect_for_gold_tool")
        .tagBlock("minecraft:incorrect_for_stone_tool")
        .tagBlock("minecraft:incorrect_for_wooden_tool")
        .tagBlock("minecraft:incorrect_for_iron_tool")
        .tagBlock("stellaris:incorrect_for_steel_tools")
        .tagBlock("immersiveengineering:incorrect_for_steel_tool")
        .tagBlock("minecraft:needs_diamond_tool")
        .tagBlock("mekanism:atomic_disassembler_ore")
        .tagBlock("immersiveengineering:mineable/drill")

    event.create("mod_journey:merkur_benitoite")
        .tag("c:ores")
        .tag("c:ores/benitoite")
        .tag("c:ores_in_ground/stone")
        .tagBlock("minecraft:incorrect_for_iron_tool")
        .tagBlock("minecraft:mineable/pickaxe")
        .tagBlock("minecraft:incorrect_for_gold_tool")
        .tagBlock("minecraft:incorrect_for_stone_tool")
        .tagBlock("minecraft:incorrect_for_wooden_tool")
        .tagBlock("minecraft:incorrect_for_iron_tool")
        .tagBlock("stellaris:incorrect_for_steel_tools")
        .tagBlock("immersiveengineering:incorrect_for_steel_tool")
        .tagBlock("minecraft:needs_diamond_tool")
        .tagBlock("mekanism:atomic_disassembler_ore")
        .tagBlock("immersiveengineering:mineable/drill")

    event.create("mod_journey:merkur_osmium_ore")
        .tag("c:ores")
        .tag("c:ores/osmium")
        .tag("c:ores_in_ground/stone")
        .tagBlock("minecraft:incorrect_for_iron_tool")
        .tagBlock("minecraft:mineable/pickaxe")
        .tagBlock("minecraft:incorrect_for_gold_tool")
        .tagBlock("minecraft:incorrect_for_stone_tool")
        .tagBlock("minecraft:incorrect_for_wooden_tool")
        .tagBlock("minecraft:incorrect_for_iron_tool")
        .tagBlock("stellaris:incorrect_for_steel_tools")
        .tagBlock("immersiveengineering:incorrect_for_steel_tool")
        .tagBlock("minecraft:needs_diamond_tool")
        .tagBlock("mekanism:atomic_disassembler_ore")
        .tagBlock("immersiveengineering:mineable/drill")

/*
    TODO: Durch keine Solid Texture, muss das Rendering geändert werden.
    Weitere Tags müssten noch vergeben werden!
*/

    let staged_items = 4;
    let number_as_word = ["one", "two", "three", "four"];

    for (let i = 1; i <= staged_items; i++) {
        event.create(`mod_journey:staging/frame_core_${i}`)
            .tag("mod_journey:staged_item")
            .tag(`mod_journey:stage/${number_as_word[i - 1]}`)
    };
};