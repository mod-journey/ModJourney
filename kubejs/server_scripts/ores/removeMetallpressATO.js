/*
    Was das hier kann? Alles was von ATO kommt wird durch einen Regex-Filter gejagt und aus der Presse entfernt.
    Was mir dann z.B. noch aufgefallen ist, das ATO an der Stelle unique Rezpte für die Metallpresse mitliefert
    welche dann entfernt werden. Sind aber weiterhin dann craftable über Handcrafting oder die MJ MetallPress.

*/

let removeMetallpressATO = (event, active, debug) => {

    if (debug) {
        console.log("====> Loeschen von doppelten ATO Rezepten bei der Immersive-Presse <====")
        console.log("====>             Die Debug Ausgabe ist aktiviert                  <=====")
    }

    let incluldeATM = /^("alltheores:).*/

    event.forEachRecipe({ type: "immersiveengineering:metal_press" }, r => {

        if ((r.json.get("result").get("tag") !== null)) {
            if (debug) {
                console.log("Output gefunden:")
                console.log(incluldeATM.test(r.json.get("result").get("tag") + '') + " " + r.json.get("result").get("tag"))
            }

            if (incluldeATM.test(r.json.get("result").get("tag") + '')) {
                event.remove(r.getId())
                if (debug) {
                    console.log("Regex-Test POSITIV, Rezept wurde entfernt.")
                    console.log("--------------------")
                }
            } else {
                if (debug) {
                    console.log("Regex-Test NEGATIV, Rezept wurde NICHT entfernt.")
                    console.log("--------------------")
                }
            }
        }
        else if ((r.json.get("result").get("item") !== null)) {
            if (debug) {
                console.log("Output gefunden:")
                console.log(incluldeATM.test(r.json.get("result").get("item") + '') + " " + r.json.get("result").get("item"))
            }

            if (incluldeATM.test(r.json.get("result").get("item") + '')) {
                event.remove(r.getId())
                if (debug) {
                    console.log("Regex-Test POSITIV, Rezept wurde entfernt.")
                    console.log("--------------------")
                }
            } else {
                if (debug) {
                    console.log("Regex-Test NEGATIV, Rezept wurde NICHT entfernt.")
                    console.log("--------------------")
                }
            }
        }
        else {
            if (debug) console.log("Folgende Rezepte können nicht mit gefiltert werden: " + r.getId())
        }
    })
}