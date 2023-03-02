import * as Timer from "./clock.js";

console.log(Timer.default())
console.log(Timer.minuteHand())
console.log(Timer.secondHand())

console.log(`Time is ${Timer.default()}:${Timer.minuteHand()}:${Timer.secondHand()} orr \n ${Timer.minuteHand()} minutes past ${Timer.default()} (${Timer.default()-12})`)


