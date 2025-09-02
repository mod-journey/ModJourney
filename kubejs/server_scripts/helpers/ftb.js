// priority: 102
const $FTBTeamsAPI = Java.loadClass("dev.ftb.mods.ftbteams.api.FTBTeamsAPI");

/**
 * Manger-Object for Feed The Beast apis
 *
 * Returns objects as singletons to increase loading performance
 */
const FTB = {

    /**
     * @returns {FTBTeamsAPIImpl}
     */
    teamsApi: function () {
        if (!this._FTBTeamsApi) {
            this._FTBTeamsApi = $FTBTeamsAPI.api()
        }
        return this._FTBTeamsApi
    },

    /**
     * True, when team manager is fully loaded
     * @returns {boolean}
     */
    get isTeamManagerLoaded() {
        return this.teamsApi().managerLoaded;
    },

    /**
     * Returns the team manager when it is loaded, null otherwise
     *
     * @returns {$TeamManager|null}
     */
    getTeamManager: function () {
        if (!this._FTBTeamsManager && this.isTeamManagerLoaded) {
            this._FTBTeamsManager = this.teamsApi().getManager()
        }
        return this._FTBTeamsManager
    }
}

/**
 * @typedef {object} FTBTeamsAPIImpl see [class dev.ftb.mods.ftbteams.api.FTBTeamsAPI]
 *
 * @property {boolean} managerLoaded - when teamManager is fully loaded
 * @property {() => $TeamManager|null} getManager Returns the teamManger when it is loaded, null otherwise
 *
 * @todo add remaining methods definitions here - use `console.log(Object.keys(FTBApi))`
 *
 */