function manageAirport(input = []) {
  let leftPlanes = []
  let destinations = { planes: []}

  for (const item of input) {
    let tokens = item.split(' ')
    let planeId = tokens[0]
    let destinationName = tokens[1]
    let passengersCount = Number(tokens[2])
    let action = tokens[3]
    
    if (!leftPlanes.includes(planeId) && action === 'land') {
      leftPlanes.push(planeId)
    }

    if (!destinations.planes.includes(planeId)) {
      destinations.planeId = planeId
      destinations.destinationName = destinationName;
      destinations.arrivals = action === 'land' ? 0 : passengersCount
      destinations.departures = action === 'land' ? passengersCount : 0 
      destinations.planes.push(planeId)
    } else {
      
    }
    
  }
  console.log(leftPlanes)
  console.log(destinations)
  console.log(destinations.planes)
}

// let leftPlanes = []
// let destinations = {
//   planeId: 'Washington',
//   arrivals: 450,
//   departures: 0,
//   planes: [
//       -- 'A1',
//       -- 'A2'
//   ]
// }

manageAirport([
    "Boeing474 Madrid 300 land",
    "AirForceOne WashingtonDC 178 land",
    "Airbus London 265 depart",
    "ATR72 WashingtonDC 272 land",
    "ATR72 Madrid 135 depart"
    ])