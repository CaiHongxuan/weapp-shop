const formatNumber = (decimal, carryset = 'round', pos = 2) => {
  let result = 0
  switch (carryset) {
    case 'floor':
      result = Math.floor(decimal * Math.pow(10, pos)) / Math.pow(10, pos)
      break
    case 'ceil':
      result = Math.ceil(decimal * Math.pow(10, pos)) / Math.pow(10, pos)
      break
    default:
      result = Math.round(decimal * Math.pow(10, pos)) / Math.pow(10, pos)
      break
  }
  return result
}

const numberPlus = (first, second, carryset = 'round', pos = 2) => {
  let result = 0
  switch (carryset) {
    case 'floor':
      result = Math.floor(first * Math.pow(10, pos) + second * Math.pow(10, pos)) / Math.pow(10, pos)
      break
    case 'ceil':
      result = Math.ceil(first * Math.pow(10, pos) + second * Math.pow(10, pos)) / Math.pow(10, pos)
      break
    default:
      result = Math.round(first * Math.pow(10, pos) + second * Math.pow(10, pos)) / Math.pow(10, pos)
      break
  }
  return result
}

const numberMinus = (first, second, carryset = 'round', pos = 2) => {
  let result = 0
  switch (carryset) {
    case 'floor':
      result = Math.floor(first * Math.pow(10, pos) - second * Math.pow(10, pos)) / Math.pow(10, pos)
      break
    case 'ceil':
      result = Math.ceil(first * Math.pow(10, pos) - second * Math.pow(10, pos)) / Math.pow(10, pos)
      break
    default:
      result = Math.round(first * Math.pow(10, pos) - second * Math.pow(10, pos)) / Math.pow(10, pos)
      break
  }
  return result
}

const numberMultiple = (first, second, carryset = 'round', pos = 2) => {
  let result = 0
  switch (carryset) {
    case 'floor':
      result = Math.floor((first * Math.pow(10, pos)) * (second * Math.pow(10, pos))) / Math.pow(10, pos * 2)
      break
    case 'ceil':
      result = Math.ceil((first * Math.pow(10, pos)) * (second * Math.pow(10, pos))) / Math.pow(10, pos * 2)
      break
    default:
      result = Math.round((first * Math.pow(10, pos)) * (second * Math.pow(10, pos))) / Math.pow(10, pos * 2)
      break
  }
  return result
}

const numberDiv = (first, second, carryset = 'round', pos = 2) => {
  let result = 0
  switch (carryset) {
    case 'floor':
      result = Math.floor((first * Math.pow(10, pos)) / (second * Math.pow(10, pos))) / Math.pow(10, pos)
      break
    case 'ceil':
      result = Math.ceil((first * Math.pow(10, pos)) / (second * Math.pow(10, pos))) / Math.pow(10, pos)
      break
    default:
      result = Math.round((first * Math.pow(10, pos)) / (second * Math.pow(10, pos))) / Math.pow(10, pos)
      break
  }
  return result
}

export default {
  formatNumber,
  numberPlus,
  numberMinus,
  numberMultiple,
  numberDiv
}
