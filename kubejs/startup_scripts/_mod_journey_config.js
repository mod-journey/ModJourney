//priority: 200

let WEEK = HOUR*24*7

global.mjConfig = {
    stages: 'stages',
    times: {
        projectStart: new Date(2025, 9, 31, 18, 0).getTime() / 1000
    }
}

for (let i=1; i<=4; i++) {
    global.mjConfig.times[`week_${i}`] = global.mjConfig.times.projectStart + WEEK * i;
}
