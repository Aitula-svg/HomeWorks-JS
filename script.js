
// Задание 1



const object = {
  firstName: "Aiturgan",
  lastName: "Asilbek kyzy",
  age:"24",
  university: "ALATOO",
  faculty:"CS",
  gpa:"87",
}
{
  console.log("lastName,fistName")
  }


// Задание 2

let deleteKey = {
  set1: "object",
  set2: "key",
}
delete deleteKey.set2;
console.log(deleteKey);

let getProperty = prompt("Enter");

if (getProperty in deleteKey) {
  console.log(`yes`);}

else {
  console.log(`no`)
}



// Задание 3


let sum = 5;

const user = {
  name: "Aiturgan",
  email: "Aitu_ru@gmail.com", 
  age: "24",
  password: "123456"
}

let email = prompt("Введите email");
let password = prompt("Введите пароль");
let getsum = prompt("2+3=");

if (email == "Aitu_ru@gmail.com") {
  
} else {
  alert(`Извините, такого email не существует`)
};

if (password == "123456") {

} else {
  alert (`Неверный пароль`)
}
if (getsum == "5") {
alert(` Верно! Ваша премия = ${user.sum}`);
} else {
  alert(`неправильно считали`)
}








