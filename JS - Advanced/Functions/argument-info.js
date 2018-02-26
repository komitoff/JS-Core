function args() {
  let container = new Map();

  for (const value of arguments) {
    console.log(`${typeof(value)}: ${value}`);
    if (!container.has(typeof (value))) {
    container.set(typeof (value), 0);
    }
    let currentCount = Number(container.get(typeof (value)));
    container.set(typeof (value), ++currentCount);
  }

  container = new Map([...container].sort((a, b) => {
    return b[1] - a[1];
  }));
 
  for (const element of [...container]) {
    console.log(`${element[0]} = ${element[1]}`);
  }
}