function triangleArea(a, b, c) {
    let p = (a + b + c) / 2
    let area = Math.sqrt(p * ((p-a)*(p-b)*(p-c)))
    console.log(area)
} 

function oddEven(num) {
    let rem = num % 2
    if (rem == 0)
      console.log("even")
    else if (rem == Math.round(rem))
      console.log("odd")
    else console.log("invalid")
}

function hello(name) {
    console.log(`Hello, ${name}, I am JavaScript!`)
} 

function areaAnePerimeter(w, h) {
    let p = w * h
    let a = 2 * w + 2 * h
    console.log(p)
    console.log(a)
}

function distanceOverTime(params) {
    let v1 = params[0]
    let v2 = params[1]
    let t = (params[2] / 3600) * 1000

    let s1 = v1 * t
    let s2 = v2 * t

    console.log(Math.abs(s1 - s2))
}

function distance(points) {
    let x0 = points[0]
    let y0 = points[1]
    let z0 = points[2]
    let x1 = points[3]
    let y1 = points[4]
    let z1 = points[5]

    let x = Math.pow(x1 - x0, 2)
    let y = Math.pow(y1 - y0, 2)    
    let z = Math.pow(z1 - z0, 2)

    console.log(Math.sqrt(x + y + z))
}

//80/100
function gradToDeg(grads) {
    let grad = Math.abs(grads)
    let deg = 0
    while (grad - 400 > 0) {
        grad -= 400
    }    
    grad /= 400
    deg = 360 * grad
    if (grads < 0) {
        deg = 360 - deg
    }

    if (deg === 360) {
        deg = 0
    }
    console.log(deg)
}

function compoundInterset(arr) {
    let p = arr[0]
    let i = arr[1]
    let n = arr[2]
    let t = arr[3]

    let result = p * Math.pow(( 1 + (i / n)), t * n)
    console.log(result)
}

function dayOfWeek(day) {
    if (day == 'Monday') 
      return 1
    if (day == 'Tuesday') 
      return 2
    if (day == 'Wednesday')
      return 3
    if (day == 'Thursday') 
      return 4
    if (day == 'Friday')
      return 5
    if (day == 'Saturday') 
      return 6
    if (day == 'Sunday') 
      return 7
    return "error"
}


function imperialUnits(foot) {
    let inches = 0
    let feet = 0
    while (foot > 11) {
        foot -= 12
        feet ++
    }

    inches = foot

    console.log(`${feet}'-${inches}"`)
}

function nowPlaying(arr) {
  let artistName = arr[1]
  let song = arr[0]
  let duration = arr[2]

  console.log(`Now Playing: ${artistName} - ${song} [${duration}]`)
}

function composeTag(arr) {
  let src = arr[0]
  let alt = arr[1]

  console.log(`<img src="${src}" alt="${alt}">`)
}

function binToDec(binary) { 
    let decimal = 0;
    for (let i = 0; i < binary.length; i++) {
        decimal += binary[i] * 2 ** (binary.length - i - 1);
    }
    return decimal;
}

function assignProp(arr) {
  let person = {}
  person[arr[0]] = arr[1]
  person[arr[2]] = arr[3]
  person[arr[4]] = arr[5]
  console.log(person)
}

function lastDay(arr) {
    let resultDay = new Date(arr[2], arr[1] - 1, 0)
    return resultDay.getDate();
}

function biggestOfThree(arr) {
    arr.sort((a, b) => {return a - b})
    return arr[arr.length - 1]
}

function pointInRect(arr) {

    let [x, y, xMin, xMax, yMin, yMax] = arr
    let xCondition = x <= xMax && x >= xMin;
    let yCondition = y <= yMax && y >= yMin;

    if (xCondition&&yCondition) {
        console.log('inside');
    } else {
        console.log('outside');
    }
}

function oddNumbers(num) {
  let n = Number(n)
  for (let i = 1; i <= n; i += 2) {
      console.log(i)
  }
}

function dollarTriangle(number) {
  let n = Number(number)

  for (let i = 1; i <= n; i++) {
    console.log("$".repeat(i))
  }
}

dollarTriangle(4)
