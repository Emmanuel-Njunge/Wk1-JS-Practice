function speedDetector(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed <= speedLimit) {
    console.log("Ok");
    return;
  }

  // Correctly calculate points (whole numbers)
  let points = Math.floor((speed - speedLimit) / kmPerPoint);

  if (points > 12) {
    console.log("License suspended");
  } else {
    console.log(`Points: ${points}`);
  }
}


speedDetector(80);  // Expected: "Points: 2"

