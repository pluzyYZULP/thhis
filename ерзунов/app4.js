const attacker = {
  archer: 30,
  footSoldier: 55,
  cavalry: 10,
  artillery: 3,
  checkChancesToWin: function (defenderObject) {
    let chance = 0;
    let maxchance = Object.keys(defenderObject).length;
    for (let i in defenderObject) {
      if (this[i] > defenderObject[i]) {
        chance++;
      }
    }
    return [chance, maxchance];
  },
  improveArmy: function () {
    for (let i in this) {
      if (typeof this[i] === 'number') {
        this[i] += 5;
      }
    }
  },
  attack: function (defenderObject) {
    let [chancearm, maxchance] = this.checkChancesToWin(defenderObject);
    if (chancearm < 0.7 * maxchance) {
      this.improveArmy();
      alert('Наши шансы равны ' + chancearm + '/' + maxchance + '. Необходимо укрепление!');
    } else {
      alert('Мы усилились! Мы несомненно победим! Наши шансы высоки!');
    }
  },
};

const defender = {
  archer: 33,
  footSoldier: 50,
  cavalry: 40,
  artillery: 10,
};
attacker.improveArmy();
attacker.improveArmy();
const resultcheck = attacker.checkChancesToWin(defender);
console.log(resultcheck);
attacker.attack(defender);
