function result(data) {
    
  let car = (function() {

    let determineEngine = function(pow) {
      let engine = {}
      let power = 0
      let volume = 0
      if (pow <= 90) {
        engine.power = 90
        engine.volume = 1800
      } else if (pow > 90 && pow <= 120) {
        engine.power = 120
        engine.volume = 2400 
      } else if (pow > 120 ) {
        engine.power = 200
        engine.volume = 3500
      }

      return engine
    }

    let determineWheelSize = function(wheelNumber) {
      let wheels = []
      if (wheelNumber % 2 == 0) {
        wheelNumber = wheelNumber - 1
      }
      for (let i = 0; i < 4; i++) {
        wheels.push(wheelNumber)        
      }
      return wheels
    } 

    return {
      model: data.model,
      engine: determineEngine(data.power),
      carriage: {
        type: data.carriage,
        color: data.color
      },
      wheels: determineWheelSize(data.wheelsize)
    }
  })()

  return car
}

console.log(result({
    model: 'VW Golf II',
    power: 110,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 15
}))

