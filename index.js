function produceDrivingRange(blockRange) {
  return function(start, end){
    let distance = (parseInt(end) - parseInt(start));
    let difference = blockRange - distance;
    if (difference > 0) {
      return `within range by ${difference}`
    } else {
      return `${-difference} blocks out of range`
    }
  };
}

  function produceTipCalculator(fare){
    return function(percentage) {
      return fare * percentage
    }
  }

  function createDriver() {
    let driverId = 0
    return class {
      constructor(name) {
        this.name = name
        this.id = ++driverId
      }
    }
  }
