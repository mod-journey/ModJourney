//priority 0

let cookingforblockhead_gated = (event, active, debug) => {
    if (!active) return;

    // Replace redstone on bottom/middle
    replacer.replaceInputByPosition(
        { id: 'cookingforblockheads:sink' },
        1, 2,
        { 'item': stages.stage3.core }
    )
}
