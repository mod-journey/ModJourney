// priority: 101

let QuestBuilder = {
    /**
     *
     * @param {string} taskID Hexadecimal ID of the task in questbook
     * @returns {TaskListener}
     */
    loadTask: (taskID) => {

        /**
         * @constructor for TaskListener
         *
         * @param {string} taskID
         */
        function TaskListener(taskID) {
            this.taskID = taskID
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
                this.maxProgress = maxProgress
                return this;
            },

            /**
             * Set intervall in ticks, how often check-function is running
             *
             * @param   {int} tickIntervall
             * @returns {TaskListener}
             */
            setCheckTimer: function(tickIntervall)  {
                this.checkTimer = tickIntervall
                return this;
            },

            /**
             * Set a function that checks conditions and updates progress
             *
             * @param {$CustomTask$Check$$Type} checkFunction
             * @returns {TaskListener}
             */
            setCheck: function(checkFunction) {
                this.checkFunction = checkFunction
                return this
            },

            /**
             * Build FTBQuests task listener event
             */
            build: function() {
                console.debug(`Register task ${this.taskID} with max ${this.maxProgress}, rum timer every ${this.checkTimer/20} seconds`)
                FTBQuestsEvents.customTask(taskID, event => {
                    event.maxProgress = this.maxProgress
                    event.checkTimer  = this.checkTimer
                    event.check       = this.checkFunction
                })
            }
        }

        return new TaskListener(taskID)
    },

    // loadReward: TODO implement this
}