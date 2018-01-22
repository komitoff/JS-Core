function pointInDimension(input) {
    for (let i = 0; i < input.length; i += 3) {
        let x = input[i]
        let y = input[i + 1]
        let z = input[i + 2]

        if (inVolume(x, y, z)) {
            console.log('inside')
        } else {
            console.log('outside')
        }
    }

    function inVolume(x, y, z) {
        let x1 = 10, x2 = 50
        let y1 = 20, y2 = 80
        let z1 = 15, z2 = 50

        if (x >= x1 && x <= x2) {
            if (y >= y1 && y <= y1) {
                if (z >= z1 && z <= z2) {
                    return true
                }
            }
        }
        return false
    }
}

function roadRadar(input) {
    let roads = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    }

    let driverSpeed = Number(input[0])
    let drivingArea = input[1]
    let speedLimit = roads[drivingArea]
    let overSpeed = driverSpeed - speedLimit
    if (overSpeed > 0 && overSpeed <= 20) {
        console.log('speeding') 
    } else if (overSpeed > 20 && overSpeed <= 40) {
        console.log('excessive speeding')
    } else if (overSpeed > 40) {
        console.log('reckless driving')
    }
}

