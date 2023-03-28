function speedDetector(speed) {
    const speedLimit = 70;
    const demeritPointsPer5Kmph = 1;
  
    if (speed < 70 + 5) {
      return "Ok";
    }

    const diff = speed - speedLimit;
    const demeritPoints = Math.floor(diff / 5) * demeritPointsPer5Kmph;
  
    if (demeritPoints >= 12) {
      return "License suspended"
    } else {
      return demeritPoints;
    }
  }
  