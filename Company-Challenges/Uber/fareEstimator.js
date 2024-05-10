function solution(ride_time, ride_distance, cost_per_minute, cost_per_mile) {
  result = [];
  for (let index = 0; index < cost_per_minute.length; index++) {
    costMinute = cost_per_minute[index];
    costMile = cost_per_mile[index];

    result.push(
      parseFloat((ride_time * costMinute + ride_distance * costMile).toFixed(2))
    );
  }
  return result;
}
