"use strict";

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];

const daysOfWeek = en.reduce((obj, key, index) => {
  obj[key] = ru[index];
  return obj;
}, {});

console.log(daysOfWeek);
