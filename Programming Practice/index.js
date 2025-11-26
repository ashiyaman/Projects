document.querySelector('h1').textContent = 'Array Methods Practice'

//1. Given an array of numbers, compute and print the total sum.
const nums = [5, 10, 15, 20];
const sum = nums.reduce((acc, curr) => acc + curr, 0)
console.log(sum)
// expected result: 50

//2.Given an array of numbers, find the product of all elements.
const nums1 = [2, 3, 4];
const product = nums1.reduce((acc, curr) => acc * curr, 1) 
console.log(product)
// expected result: 24

//3. Given an array, calculate the average of a numeric array.
const scores = [80, 90, 70, 100];
const avg = scores.reduce((acc, curr) => acc + curr, 0) / scores.length
console.log(avg)
// expected result: 85

//4. Given a two-dimensional array, flatten it by one level.
const nested = [[1, 2], [3, 4], [5]];
const flattenNestedArray = ([a, b, c]) => [...a, ...b, ...c]
console.log(flattenNestedArray(nested))
// expected result: [1, 2, 3, 4, 5]

//5. Given an array of objects, pull out the names into a new array.
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Carol' }
];
const names = users.map(user => user.name)
console.log(names)
// expected result: ['Alice', 'Bob', 'Carol']

//6. Given an array of strings, build an object that counts how many times each string appears.
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const fruitCount = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1
    return acc
}, {})
console.log(fruitCount)
// expected result: { apple: 3, banana: 2, orange: 1 }

//7. Given an array of objects, group them by type property.
const pets = [
  { name: 'Spot', type: 'dog' },
  { name: 'Mittens', type: 'cat' },
  { name: 'Rover', type: 'dog' },
  { name: 'Whiskers', type: 'cat' }
];

const grouped = pets.reduce((acc, {name, type}) => {
    acc[type] = acc[type] || []
    acc[type].push({name, type})
    return acc
}, {})
console.log(grouped)
// expected result:
// {
//   dog: [ { name: 'Spot', type: 'dog' }, { name: 'Rover', type: 'dog' } ],
//   cat: [ { name: 'Mittens', type: 'cat' }, { name: 'Whiskers', type: 'cat' } ]
// }


//8. Given an array of objects, build an object keyed by a unique identifier (sku).
const products = [
  { sku: 'A123', name: 'Socks', price: 5 },
  { sku: 'B456', name: 'Hat', price: 15 }
];
const productObj = products.reduce((acc, {sku, name, price}) => {
    acc[sku] = {sku, name, price}
    return acc
}, {})

console.log(productObj)
// expected result:
// {
//   A123: { sku: 'A123', name: 'Socks', price: 5 },
//   B456: { sku: 'B456', name: 'Hat', price: 15 }
// }

//9. Given the array of votes, calculate how many votes did each candidate receive?
const votes = [
  'Alice', 'Bob', 'Alice', 'Carol',
  'Bob', 'Alice', 'Carol', 'Bob'
];
const noOfVotes = votes.reduce((acc, person) => {
    acc[person] = (acc[person] || 0 ) + 1
    return acc
}, {})
console.log(noOfVotes)
// expected result:
// { Alice: 3, Bob: 3, Carol: 2 }

//10. Given the array of pet objects, how many pets are there of each type?
const pets1 = [
  { name: 'Fido', type: 'dog' },
  { name: 'Mittens', type: 'cat' },
  { name: 'Rex', type: 'dog' },
  { name: 'Whiskers', type: 'cat' },
  { name: 'Goldie', type: 'fish' }
];
const petCount = pets1.reduce((acc, {name, type}) => {
    acc[type] = (acc[type] || 0) + 1
    return acc
}, {})
console.log(petCount)
// expected result:
// { dog: 2, cat: 2, fish: 1 }

//11. Given the sales records, how much sales amount was there in each region?
const sales = [
	{ region: 'North', amount: 100 },
	{ region: 'South', amount:  80 },
	{ region: 'North', amount: 120 },
	{ region: 'East',  amount:  75 },
	{ region: 'South', amount:  20 }
]
const regionSales = sales.reduce((acc, {region, amount}) => {
    acc[region] = (acc[region] || 0) + amount
    return acc
}, {})
console.log(regionSales)
// expected result:
// { North: 220, South: 100, East: 75 }

//12. Given the string 'mississippi', how many times does each character appear?
// expected result:
const str = 'mississippi'
console.log([...str])
const charCount = [...str].reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1
    return acc
}, {})
console.log(charCount)
// { m: 1, i: 4, s: 4, p: 2 }

//13. Given an array. Return only the users who are active.
const users1 = [
  { name: 'Anjali', active: true },
  { name: 'Raj', active: false },
  { name: 'Meena', active: true }
];
console.log(users1
    .filter(user => user.active)
    .map(user => user.name))
// Expected Output
//["Anjali", "Meena"]

//14. You are given a list of volunteers and the number of hours they contributed to an event. Return an object of volunteers who contributed more than 8 hours in total.

const participation = [
  { name: 'Rahul', hours: 6 },
  { name: 'Neha', hours: 4 },
  { name: 'Ankit', hours: 3 },
  { name: 'Rahul', hours: 5 },
  { name: 'Neha', hours: 2 },
  { name: 'Anjali', hours: 9 }
]
 
const totalHours = participation.reduce((acc, {name, hours}) => {
    acc[name] = (acc[name] || 0) + hours
    return acc
}, {})

const volunteersWithMoreHours = Object.fromEntries(Object.entries(totalHours).filter(([_ , hours]) => hours > 8))
console.log(volunteersWithMoreHours)
// Expected Output:
//{
 // Rahul: 11,
 // Anjali: 9
//}

//15. Given an array. Return executives whose total sales amount is more than 7000.
const sales1 = [
  { executive: 'Rohit', amount: 5000 },
  { executive: 'Sneha', amount: 4000 },
  { executive: 'Rohit', amount: 3000 },
  { executive: 'Sneha', amount: 1000 },
  { executive: 'Arjun', amount: 6000 }
];

const totalSales = sales1.reduce((acc, {executive, amount}) => {
    acc[executive] = (acc[executive] || 0) + amount
    return acc
}, {})
const executiveWithMoreThan700 = Object.fromEntries(Object.entries(totalSales).filter(([_, amount]) => amount > 7000))
console.log(executiveWithMoreThan700)
// Expected Output
//{
//  Rohit: 8000
//}

