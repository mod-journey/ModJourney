/**
 *
 * @param {*} event Muss mit angegeben werden.
 * @param {*} min_X Gebe deine minimale X Koordinate an.
 * @param {*} max_X Gebe deine maximale X Koordinate an.
 * @param {*} min_Z Gebe deine minimale Z Koordinate an.
 * @param {*} max_Z Gebe deine maximale Z Koordinate an.
 * @returns True, wenn sich der Spieler in den Koordinaten befindet.
 */
let check_in_region = (event, min_X, max_X, min_Z, max_Z) => {

      //Anlegen eines Objektes mit den notwenidgen Daten vom Spieler.
      let player_observe = {
        x: event.player.x,
        z: event.player.z
    }

    let check_outer_corner_x = player_observe.x >= min_X && player_observe.x <= max_X
    let check_outer_corner_z = player_observe.z >= min_Z && player_observe.z <= max_Z
    let check_outer_corner = check_outer_corner_x && check_outer_corner_z

    return check_outer_corner;
}