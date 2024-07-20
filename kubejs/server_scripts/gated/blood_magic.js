//priority 0

console.log('Gated BloodMagic')

ServerEvents.recipes(event => {

    //Blood Altar, add manasteel instead of gold by key "c"
    event.forEachRecipe({id: 'bloodmagic:blood_altar' },
        r => {
            r.json.get('key').add( 'c', {item: stages.stage1.magic.early })
            event.custom(r.json).id(r.getId())
        }
    )

    //Ritual Diviner, add Elementium instead of diamonds, by key "d"
    event.forEachRecipe({id: 'bloodmagic:ritual_diviner_0' },
        r => {
            r.json.get('key').add( 'd', {item: stages.stage1.magic.mid })
            event.custom(r.json).id(r.getId())
        }
    )

    //Miners key add Terrasteel instead of copper,
    event.forEachRecipe({id: 'bloodmagic:soulforge/mine_key' },
        r => {
            let change = r.json.get('input0')
            change.remove("tag")
            change.add('item', stages.stage1.magic.end)
            event.custom(r.json).id(r.getId())
            /* so a regular add, does not overwrite the value. It simple adds a second value.
               in thies case, I remove the tag and adds a new value. Time spent. ~1h ....
            */
        }
    )

})
