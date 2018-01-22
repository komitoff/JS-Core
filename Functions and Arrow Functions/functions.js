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

function xmlFormatter(input) {
    console.log(`<?xml version="1.0" encoding="UTF-8"?>\n<quiz>`)
    for (let i = 0; i < input.length; i += 2) {
        let question = input[i]
        let answer = input[i + 1]
        let tagged = addTags(question, answer)
        console.log(tagged)
    }

    function addTags(question, answer) {
        return `<question>\n${question}\n</question>\n<answer>\n${answer}\n</answer>`
    }

    console.log(`</quiz>`)
}

function cookingByNumber(input) {
    let number = Number(input[0])

    for (let i = 1; i < input.length; i++) {
        switch (input[i]) {
            case 'dice':
                number = dice(number)
                console.log(number)
                break
            case 'chop':
                number = chop(number)
                console.log(number)
                break
            case 'spice':
                number = spice(number)
                console.log(number)
                break
            case 'bake':
                number = bake(number)
                console.log(number)
                break
            case 'fillet':
                number = fillet(number)
                console.log(number)
                break
            default:
                break
        }        
    }

    function chop(number) {
        return number / 2
    }

    function dice(number) {
        return Math.sqrt(number)
    }

    function spice(number) {
        return number + 1
    }

    function bake(number) {
        return number * 3
    }

    function fillet(number) {
        return number - (number * 0.2)
    }
}

function modifyAverage(input) {
    let number = Number(input)
    
    while (true) {
        let result = sum(number)
        if (check(result)) {
            console.log(number)
            break
        } else {
            number = appendNine(number)
        }
    }

    function appendNine(number) {
        let result = number + '' + 9
        return Number(result)
    }
    function check(number) {
        if (number > 5) 
            return true
        return false
    }

    function sum(number) {
        let result = 0
        let cnt = 0
        while (number > 0) {
            result += number % 10
            number = parseInt(number / 10)
            cnt ++
        }
        return result / cnt
    }
}

modifyAverage(101)