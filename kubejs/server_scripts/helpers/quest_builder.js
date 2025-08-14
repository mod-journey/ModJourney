// priority: 101


/**
 * @constructor for TaskListener
 *
 * @param {string} taskID
 */
function TaskListener(taskID) {
    this.taskID = taskID

    this.prototype = {
        /**
         * @param {Number} maxProgress
         * @returns {TaskListener}
         */
        setMaxProgress: (maxProgress) => {
            this.maxProgress = maxProgress
            return this;
        },


        /**
         * Build FTBQuests task listener event
         */
        build: () => {
            console.debug(`Register task ${this.taskID} with max ${this.maxProgress}`)
            FTBQuestsEvents.customTask(taskID, event => {
                event.maxProgress = this.maxProgress
            })
        }
    }
}

