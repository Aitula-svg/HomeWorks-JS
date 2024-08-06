// Задание 1

// Declaration

// function logToConsole( x, y ) {
//      for (let i = 1; i < x; i++){

//         for (let y = 1; y < i; y++){
//             if (i % y == 0);
//         }

//         console.log( i );
//     }
// }

// logToConsole(21);


// Expration


// const  logToConsole = function ( x, y ) {
//      for (let i = 1; i < x; i++){

//         for (let y = 1; y < i; y++){
//             if (i % y == 0);
//         }

//         console.log( i );
//     }
// }

// logToConsole(21);

// Arrow Function

// const logToConsole = (x,y) => {
//     for (let i = 1; i < x; i++){

//                 for (let y = 1; y < i; y++){
//                     if (i % y == 0);
//                 }
        
//                 console.log( i );
//             }
//         }

//         logToConsole(21);


// Задание 2


// Declaration



// function showEvenNumbers(x,y) {
//     nextPrime: for (let i = 2; i <= x; i++){

//         for (let y = 2; y < i; y++){
//             if (i % 2 == 1) continue nextPrime;
//         }

//         console.log( i );
//     }
// }

// showEvenNumbers(20);

// Expression

// const showEvenNumbers = function (x,y) {
//     nextPrime: for (let i = 2; i <= x; i++){

//                 for (let y = 2; y < i; y++){
//                     if (i % 2 == 1) continue nextPrime;
//                 }
        
//                 console.log( i );
//             }
//         }

//         showEvenNumbers (20)

// Arrow 

// const showEvenNumbers  = (x,y) => {
//     nextPrime: for (let i = 2; i <= x; i++){

//              for (let y = 2; y < i; y++){
//         if (i % 2 == 1) continue nextPrime;
//             }
                
//         console.log( i );
//      }
// }
        
// showEvenNumbers (20)


// Задание 3

// Declaration

// function CalculateSum () {
//     let i = 1;
//      while (i <= 100) {
       
//        i++
//      } return i;
//    }console.log(CalculateSum ());



// Expression

// const   CalculateSum = function () {
//     let i = 1;
//          while (i <= 100) {
           
//            i++
//          } return i;
//        }
//        console.log(CalculateSum ());


// Arrow

// const CalculateSum  = () => {
//     let i = 1;
//              while (i <= 100) {
               
//                i++
//              } return i;
//            }
//            console.log(CalculateSum ());



// Задание 4

// let findChar = prompt("Enter")
// let userName = "Bill Gates"

// let counter = 0;

// while (counter < userName.length) {
//    console.log(userName.charAt(8))
//    if(counter = 8){
//     console.log(true)
//     counter++
//    }
  
//    else {
//     console.log(false)
//    }

// counter++
// }



// Задание 5



// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//       newString += str[i];
//     }
//     console.log(newString);
//   }
//   reverseString('hello');