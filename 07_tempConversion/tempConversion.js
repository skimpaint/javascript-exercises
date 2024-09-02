const convertToCelsius = function(tempf) {
  let rawtemp = (tempf - 32) * 5 / 9
  let tempc = Math.round(rawtemp * 10)/10
  return tempc
};

const convertToFahrenheit = function(tempc) {
  let rawtemp = (tempc * 9 / 5) + 32
  let tempf = Math.round(rawtemp * 10)/10
  return tempf
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
