const distanceFromHqInBlocks = (location) => {
   const hq = 42
   const totalDistance = location > hq? (location - hq) : (hq - location)
   return totalDistance
}

const distanceFromHqInFeet = (location) => {
    const feet = distanceFromHqInBlocks(location) * 264
    return feet
}    
    

const distanceTravelledInFeet = (start, destination) => {
    if (start < destination) {
        return (destination - start) * 264
    }
    else if (start > destination) {
        return (start - destination) * 264
    }
}

const calculatesFarePrice = (start, destination) => {
    const distance = distanceTravelledInFeet(start, destination)
    if (distance < 400) {
        return 0
    } else if (distance > 400 && distance < 2000) {
        return (distance - 400) * .02
    } else if (distance > 2000 && distance < 2500) {
        return 25
    } else if (distance > 2500) {
        return 'cannot travel that far'
    }
}