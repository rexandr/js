// //Task 1
//
// let i=3;
//
// while (i){
//     alert(i--); // 1 number will be shown last because next i=0, it's the same as false
// }

// //Task 2
//
// let A = prompt("A=", "1");
// let B = prompt("B=", "2");
// let C = prompt("C=", "3");
// let D=(+A)+(+B)+(+C);
// if (A < B && B < C) {
//     A *= 2;
//     B *= 2;
//     C *= 2;
//     console.log(A, B, C);
// } else {
//     A = -A;
//     B = -B;
//     C = -C;
//     console.log(A, B, C);
// }

// //Task 3
//
// let A = prompt("A=", "1");
// let B = prompt("B=", "2");
// let C = prompt("C=", "3");
//
// if ((A < B && B < C)||(A > B && B > C)) {
//     A *= 2;
//     B *= 2;
//     C *= 2;
//     console.log(A, B, C);
// } else {
//     A = -A;
//     B = -B;
//     C = -C;
//     console.log(A, B, C);
// }

// //Task 4
//
// let A = prompt("A=", "2");   //2
// let B = prompt("B=", "7");   //0
// let C = prompt("C=", "-1");  //-1
//
// AB = B-A < 0 ? (B-A)*-1 : B-A;
// AC = C-A < 0 ? (C-A)*-1 : C-A;
//
// if (AB < AC) {
//     console.log(B, AB);
// } else {
//     console.log(C, AC);
// }

// //Task 5
//
// let X = prompt("X=", "2");
// let Y = prompt("Y=", "7");
//
// if (X==0&&Y==0){
//     console.log(0);
// } else if(X!=0&&Y==0){
//     console.log(1);
// }else if(Y!=0&&X==0){
//     console.log(2);
// }else{
//     console.log(3);
// }

// //Task 6
//
// let X = prompt("X=", "2");
// let Y = prompt("Y=", "7");
//
// if (X>0&&Y>0){
//     console.log("First aria");
// }else if (X<0&&Y<0){
//     console.log("Third aria");
// }else if (X>0&&Y<0){
//     console.log("Second aria");
// }else if (X<0&&Y>0){
//     console.log("Forth aria");
// }else{
//     console.log("The center of the world)))");
// }

// //Task 7?????????????????????????????????????????????????????????????????????????????????????????????????????????????
//
// let X1 = prompt("X1=", "1");
// let Y1 = prompt("Y1=", "1");
//
// let X2 = prompt("X2=", "1");
// let Y2 = prompt("Y2=", "4");
//
// let X3 = prompt("X3=", "5");
// let Y3 = prompt("Y3=", "4");
//
// if (Y2 == Y3){
//     console.log(X4=X3, Y4=Y1);
// } else {
//     console.log(X4=X2,Y4=Y2);
// }
//
// //Task 8
//
// let year = prompt("Year =", "1999");
//
// if (year % 4 === 0 ) {
//     console.log((year % 100 === 0 && year % 400 > 0)?"365":"366");
// }else{
//     console.log("365");
// }

// //Task 9
//
// let number = prompt("Number =", "-5");
//
// if (number > 0) {
//     console.log("Positive");
// } else if (number < 0) {
//     console.log("Negative");
// }else{
//     console.log("Zero");
// }

// //Task 10
//
// let number = prompt("Number from 1 to 999 =", "111");
//
// x = number.length;
// y = "Positive";
//
// if (number < 0){
//    x--;
//    y = "Negative";
// }
//
//switch (x) {
// case 1 :
//     console.log(y, "Single");
//     break;
// case 2 :
//     console.log(y, "Double");
//     break;
// case 3 :
//     console.log(y, "Triple");
//     break;
// default :
//     console.log("Out of range");
// }

// //Task 11
//
// //There will be printed different values at loop's output. Because the last value will be increased then matched in first case
// // and value will be matched then increased in second case.
//
// let i = 0;
// while (++i < 5) alert( i );
//
// let j = 0;
// while (j++ < 5) alert( j );

// //Task 12
//
// //There will be the same values at loop's output. Because there no difference how i will be increased(pos/prefix form).
// //Values will be set up before checking value in both cases.
//
// for (let i=0; i<5; i++) alert(i)
// for (let i=0; i<5; ++i) alert(i)

// //Task 13
//
// let a = prompt("Start =", "1");
// let b = prompt("Finish =", "10");
//
// // for (; (a <= b && (a % 2 === 0)); a++) {      // I don't understand why it doesn't work(((
// //     console.log(a);
// // }
//
// for (; (a <= b ); a++) {
//    (a % 2 === 0)? console.log(a):'';
// }

