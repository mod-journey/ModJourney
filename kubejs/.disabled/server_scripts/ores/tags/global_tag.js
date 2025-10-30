//priority 5

/**
 * Added das ItemTag ore:remove
 * Muss im eventTag Handler definiert werden.
 * @param {String} item_id Eindeutige ItemId an.
 * @example ServerEvents.tags(event,'item', event => {
 *  add_removeTag("minecraft:stone")
 * })
 * add >> ore:remove
 */
let add_removeTag = (event, item_id) => {
    event.removeAllTagsFrom(item_id)
    event.add("ore:remove", item_id)
}