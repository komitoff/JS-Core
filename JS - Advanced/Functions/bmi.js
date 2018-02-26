function calcBMI(name, age, weight, height) {

  let personObj = {
    name: name,
    personalInfo: {
      age: age,
      weight: weight,
      height: height,
    }
  }

  height = height / 100;
  personObj.BMI = Math.round(weight / (height * height));

  if (personObj.BMI < 18.5) {
    personObj.status = 'underweight'
  } else if (personObj.BMI < 25) {
    personObj.status = 'normal'
  } else if (personObj.BMI < 30) {
    personObj.status = 'overweight'
  } else if (personObj.BMI >= 30) {
    personObj.status = 'obese';
    personObj.recommendation = 'admission required'
 }

  return (personObj);
}