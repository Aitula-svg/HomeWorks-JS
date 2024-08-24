// Задание 2

// Коллбек (Callback)

// Бир функцияга (экинчи же башка любой фунция)аргумент катары берилип жатса жана ал параметрден алып чакырылып жатса,
//  ошол коллбек фунция деп айтылат.
// Аргумент катары берилип жатса ал коллбек.

// Хай ордер (Higher order )

// Озуно коллбек функция алса ал хай ордер функция болот.
// Аргумент катары алынып жатса ал хай ордер




// Задание 3

// Фото 1

// const numbers = [1, 2, 3, 4, 5];

// const resultMap = numbers.map((element)=> element ** 2);
// console.log(resultMap);




// Фото 2

// const users = [
//   { firstName: "Jonh", lastName: "Obama", age: "34", gender: "male" },
//   { firstName: "Ariana", lastName: "Grande", age: "22", gender: "female" },
//   { firstName: "Naruto", lastName: "Uzumaki", age: "19", gender: "male" },
//   { firstName: "Cristiano", lastName: "Ronaldo", age: "38", gender: "male" },
// ];

// const array = users.map((item) => {
//   return {
//     fullName: item.firstName + "" + item.lastName,
//     age: item.age,
//     gender: item.gender,
//   };
// });
// console.log(array);


// Фото 3

// const numbers = [1, 2, 3, 4, 5, 4, 8, 34, 6];

// const filterNumbers = numbers.filter((item) => {
//     const items = item % 2;
//     return items === 0
// })

// console.log(filterNumbers)




// Фото 4


// const users = [
//     {fisrtName:"Jonh", lastName:"Obama", age: 34, gender:"male"},
//     {fisrtName:"Ariane", lastName:"Grande", age: 18, gender:"female"},
//     {fisrtName:"Naruto", lastName:"Uzumaki", age: 19, gender:"male"},
//     {fisrtName:"Kakashi", lastName:"Hatake", age: 28, gender:"male"},
//     {fisrtName:"Sakura", lastName:"Chan", age: 18, gender:"female"},
// ]

// const newUsers = users.filter ((item) => { 
//     if(item.fisrtName == "Ariane" || item.fisrtName == "Sakura") {
//         return true;
//     }  else {
//         return false;
//     }
// })
// console.log(newUsers)


// Фото 7

const users = [
    {fisrtName:"Jonh", lastname:"Obama", age: 34, gender:"male"},
    {fistName:"Ariane",lastName:"Grande", age: 18, gender:"female"},
    {firtName:"Naruto", lastName:"Uzumaki", age: 19, gender:"male"},
    {firstName:"Kakashi", lastName:"Hatake", age: 28, gender:"male"},
    {ferstName:"Sakura", lastName:"Chan", age: 18, gender:"male"}
]

const findUsers = users.find((item) => item.age === 19);


console.log(findUsers)


// фото 8

// const numbers = [1, 2, 3, 4, 5, 4, 8, 34, 6];

// const resultIndex = numbers.findIndex((element) => element == 34);
// console.log(resultIndex)


// фото 5

// const  numbers = [1, 2, 3, 4, 5, 4, 8, 34, 3, 6];

// const resultreduce = numbers.reduce((acc, item ) =>  {
//     return acc + item;
// })
// console.log(resultreduce)


// фото 6

const numbers = [1, 2, 3, 4, 5, 4, 8, 34, 3, 6];

let i = 0;

numbers.forEach((item) => {
    if (item % 2  == 1) {
        return i += item;
    }
});

console.log(i);
























