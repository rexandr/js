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
//
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

//Task 14