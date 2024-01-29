const dog = {
  name: 'Лайка',
  type: 'Собака',
  makesound() {
    return 'Гав-гав';
  },
};
const bird = {
  name: 'Колька',
  type: 'Воробей',
  makesound() {
    return 'Чик-чирик';
  },
};
function makeDomestic(isDomestic) {
  console.log(`${this.type} по имени ${this.name} говорит ${this.makesound()}`);

  return {
    ...this,
    isDomestic: isDomestic,
  };
}
//1
const makeDomesticWithBind = makeDomestic.bind(dog);
const domesticDog = makeDomesticWithBind(true);
console.log(domesticDog);
//2
const domesticBirdCall = makeDomestic.call(bird, false);
console.log(domesticBirdCall);
//3
const domesticBirdApply = makeDomestic.apply(bird, [false]);
console.log(domesticBirdApply);
