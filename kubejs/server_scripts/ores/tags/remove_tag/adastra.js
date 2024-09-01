//priority 10

let ores_ad_astra_tag = (event) => {

    let astra_plates = [
        "ad_astra:iron_plate",
        "ad_astra:iron_rod",
        "ad_astra:steel_plate",
        "ad_astra:steel_block",
        "ad_astra:steel_nugget",
        "ad_astra:steel_ingot"
    ]

    astra_plates.forEach(name => {
        add_removeTag(event, name)
    });
}