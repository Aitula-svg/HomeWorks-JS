// Задание 1



// const student1 = {
//   name:"Jonh",
//   lang: "KG",
//   age: 24
// };

// const student2 = Object.assign({},student1)

// delete student2.age;

// console.log(student1)
// console.log(student2)


// Задание 2

// Global Exetusion context тузулот.
// Жана Global Memory болот,помять ачылганда экиге болунот (steak-стек) (heap-куча).

// Стек (steak) - примитивный тип данныйлар жана ссылкалар сакталат.Бул жерде канча помять керек болгону алдын ала билинет жана фиксированный помять берилет.


// Куча(heap) - не примитивный тип данныйлар объектер жана функциялар сакталат.Бул жерде канча помять керек экени белгисиз жана чексиз(без огроничений) помять болот.

// Задание 3


// const array = [
//   1,
//   true,
//   3,
//  { name: "ZH", hobbies: ["swimming","reading"] },
//  5,
//  "hello",
//  "hi",
// ];

// console.log(array[1]);
// console.log(array[4]);
// console.log(array[3].hobbies);


// array.push("Aiturgan")
// array.unshift("Dansing")
// console.log(array)

// array.shift()
// console.log(array)

// array.indexOf("hello")

// const newArray = array.slice(0,3)

// console.log(newArray,"newArray");

// array.push("footboll");
// console.log(array)

// delete array[4,5];
// console.log(array)

// console.log(array.length);


// Задание 4


const array = [1 ,2, 3, "sdf", 4, "sdf", {}, 3, true, 2, [1, 6, 3,], 1];

let  numArray = [1, 2, 3, 4, 3, 2,[1, 6, 3,], 1];

const sum = numArray => numArray.reduce((res, el) => res + (Array.isArray(el) ? sum(el) : el), 0);

console.log(sum(numArray));






