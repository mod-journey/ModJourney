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
             * @param   {Number} maxProgress
             * @returns {TaskListener}
             */
            setMaxProgress: function(maxProgress)  {
                this._maxProgress = maxProgress
                return this;
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
             * @returns {TaskListener}
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
                return this
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
}