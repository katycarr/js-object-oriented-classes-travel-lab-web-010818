
class Driver {
  constructor(name, dateString) {
    this.name = name
    this.startDate = new Date(dateString)
  }
  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  blocksTravelled() {
    let streets = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let startIndex = eastWest.indexOf(this.beginningLocation.horizontal)
    let endIndex = eastWest.indexOf(this.endingLocation.horizontal)
    let avenues = Math.abs(startIndex-endIndex)
    return streets+avenues
  }
  estimatedTime(peak) {
    peak = peak || false
    if (peak) {
      return this.blocksTravelled()/2
    } else {
      return this.blocksTravelled()/3
    }
  }
}
