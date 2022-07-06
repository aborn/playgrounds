// run this script: 
// method 1: use ts-node (slow)
//   $ ts-node datemonth.ts
// method 2: watch mode generate js file, and use node file.js
//   $ tsc -w -p .
//   $ node file.js

export const autoGenYearMoths = () => {
    const result = []
    const now = new Date();
    const beginDate = new Date()
    beginDate.setFullYear(2022, 5, 1)   // 2022.06.01
    let cond = new Date(beginDate.setMonth(beginDate.getMonth() + 1))
    while(cond <= now) {
        result.unshift(generateMonthObj(cond))
        cond = new Date(cond.setMonth(cond.getMonth() + 1))
    }
    return result
}

export const generateMonthObj = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const monthTag = '' + (month > 9 ? month : '0' + month)
    return {
        name: year + '年' + month + '月刊',
        tag: year + monthTag,
        year
    }
}

const history = [
    { name: '2022年6月刊', tag: '202206', year: 2022 },
    { name: '2022年5月刊', tag: '202205', year: 2022 }]
let rs = autoGenYearMoths()
rs.push(...history)


console.log('--------')
console.log(rs)
console.log(rs.slice(0, 1))
