 function distanceFromHqInBlocks(block) {
  const headquarters = 42
  return Math.abs(block - headquarters)
};
function distanceFromHqInFeet(distance) {
    const block = distanceFromHqInBlocks(distance)
    const feet = 264
    return Math.abs(block * feet)
};
function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264
}
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination)
   if(distance < 400) {
    return 0
   }else if(distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02
   }else if(distance <= 2500) {
    return 25
   } else {
    return 'cannot travel that far'
   }
}
