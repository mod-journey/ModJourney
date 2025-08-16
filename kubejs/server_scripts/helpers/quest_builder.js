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
            this.setMaxProgress(2)
        }

        TaskListener.prototype = {
            /**
             * @param {Number} maxProgress
             * @returns {TaskListener}
             */
            setMaxProgress: function(maxProgress)  {
                this.maxProgress = maxProgress
                return this;
            },


            /**
             * Build FTBQuests task listener event
             */
            build: function() {
                console.debug(`Register task ${this.taskID} with max ${this.maxProgress}`)
                FTBQuestsEvents.customTask(taskID, event => {
                    event.maxProgress = this.maxProgress
                })
            }
        }

        return new TaskListener(taskID)
    },

    // loadReward: TODO implement this
}