/**
 * @param event Muss mit angegeben werden.
 * @returns true => Wenn Es sich um den offiziellen ModJourneyServer handelt.
 */
let mod_jounrey_server_check = (event) => {
    let is_server = (
        event.player.getLevel().toString() === "ServerLevel[modjourney_server]" &&
        event.player.level.getDimension().toString() === "minecraft:overworld"
    );

    return is_server;
}