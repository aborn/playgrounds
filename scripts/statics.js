// statics slow sql scripts, run it: node statics.js
const data = {"code":200,"msg":"OK","data":[{"日期":"2022-06-03 00:00","慢SQL数":5},{"日期":"2022-06-03 01:00","慢SQL数":2},{"日期":"2022-06-03 02:00","慢SQL数":5},{"日期":"2022-06-03 03:00","慢SQL数":4},{"日期":"2022-06-03 04:00","慢SQL数":6},{"日期":"2022-06-03 05:00","慢SQL数":8},{"日期":"2022-06-03 06:00","慢SQL数":6},{"日期":"2022-06-03 07:00","慢SQL数":5},{"日期":"2022-06-03 08:00","慢SQL数":5},{"日期":"2022-06-03 09:00","慢SQL数":8},{"日期":"2022-06-03 10:00","慢SQL数":4},{"日期":"2022-06-03 11:00","慢SQL数":5},{"日期":"2022-06-03 12:00","慢SQL数":7},{"日期":"2022-06-03 13:00","慢SQL数":7},{"日期":"2022-06-03 14:00","慢SQL数":9},{"日期":"2022-06-03 15:00","慢SQL数":8},{"日期":"2022-06-03 16:00","慢SQL数":4},{"日期":"2022-06-03 17:00","慢SQL数":5},{"日期":"2022-06-03 18:00","慢SQL数":7},{"日期":"2022-06-03 19:00","慢SQL数":5},{"日期":"2022-06-03 20:00","慢SQL数":5},{"日期":"2022-06-03 21:00","慢SQL数":8},{"日期":"2022-06-03 22:00","慢SQL数":4},{"日期":"2022-06-03 23:00","慢SQL数":7},{"日期":"2022-06-04 00:00","慢SQL数":7},{"日期":"2022-06-04 01:00","慢SQL数":6},{"日期":"2022-06-04 02:00","慢SQL数":4},{"日期":"2022-06-04 03:00","慢SQL数":4},{"日期":"2022-06-04 04:00","慢SQL数":4},{"日期":"2022-06-04 05:00","慢SQL数":4},{"日期":"2022-06-04 06:00","慢SQL数":4},{"日期":"2022-06-04 07:00","慢SQL数":12},{"日期":"2022-06-04 08:00","慢SQL数":6},{"日期":"2022-06-04 09:00","慢SQL数":6},{"日期":"2022-06-04 10:00","慢SQL数":6},{"日期":"2022-06-04 11:00","慢SQL数":5},{"日期":"2022-06-04 12:00","慢SQL数":7},{"日期":"2022-06-04 13:00","慢SQL数":9},{"日期":"2022-06-04 14:00","慢SQL数":5},{"日期":"2022-06-04 15:00","慢SQL数":10},{"日期":"2022-06-04 16:00","慢SQL数":8},{"日期":"2022-06-04 17:00","慢SQL数":5},{"日期":"2022-06-04 18:00","慢SQL数":7},{"日期":"2022-06-04 19:00","慢SQL数":6},{"日期":"2022-06-04 20:00","慢SQL数":4},{"日期":"2022-06-04 21:00","慢SQL数":9},{"日期":"2022-06-04 22:00","慢SQL数":4},{"日期":"2022-06-04 23:00","慢SQL数":2},{"日期":"2022-06-05 00:00","慢SQL数":5},{"日期":"2022-06-05 01:00","慢SQL数":4},{"日期":"2022-06-05 02:00","慢SQL数":4},{"日期":"2022-06-05 03:00","慢SQL数":3},{"日期":"2022-06-05 04:00","慢SQL数":3},{"日期":"2022-06-05 05:00","慢SQL数":2},{"日期":"2022-06-05 06:00","慢SQL数":3},{"日期":"2022-06-05 07:00","慢SQL数":3},{"日期":"2022-06-05 08:00","慢SQL数":7},{"日期":"2022-06-05 09:00","慢SQL数":3},{"日期":"2022-06-05 10:00","慢SQL数":3},{"日期":"2022-06-05 11:00","慢SQL数":4},{"日期":"2022-06-05 12:00","慢SQL数":6},{"日期":"2022-06-05 13:00","慢SQL数":4},{"日期":"2022-06-05 14:00","慢SQL数":3},{"日期":"2022-06-05 15:00","慢SQL数":12},{"日期":"2022-06-05 16:00","慢SQL数":5},{"日期":"2022-06-05 17:00","慢SQL数":5},{"日期":"2022-06-05 18:00","慢SQL数":4},{"日期":"2022-06-05 19:00","慢SQL数":5},{"日期":"2022-06-05 20:00","慢SQL数":288},{"日期":"2022-06-05 21:00","慢SQL数":1137},{"日期":"2022-06-05 22:00","慢SQL数":4},{"日期":"2022-06-05 23:00","慢SQL数":9},{"日期":"2022-06-06 00:00","慢SQL数":176},{"日期":"2022-06-06 01:00","慢SQL数":286},{"日期":"2022-06-06 02:00","慢SQL数":7},{"日期":"2022-06-06 03:00","慢SQL数":6},{"日期":"2022-06-06 04:00","慢SQL数":4},{"日期":"2022-06-06 05:00","慢SQL数":5},{"日期":"2022-06-06 06:00","慢SQL数":4},{"日期":"2022-06-06 07:00","慢SQL数":3},{"日期":"2022-06-06 08:00","慢SQL数":4},{"日期":"2022-06-06 09:00","慢SQL数":7},{"日期":"2022-06-06 10:00","慢SQL数":8},{"日期":"2022-06-06 11:00","慢SQL数":16},{"日期":"2022-06-06 12:00","慢SQL数":12},{"日期":"2022-06-06 13:00","慢SQL数":5},{"日期":"2022-06-06 14:00","慢SQL数":7},{"日期":"2022-06-06 15:00","慢SQL数":7},{"日期":"2022-06-06 16:00","慢SQL数":7},{"日期":"2022-06-06 17:00","慢SQL数":5},{"日期":"2022-06-06 18:00","慢SQL数":7},{"日期":"2022-06-06 19:00","慢SQL数":6},{"日期":"2022-06-06 20:00","慢SQL数":6},{"日期":"2022-06-06 21:00","慢SQL数":10},{"日期":"2022-06-06 22:00","慢SQL数":7},{"日期":"2022-06-06 23:00","慢SQL数":9},{"日期":"2022-06-07 00:00","慢SQL数":8},{"日期":"2022-06-07 01:00","慢SQL数":8},{"日期":"2022-06-07 02:00","慢SQL数":9},{"日期":"2022-06-07 03:00","慢SQL数":4},{"日期":"2022-06-07 04:00","慢SQL数":5},{"日期":"2022-06-07 05:00","慢SQL数":20},{"日期":"2022-06-07 06:00","慢SQL数":9},{"日期":"2022-06-07 07:00","慢SQL数":7},{"日期":"2022-06-07 08:00","慢SQL数":10},{"日期":"2022-06-07 09:00","慢SQL数":9},{"日期":"2022-06-07 10:00","慢SQL数":61},{"日期":"2022-06-07 11:00","慢SQL数":6},{"日期":"2022-06-07 12:00","慢SQL数":6},{"日期":"2022-06-07 13:00","慢SQL数":10},{"日期":"2022-06-07 14:00","慢SQL数":18},{"日期":"2022-06-07 15:00","慢SQL数":64},{"日期":"2022-06-07 16:00","慢SQL数":95},{"日期":"2022-06-07 17:00","慢SQL数":81},{"日期":"2022-06-07 18:00","慢SQL数":81},{"日期":"2022-06-07 19:00","慢SQL数":40},{"日期":"2022-06-07 20:00","慢SQL数":6},{"日期":"2022-06-07 21:00","慢SQL数":10},{"日期":"2022-06-07 22:00","慢SQL数":7},{"日期":"2022-06-07 23:00","慢SQL数":7},{"日期":"2022-06-08 00:00","慢SQL数":5},{"日期":"2022-06-08 01:00","慢SQL数":6},{"日期":"2022-06-08 02:00","慢SQL数":8},{"日期":"2022-06-08 03:00","慢SQL数":5},{"日期":"2022-06-08 04:00","慢SQL数":2},{"日期":"2022-06-08 05:00","慢SQL数":24},{"日期":"2022-06-08 06:00","慢SQL数":8},{"日期":"2022-06-08 07:00","慢SQL数":6},{"日期":"2022-06-08 08:00","慢SQL数":7},{"日期":"2022-06-08 09:00","慢SQL数":9},{"日期":"2022-06-08 10:00","慢SQL数":6},{"日期":"2022-06-08 11:00","慢SQL数":12},{"日期":"2022-06-08 12:00","慢SQL数":6},{"日期":"2022-06-08 13:00","慢SQL数":8},{"日期":"2022-06-08 14:00","慢SQL数":3},{"日期":"2022-06-08 15:00","慢SQL数":4},{"日期":"2022-06-08 16:00","慢SQL数":13},{"日期":"2022-06-08 17:00","慢SQL数":5},{"日期":"2022-06-08 18:00","慢SQL数":15},{"日期":"2022-06-08 19:00","慢SQL数":9},{"日期":"2022-06-08 20:00","慢SQL数":6},{"日期":"2022-06-08 21:00","慢SQL数":7},{"日期":"2022-06-08 22:00","慢SQL数":5},{"日期":"2022-06-08 23:00","慢SQL数":4},{"日期":"2022-06-09 00:00","慢SQL数":4},{"日期":"2022-06-09 01:00","慢SQL数":4},{"日期":"2022-06-09 02:00","慢SQL数":5},{"日期":"2022-06-09 03:00","慢SQL数":9},{"日期":"2022-06-09 04:00","慢SQL数":5},{"日期":"2022-06-09 05:00","慢SQL数":25},{"日期":"2022-06-09 06:00","慢SQL数":8},{"日期":"2022-06-09 07:00","慢SQL数":6},{"日期":"2022-06-09 08:00","慢SQL数":6},{"日期":"2022-06-09 09:00","慢SQL数":20},{"日期":"2022-06-09 10:00","慢SQL数":13},{"日期":"2022-06-09 11:00","慢SQL数":7},{"日期":"2022-06-09 12:00","慢SQL数":5},{"日期":"2022-06-09 13:00","慢SQL数":8},{"日期":"2022-06-09 14:00","慢SQL数":8},{"日期":"2022-06-09 15:00","慢SQL数":4},{"日期":"2022-06-09 16:00","慢SQL数":1},{"日期":"2022-06-09 17:00","慢SQL数":0},{"日期":"2022-06-09 18:00","慢SQL数":0},{"日期":"2022-06-09 19:00","慢SQL数":2},{"日期":"2022-06-09 20:00","慢SQL数":0},{"日期":"2022-06-09 21:00","慢SQL数":2},{"日期":"2022-06-09 22:00","慢SQL数":2},{"日期":"2022-06-09 23:00","慢SQL数":0},{"日期":"2022-06-10 00:00","慢SQL数":0}]}
const arr = data.data;
const sum = arr.reduce((accumulator, object) => {    return accumulator + object['慢SQL数'];
}, 0);

console.log('result:' + sum)
