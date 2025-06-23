//priority 5

/**
 * @param {const} event Agabe, damit die Methode funktioniert.
 * @param {String} add_new_tag_name Name des neuen Tags.
 * @param {String} array_input Das Array der enthaltenen Item-IDs
 */

let extreme_tagging = (event, add_new_tag_name, array_input) => {

   array_input.forEach(item_id => {
        event.add(add_new_tag_name, item_id)
    });
}
