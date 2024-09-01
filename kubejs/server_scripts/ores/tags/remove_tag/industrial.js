//priority 10

let ores_industrial_tag = (event) => {

    let industrial_vanilla = [
        "gold",
        "iron",
        "diamond"
    ];


    industrial_vanilla.forEach(name => {
        add_removeTag( event, `industrialforegoing:${name}_gear` )
    });
}