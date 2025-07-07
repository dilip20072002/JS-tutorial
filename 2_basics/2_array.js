const mHeros = ["Ironman", "Hulk", "Thor", "CA"]
const dcHeros = ["Batman", "Flash", "Superwomen"]

mHeros.push(dcHeros)
console.log(mHeros);

const mixHeros = mHeros.concat(dcHeros)         // concat method
console.log(mixHeros);

console.log([...mHeros, ...dcHeros]);         // Spread method

const newArr = [1,2,3,[4,5,6],8,[19,23,[52]]]
console.log(newArr.flat(Infinity));             // Flat method

console.log(Array.isArray("Dilip"));
console.log(Array.from("Dilip"));           // From method

const score1 = 99
const score2 = 95
const score3 = 90

console.log(Array.of(score1, score2, score3));        // Of method