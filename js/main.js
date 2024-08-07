// 1-masala
// const arr = [
//     { id: 1, age: 20, name: "Botir", hobby: "Football" },
//     { id: 2, age: 22, name: "Anvar", hobby: "Basketball" },
//     { id: 3, age: 20, name: "Shohrux", hobby: "Basketball" },
//     { id: 4, age: 22, name: "Akram", hobby: "Football" }
// ];

// const grouped = arr.reduce((acc, curr) => {
//     const key = `${curr.age}-${curr.hobby}`;
//     if (!acc[key]) {
//         acc[key] = [];
//     }
//     acc[key].push(curr);
//     return acc;
// }, {});

// const result = Object.values(grouped).filter(group => group.length > 1);
// console.log(result);

// 2-masala
const numbers = [3, 4, 3, 2, 3, 4, 5, 6, 3, 5, 6, 7, 8, 9, 5, 4, 3];

const duplicates = numbers.filter((item, index) => numbers.indexOf(item) !== index);
const uniqueDuplicates = [...new Set(duplicates)];
console.log(uniqueDuplicates);


// 3-masala
const nums = [22, 112, 3, 4, 222, 123, 43];

const maxNum = Math.max(...nums);
const newArray = [maxNum, ...nums];
console.log(newArray);

// 4-masala
let size = parseInt(prompt("Size kiriting:"));
let namesArray = [];

for (let i = 0; i < size; i++) {
    namesArray.push(prompt("Ism kiriting:"));
}

let newName = prompt("Yana ism kiriting:");
if (!namesArray.includes(newName)) {
    namesArray.push(newName);
}

console.log(namesArray);

// 5-masala
let number = parseInt(prompt("Son kiriting:"));
let array = [];

for (let i = 0; i < number; i++) {
    array.push(i);
}

array.reverse();
console.log(array);



// 1_masala
function addNumbers(num1, num2) {
    return num1 + num2;
}

const firstNumber = parseFloat(prompt("Birinchi sonni kiriting:"));
const secondNumber = parseFloat(prompt("Ikkinchi sonni kiriting:"));
const result = addNumbers(firstNumber, secondNumber);
console.log("Natija:", result);


// 2_masala
function sumArray(numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

const numberArray = [1, 2, 3, 4, 5];
const total = sumArray(numberArray);
console.log("Arraydagi sonlar yig'indisi:", total);

// 3_masala
function filterPositiveNumbers(arr) {
    return arr.filter(num => num > 0);
}

const mixedArray = [-1, 2, -3, 4, 5, -6];
const positiveArray = filterPositiveNumbers(mixedArray);
console.log("Musbat sonlar:", positiveArray);

// 4_masala
const arr = ["5", 2, "true", "salom"];

const convertedArray = arr.map(item => {
    if (!isNaN(item) && item.trim() !== "") {
        return Number(item);
    }
    return item;
});

console.log("O'zgartirilgan array:", convertedArray);

// 5_masala
const personArr = [
    { name: "Abdulloh", age: 19, status: false },
    { name: "Ibrohim", age: 20, status: true },
    { name: "Shodiyor", age: 18, status: false }
];

for (const person of personArr) {
    if (!person.status) {
        console.log("Statusi false bo'lgan o'quvchi:", person.name);
    }
}

// 6_masala
function calculateAverage(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
}

const numberss = [];
for (let i = 0; i < 3; i++) {
    numberss.push(parseFloat(prompt("Son kiriting:")));
}

const average = calculateAverage(numberss);
console.log("O'rtacha arifmetik:", average);


// 7_masala
let array1 = [4, 3, 2, 1];

if (array1[0] % 2 === 0) {
    array1[0] += 1; // Juft sonni toqga o'zgartirish
} else {
    array1[0] += 1; // Toq sonni juftga o'zgartirish
}

console.log("O'zgartirilgan array:", array);

// 8_masala
const array2 = ["apple", "banana", "orange"];
const array3 = ["banana", "kiwi", "apple"];

const commonValues = array2.filter(value => array3.includes(value));
console.log("Bir xil qiymatlar:", commonValues);