// //Task 14
//
// let i = 0;
//
// while (i<3){
//     alert(`number ${i}!`);
//     i++;
// }

// //Task 15                                                                   - if text??????????????????????????????
//
// // let number = +prompt("Enter a number after 100", "55");
// //
// // while (number<=100 && number !== 0){
// //     number = +prompt("Enter a number after 100", "555");
// // }
//
// do{
//     number = +prompt("Enter a number over 100", "-999");
// }while (number<=100 && number !== 0);

// //Task 16                                                                        - to try another way
//
// let start = prompt("Enter a start number!", 1);
// let finish = prompt("Enter a finish number!", 10);
//
// for (start; start<=finish; start++){
//     if (start === 2 || start === 3 || start === 5 || start === 7) {
//         console.log(start);
//     } else if (start !== 1 && start % 2 !== 0) {
//         if (start % 3) {
//             if (start % 5) {
//                 if (start % 7) {
//                     console.log(start);
//                 }
//             }
//         }
//     }
// }

// //Task 17
//
// // let first = +prompt("First = ", 5);
// // let second = +prompt("Second = ", 20);
// // console.log(first, second, first+second, (first+second)/2);
//
// console.log(((+prompt("First = ", 5)) + (+prompt("Second = ", 20))) / 2);

// //Task 18
//
// console.log(prompt("Number = ", 5)**2);

// //Task 19
//
// let first = +prompt("First = ", 5);
// let second = +prompt("Second = ", 1);
// let third = +prompt("Third = ", 9);
//
// console.log(Math.max(first,second,third) - Math.min(first,second,third));

// //Task 20
//
// console.log((+prompt("Number = ", -4)%2 === 0)? "Even" : "Odd");

// //Task 21
//
// let number  = prompt("Number = ", 66);
// let length =  number.length;
// let j = 0;
//
// console.log(length);
//
// for (i = 0; i<length; i++){
//     j = j+(+number[i]);
// }
//
// console.log(j);

// //Task 22
//
// let unit = +prompt("Do you want to convert inches to the centimeters( - Type 1 - ) or centimeters to the inches ( - Type 0 - )",0);
//
// switch (unit){
//     case 0 :
//         ci = (+prompt("Type a centimeters!",5))/2.54;
//         alert(ci.toFixed(2));
//         break;
//     case 1 :
//         ic = (+prompt("Type a inches!",5))*2.54;
//         alert(ic.toFixed(2));
//         break;
//     default :
//         alert("You have typed incorrect unit! Try again!")
// }

// //Task 23
//
// let number = prompt("Number = ", 333);
//
// number % 2 === 0 ? console.log((+number[0])+(+number[1])+(+number[2])) : console.log((+number[0])*(+number[1])*(+number[2]));

// //Task 24
//
// let a = prompt("Side a = ", 5);
// let b = prompt("Side b = ", 5);
// let c = prompt("Side c = ", 5);
//
// if (+a + +b > +c && +a + +c > +b && +b + +c > +a) {
//     console.log("The triangle exist!")
// } else {
//     console.log("The triangle doesn\'t exist!")
// }

// //Task 25
//
// let AX = prompt("X of A = ", 4);
// let AY = prompt("Y of A = ", 9);
// let Radius = prompt("Radius of circle = ", 10);
//
// if ((Math.sqrt(AX - 0) + Math.sqrt(AY - 0)) < Math.sqrt(Radius)) {
//     console.log("In circle");
// } else if ((Math.sqrt(AX - 0) + Math.sqrt(AY - 0)) === Math.sqrt(Radius)) {
//     console.log("On circle");
// } else {
//     console.log("Out of circle");
// }

// //Task 26
//
// user = {};
// user.name = "John";
// user.surname = "Smith";
// console.log(user);
// user.name = "Pete";
// console.log(user);
// delete user.name;
// console.log(user);

// //Task27
//
// const user = {
//     name: "John"
// };
// user.name = "Pete"; // Yes, it works. CONST set user's name as only read, but object's properties can be changed.
// console.log(user);

// //Task 28
//
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
//
// summ = 0;
//
// for (let key in salaries){
//     summ += salaries[key];
// }
//
// console.log(summ);

// //Task 29
//
// let i = 0;
// while (i != 10) {
//
//     //if (i>20){break;}
//     i += 0.2;
//     console.log(i);
// }
// //It will be infinity loop because there are fractions in statements and as a result of operation we have a number
// // with a lot of symbols after dot point. Instead 10 we will get a number like 10.199999999996 and so on.