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

function gradToDeg(grad) {

}

distance([1, 1, 0, 5, 4, 0])
distance([3.5, 0, 1, 0, 2, -1])