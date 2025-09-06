// priority: 101


let QuestBuilder = {
    /**
     * @var {boolean} debug enables debug messages
     */
    debug: false,

    /**
     * @returns {TaskListener}
     */
    customTask: () => {

        /**
         * @constructor for TaskListener
         */
        function TaskListener() {
            this.setCheckTimer(20)
            this.setMaxProgress(2)
            this.setCheck(taskData => taskData.progress++)
        }

        TaskListener.prototype = {
            /**
             * @returns {Number}
             */
            get maxProgress() {
                return this._maxProgress
            },

            /**
             * @param   {Number} maxProgress
             * @returns {TaskListener}
             */
            setMaxProgress: function(maxProgress)  {
                this._maxProgress = maxProgress
                return this;
            },

            /**
             * @returns {Number}
             */
            get checkTimer() {
                return this._checkTimer
            },

            /**
             * Set intervall in ticks, how often check-function is running
             *
             * @param   {int} tickIntervall
             * @returns {TaskListener}
             */
            setCheckTimer: function(tickIntervall)  {
                this._checkTimer = tickIntervall
                return this;
            },

            /**
             * Set a function that checks conditions and updates progress
             *
             * @param {TaskListener~checkFunction} checkFunction
             * @returns {TaskListener}
             */
            setCheck: function(checkFunction) {
                this._checkFunction = checkFunction
                return this
            },

            /**
             * Build FTBQuests task listener event
             *
             * @param   {string} taskID  Hexadecimal ID of the task in questbook
             * @returns {TaskListener}   A clone of this object to create more quest using similar config
             */
            build: function(taskID) {
                //console.debug(`Add event listener for task ${taskID} with max ${this._maxProgress}, run timer every ${this._checkTimer/20} seconds`)
                if (QuestBuilder.debug) console.log(`Add event listener for task ${taskID} with max ${this._maxProgress}, run timer every ${this._checkTimer/20} seconds`)

                FTBQuestsEvents.customTask(taskID, event => {
                    if (QuestBuilder.debug) console.log(`Running Event ${taskID} with max ${this._maxProgress}, run timer every ${this._checkTimer/20} seconds`)
                    event.maxProgress = this._maxProgress
                    event.checkTimer  = this._checkTimer
                    if (typeof this._checkFunction === 'function') {
                        event.check = (taskData, player) => {
                            this._checkFunction(taskData, player, event, this)
                        }
                    }
                })
                return this.clone();
            },

            /**
             * Creates a clone of an existing object
             *
             * @returns {TaskListener}
             */
            clone: function() {
                return Object.assign(new TaskListener(), this);
            }
        }

        return new TaskListener()
    },

    // loadReward: TODO implement this

    /**
     * Callback function for the checkTimer
     * @callback TaskListener~checkFunction
     * @param {$CustomTask$Data}     taskData
     * @param {$ServerPlayer}        player
     * @param {$CustomTaskKubeEvent} event
     * @param {TaskListener}         builder
     */

    /**
     * Returns the quest-store (Either for matching team or player)
     *
     * @param {$Player|$ServerPlayer} player
     * @param {?$Optional<($Team)>} teamOptional
     *
     * @return $CompoundTag
     */
    getStore: (player, teamOptional) => {
        const questKey = 'quests'
        let playerOrTeamStore = null

        // Load store for player or init store for team
        if (teamOptional && teamOptional.isPresent()) {
            player.server.persistentData
            if (!player.server.persistentData.contains('teams')) {
                player.server.persistentData.put('teams', {})
            }

            let teamsStore = player.server.persistentData.getCompound('teams')
            let teamID = teamOptional.get().teamId.toString()
            if (!teamsStore.contains(teamID)) {
                teamsStore.put(teamID, {})
            }
            playerOrTeamStore = teamsStore.getCompound(teamID)

        } else {
            playerOrTeamStore = player.persistentData
        }

        if (!playerOrTeamStore.contains(questKey)) {
            playerOrTeamStore.put(questKey, {})
        }

        return playerOrTeamStore.getCompound(questKey);
    }
}