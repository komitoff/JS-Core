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

function validityChecker(input) {

    let isValid = false;
  
    let point1 = {
      x: input[0],
      y: input[1],
    };
  
    let point2 = {
      x: input[2],
      y: input[3],
    };
    let ponitZero = {
      x: 0,
      y: 0,
    };
  
    console.log(`{${point1.x}, ${point1.y}} to {${ponitZero.x}, ${ponitZero.y}} is ${checkDistance(point1,ponitZero)}`);
  
    console.log(`{${point2.x}, ${point2.y}} to {${ponitZero.x}, ${ponitZero.y}} is ${checkDistance(point2,ponitZero)}`);
  
    console.log(`{${point1.x}, ${point1.y}} to {${point2.x}, ${point2.y}} is ${checkDistance(point1, point2)}`);
  
    function checkDistance(firstPoint, secondPoint) {
      let isValid = 'invalid';
  
      let distance = Math.sqrt((firstPoint.x - secondPoint.x) ** 2 + (firstPoint.y - secondPoint.y) ** 2);
  
      if (distance - Math.floor(distance) === 0) {
        isValid = 'valid';
      }
      return isValid;
    }
}
  
function treasureLocator(input) {

    let tuvalu = { x1: 1, y1: 1, x2: 3, y2: 3}

    let tokelau = { x1: 8, y1: 0, x2: 9, y2: 1 }

    let samoa = { x1: 5, y1: 3, x2: 7, y2: 6 }

    let tonga = { x1: 0, y1: 6, x2: 2, y2: 8 }

    let cook = { x1: 4, y1: 7, x2: 9, y2: 8 }

    for (let i = 0; i < input.length; i += 2) {
        let x = Number(input[i])
        let y = Number(input[i + 1])
        console.log(checkPointOnIsland(x, y))
    }

    function checkPointOnIsland(x, y) {
        if (x >= tuvalu.x1 && x <= tuvalu.x2) {
            if (y >= tuvalu.y1 && y <= tuvalu.y2) {
                return 'Tuvalu'
            }
        }

        if (x >= tokelau.x1 && x <= tokelau.x2) {
            if (y >= tokelau.y1 && y <= tokelau.y2) {
                return 'Tokelau'
            }
        }

        if (x >= samoa.x1 && x <= samoa.x2) {
            if (y >= samoa.y1 && y <= samoa.y2) {
                return 'Samoa'
            }
        }

        if (x >= tonga.x1 && x <= tonga.x2) {
            if (y >= tonga.y1 && y <= tonga.y2) {
                return 'Tonga'
            }
        }

        if (x >= cook.x1 && x <= cook.x2) {
            if (y >= cook.y1 && y <= cook.y2) {
                return 'Cook'
            }
        }

        return 'On the bottom of the ocean'
    }
}

function tripLenght(input) {

    let point1 = {
      x: input[0],
      y: input[1],
    }
  
    let point2 = {
      x: input[2],
      y: input[3],
    }
  
    let point3 = {
      x: input[4],
      y: input[5],
    }
  
    let distance12 = findDistance(point1, point2);
    let distance23 = findDistance(point2, point3);
    let distance13 = findDistance(point1, point3);
  
    let minDistance = [distance12, distance23, distance13]
        .sort((a, b) => a - b)
        .slice(0, 2)
        .reduce((a, b) => a + b);
  
    if ((distance12 <= distance13) && (distance13 => distance23)) {
      console.log('1->2->3: ' + minDistance);
    } else if ((distance12 <= distance23) && (distance13 < distance23)) {
      console.log('2->1->3: ' + minDistance);
    } else {
      console.log('1->3->2: ' + minDistance);
    }
  
    function findDistance(firstPoint, secondPoint) {
      let distance = Math.sqrt((firstPoint.x - secondPoint.x) ** 2 + (firstPoint.y - secondPoint.y) ** 2);
      return distance;
    }
}

function testMergeCode() {
    let a = 5
    console.log(a)
    console.log('Mergeee')
    console.log('Rewriting some code in here')
}
