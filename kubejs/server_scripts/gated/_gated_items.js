//priority 200
let SECONDS_PER_MINUTE = 60
let SECONDS_PER_HOUR   = SECONDS_PER_MINUTE * 60
let SECONDS_PER_DAY    = SECONDS_PER_HOUR * 24
let SECONDS_PER_WEEK   = SECONDS_PER_DAY * 7

/**
 * load mjConfig from global and create a local constant for better code hinting
 */

/** @deprecated use <code>mjConfig.stages</code> instead */
const stages = global.mjConfig.stages
const mjConfig = global.mjConfig
