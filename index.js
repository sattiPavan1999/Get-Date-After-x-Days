const {addDays} = require('date-fns')

const a = function (days) {
  const result = addDays(new Date(2020, 7, 22), days)
  return result
}

module.exports = a
