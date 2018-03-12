class Player {
  constructor(nickName) {
    this.nickName = nickName;
    this._scoreCount = 0;
    this._scores = [];
  }

  addScore(score) {
    if (typeof score == 'number') {
      this._scores.push(score);
    }
  }

  get scoreCount() {
    return this._scores.length;
  }

  get highestScore() {
    return this._scores.sort((a, b) => a - b).slice(-1).pop();
  }

  get topFiveScore() {
    return this._scores.sort((x, y) => y - x).slice(0, 5)
  }

  toString() {
    return this.nickName + ': [' + this._scores.sort((x, y) => y - x) + ']';
  }
}

let peter = new Player("Peter");
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log(peter.toString());
console.log('Score count: ' + peter.scoreCount);

peter.addScore(450);
peter.addScore(200);
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);

peter.addScore(2000);
peter.addScore(300);
peter.addScore(50);
peter.addScore(700);
peter.addScore(700); 
peter.addScore('ivan')
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
console.log('Score count: ' + peter.scoreCount);

// console.log();
// let maria = new Player("Maria").addScore(350).addScore(779).addScore(180);
// console.log('Highest score: ' + maria.highestScore);
// console.log(`Top 5 score: [${maria.topFiveScore}]`);
// console.log('' + maria)