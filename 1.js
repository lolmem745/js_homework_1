"use strict";

const numbers = {
  key1: 12,
  key2: 2,
  key3: 4,
  key4: 1,
  key5: -244,
  key6: 0,
  key7: 7,
};

for (const key in numbers) {
  if (numbers[key] >= 3) {
    console.log(numbers[key]);
  }
}
