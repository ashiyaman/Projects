document.querySelector('h1').textContent = 'Spead and Rest'

//1. Write an arrow function that takes any number of strings and concatenates them into one string.

let concatenateStrings = (...rest) => rest.join(' ')

console.log(concatenateStrings("Hello", "world", "!")); 
// Output: Hello world !

console.log(concatenateStrings("JavaScript", "is", "fun", "to", "learn.")); 
// Output: JavaScript is fun to learn.

//2. Write an arrow function that uses the rest parameter to calculate the product of numeric values.

const calculateProduct = (...nums) => {
    let product = 1
    for(let i of nums){
        product *= i    
    }
    return product
}
console.log(calculateProduct(2, 3, 4)); // Output: 24
console.log(calculateProduct(5, 2, 1, 3)); // Output: 30

//3. Write an arrow function that takes two arrays and merges them into one.

const mergeArrays = (arr1, arr2) => [...arr1, ...arr2]

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
// Output: [1, 2, 3, 4, 5, 6]

console.log(mergeArrays(["a", "b"], ["c", "d", "e"]));
// Output: ["a", "b", "c", "d", "e"]

//4. Write an arrow function that uses the rest parameter to concatenate strings with a specified separator.

const concatenateWithSeparator = (seperator, ...strArray) => strArray.join(seperator)

console.log(concatenateWithSeparator('-', 'apple', 'orange', 'banana'));
// Output: apple-orange-banana 

console.log(concatenateWithSeparator(', ', 'red', 'green', 'blue', 'yellow'));       
// Output: red, green, blue, yellow

//5. Write an arrow function that takes an object and extracts its properties using destructuring.

const extractObjectValues = ({name, age}) => `Name: ${name}, Age: ${age}`

console.log(extractObjectValues({ name: "Alice", age: 25 }));
// Output: Name: Alice, Age: 25

console.log(extractObjectValues({ name: "Bob", age: 30 }));
// Output: Name: Bob, Age: 30

//6. Write an arrow function that takes an array and extracts its elements using destructuring.

const extractArrayValues = ([a, b, c]) => `Values: ${a}, ${b}, ${c}`

console.log(extractArrayValues([1, 2, "Hello", 3]));
// Output: Values: 1, 2, Hello

console.log(extractArrayValues(["apple", "orange", "banana"]));
// Output: Values: apple, orange, banana

//7.  Write an arrow function that takes a nested object and extracts values using destructuring.

const extractNestedValues = ({data: {firstName, lastName, age}}) => `${firstName} ${lastName} will be ${age + 5} old in five years.`

console.log(extractNestedValues({data: { firstName: "Priya", lastName: "Gupta", age: 20 }}));
// Output: Priya Gupta will be 25 years old in five years.

console.log(extractNestedValues({data: { firstName: "John", lastName: "Doe", age: 25 }}));
// Output: John Doe will be 30 years old in five years.

//8.  Write a function that takes an object, renames and restructures its properties using restructuring.

const printInfo = ({name: {firstName: personFirstName, lastName: personLastName}, department: personDepartment}) => `${personFirstName} ${personLastName} is in ${personDepartment} department.`

console.log(printInfo({ name: { firstName: "John", lastName: "Doe" }, department: "IT" }));
// Output: John Doe works in IT department.

console.log(printInfo({ name: { firstName: "Alice", lastName: "Smith" }, department: "Legal" }));
// Output: Alice Smith works in Legal department.

//9.Write a function that takes an object, provides default values, and extracts their values using restructuring.

const printUserDetails = ({name='anonymous', post='Hello World!'}) => `${name} posted "${post}"`

console.log(printUserDetails({ name: "John", username: "john", post: "Hello this is John. I am from England." }));
// Output: john posted "Hello this is John. I am from England."

console.log(printUserDetails({}));
// Output: anonymous posted "Hello World!"

//10.Write an arrow function that uses template literals and the ternary operator to check if a given number is even or odd. If the number is even, display the message "It's an even number." If it's odd, display the message "It's an odd number."

const checkEvenOdd = (num) => num % 2 === 0 ? `${num} is an even number.` : `${num} is an odd number.`

console.log(checkEvenOdd(8));  
// Output: 8 is an even number.

console.log(checkEvenOdd(15));
// Output: 15 is an odd number.

//11. Write an arrow function that uses template literals and the ternary operator to determine if a person is eligible for a discount based on the total purchase amount. If the purchase amount is greater than $100 and the person is a premium customer, provide a message saying, "You are eligible for a 10% discount."  For others, show the message, "You are eligible for a 5% discount."

const checkDiscountEligibility = (amount, isEligible) => `You are eligible for ${amount > 100 && isEligible ? `10%` : `5%`} discount.`

console.log(checkDiscountEligibility(120, true));
// Output: You are eligible for a 10% discount. 

console.log(checkDiscountEligibility(90, false));
// Output: You are eligible for a 5% discount.

//12.  Write an arrow function that takes two objects and uses the spread operator to merge them into a new object.

const spreadObjects = (obj1, obj2 ) => ({...obj1, ...obj2})

const object1 = { name: 'Alice', age: 30 }; 
const object2 = { city: 'London', country: 'UK' };

console.log(spreadObjects(object1, object2))

// Output: { name: 'Alice', age: 30, city: 'London', country: 'UK' }

//13. Write an arrow function that takes an object and a new key-value pair, and adds that new key-value pair to the object without modifying the original object.

const addKeyValuePair = (givenObj, key, value) => ({...givenObj, [key]: value})

const object = { name: 'Dave', age: 25 }; 

console.log(addKeyValuePair(object, 'city', 'New York')); 
// Output: { name: 'Dave', age: 25, city: 'New York' }