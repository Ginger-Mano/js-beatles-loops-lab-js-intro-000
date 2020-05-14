function theBeatlesPlay(musicians, instruments) {
  let array = [];
  for (let i = 0; i < musicians.length; i++) {
    console.log(`${musicians[i]} plays ${instruments[i]}`);
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array
}// add solution here

function iLoveTheBeatles(num) {
  let array = [];
  num = num + 1;
  do {
  array.push("I love the Beatles!");
}  while (num < 15);
  return array
}
