/*
  speed limit = 70
  every 5 above 70 = 1 point
  Math.floor(1.3)
  12 points -> suspended / 12 points = 12 * 5 = 60, +70 = 130.
*/

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed <= speedLimit + kmPerPoint) {
    console.log("OK");
    return;
  } else {
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12) console.log("License Suspended");
    else console.log("Points ", points);
  }
}

checkSpeed(130);
