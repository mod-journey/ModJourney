let add_stellaris = (event, active, debug) => {
    if (!active) return;

    event.custom({
        result: {
            "amount": 1,
            "id": "stellaris:fuel"
        },
        input0: {
            "amount": 10,
            "tag": "c:oil/raw"
        },
        type: "immersiveengineering:refinery",
        catalyst: {
            "tag": "c:plates/steel"
        },
        energy: 120
    }).id("immersiveengineering:refinery/rocket_fuel")

}