// Задание 1

const computer = [
   { title:"Macbook Air M1",
    price: 85000,
   },
   {
    title:"Dell",
    price:65000,
   },
   {
    title:"Asus Zenbook",
    price:45000,
   },
   {
    title:"Acer Aspire",
    price:45000,
   },
   {
    title:"Macbook Pro",
    price:100000,
   },

];


computer.sort((prev, next) => prev.price - next.price);
console.log(computer)

computer.sort((prev, next) => next.price - prev.price);
console.log(computer)


// Задание 2

const grades = [4, 4, 4, 5, 3, 5, 3, 3, 2, 5, 1];

grades.sort((prev,next) => prev - next)
console.log(grades)

grades.sort((prev,next) => next - prev)
console.log(grades)


// Задание 3

const frust = ["strawberry", "mango", "watermelon", "grapes", "lemon", "kiwi"];

const frust1 = frust.sort();
console.log(frust);

const frust2 = frust.sort().reverse()
console.log(frust)

// Задание 4

const numbers = [4, 123, -5, 6, 100];
const minimum = Math.min(...numbers);
console.log(minimum);

const maximum = Math.max(...numbers);
console.log(maximum)


// let minimum = numbers[0];
// for(const  item of numbers) {
// if(item < minimum) {
//     minimum = item;
// } 
// }

// console.log(minimum)

// let maximum = numbers[0];
// for(const item of numbers) {
//     if(item > maximum) {
//         maximum = item;
//     }
// }

// console.log(maximum)


// Задание 4

// const formatedString = formatDate(new Date());...



// задание 5

const instagramUser = {
    userName: "Uzumali123",
    email:"user@gmail.com",
    password:"123123",
    avatarUrl:"https://www.google.com/search?q=cat",
    followers:'1m',
    following:512,
    title:'Never Give up',
};

for (const key in instagramUser) {
    console.log(key)
}



console.log(Object.values(instagramUser));

// Задание 6

const computers = [
    {
        title:"Macbool Air M1",
        price:85000,
    },
    {
        title:"Dell",
        price:65000,
    },
    {
        title:"Acer Aspire",
        price:45000,
    },
    {
        title:"Macbook Pro",
        price:1000000
    },
];

let sum = 0;
for (const value of computers)
 {
    sum=sum+=value.price
 }
 console.log(sum)


// Задание 6

// const instagramUser = {
//     userName:"Uzumaki123",
//     email:"user@gmail.com",
//     password:"121212",
//     avatarUrl:
//     "https:/www.google.com/search?q=cat",
//     followers:'1m',
//     following:512,
//     title:"Never give Up",
// };


// for(const key in instagramUser) {
//     console.log(key)
// };

// for(const value in instagramUser) {
//     console.log(instagramUser[value])
// };

// for (const [key,value] of Object.entries(instagramUser)) {
//     console.log(`${key}:${value}`)
// }






