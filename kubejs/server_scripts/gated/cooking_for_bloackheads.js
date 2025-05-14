//priority 0

let cookingforblockhead_gated = (replacer) => {

    // Replace redstone on bottom/middle
    replacer.replaceInputByPosition(
        { id: 'cookingforblockheads:sink' },
        1,2,
        { 'item': stages.stage2.core }
    )
}
