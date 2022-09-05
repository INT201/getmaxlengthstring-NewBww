const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  if (arrayOfString == null) return undefined;
  let maxStringLength = 0, resultArray = [];
  arrayOfString.forEach(s => {
    if (s.length > maxStringLength) maxStringLength = s.length;
  });
  for (i = 0, count = 0; i < arrayOfString.length; i++) {
    if (arrayOfString[i].length === maxStringLength) resultArray[count++] = arrayOfString[i]
  }
  return resultArray;
}
module.exports = getMaxLengthString
