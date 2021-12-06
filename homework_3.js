// //Task 1
//
// let arr = [];
// isEmpty(arr);
//
// function isEmpty(obj){
//     obj[0]!==undefined?console.log(true):console.log(false);
//     obj.length>0?console.log(true):console.log(false);
// }

// //Task 2
//
// let object = {
//     a:5,
//     b:6,
//     c:'dsfgdf',
//     d:8
// };
//
// function multiplyNumeric(obj1){
//
//     for (let key in obj1) {
//         console.log(typeof key);
//     }
//
//     // size = Object.keys(obj1).length;
//     // for (let i=0;i<size;i++){
//     //     console.log(typeof obj1[i]);
//     // }
//
// }
//
// multiplyNumeric(object);

// //Task 3
//
// function readNumber() {
//     do{
//         a = +prompt("Enter a number!",5);
//         console.log(a);
//     }while (a === NaN);
//
//     return a;
// }
//
// alert(readNumber());

// //Task 4
//
// function random(min, max){
//     ran = Math.random()*(max-min)+min;
//     return ran.toFixed(10);
// }
//
// alert(random(1,5));
// alert(random(1,5));
// alert(random(1,5));


// //Task 5
//
// function random(min, max){
//     ran = Math.random()*((max+1)-min)+min;
//     return Math.floor(ran);
// }
//
// alert(random(1,5));
// alert(random(1,5));
// alert(random(1,5));

// //Task 6
//
// function ucFirst(text){
//     // let a = text[0].toUpperCase();   //why I  can't work with the text like array?((((
//     // text[0] = a;
//     // console.log(text);
//     return text[0].toUpperCase()+text.slice(1);
// }
//
// alert(ucFirst('vasya'));

// //Task 7
//
// function checkSpam(spam){
//     return (spam.toUpperCase().includes('VIAGRA') || spam.toUpperCase().includes('XXX'))?true:false;
// }
//
// console.log(checkSpam('buy ViAgRA now'));
// console.log(checkSpam('free xxxxx'));
// console.log(checkSpam("innocent rabbit"));

// //Task 8
//
//
// function truncate(str, maxlength) {
//     str.length > maxlength ? str = str.slice(0, 19) + '...' : str;
//     return str;
// }
//
// alert(truncate('Are you ready to slice this string or no?', 20));

// //Task 9
// //
// // function extractCurrencyValue(str) {
// //     j = '';
// //     for (let i = 0; i < str.length; i++) {
// //         let a = null;
// //         (+str[i] >= 0) ? a = str[i] : a;
// //         j = a !== null ? j + a : '';
// //     }
// //
// //     //or simpler if there wouldn't be something like "$120 of tugrikas"
// //
// //     let b = str.slice(1);
// //
// //     return +j + ' or simpler ' + b;
// // }
// //
// // alert(extractCurrencyValue('$120'));

// //Task 10
//
// function sumInput() {
//
//     // let a = prompt('Enter a number', 5);
//     // let b = [];
//     // while (a !== 0 || a !== ''|| a !== null) {
//     //     b.push(a);
//     //     console.log(b);
//     //     a = prompt('Enter a number', 5);
//     // }
//
//
//     let a = 0;
//     let b = [];
//     let c = 0;
//     do {
//         a = prompt('Enter a number', 5);
//         console.log(a);
//         if (a === 0 || a === '' || a === null) {
//             break;
//         } else if (+a === NaN) {
//             break;
//         }
//         b.push(a);
//         console.log(b);
//     } while (a != 999);
//
//     for (let i=0; i<b.length; i++){
//         c += +b[i];
//     }
//     console.log(c);
// }
//
// sumInput();


//Task 11

// I can't realize this topic also in internet hints.(((((( Maybe later.

//Task 12

//There no difference between those two ways. The code will be execute equal from up to down in both cases .

// //Task 13
//
// function checkAge(age) {
//    //return age > 18 ? true : confirm("Did parents allowed?");
//     return age>18||confirm("Did parents allowed?");
// }
//
// console.log(checkAge(13));

// //Task 14
//
// function min(a, b) {
//     return a > b ? b : a;
// }
//
// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));

// //Task 15
//
// function pow(x,n) {
//
//     if (x<1||n<1){
//         return false;
//     }
//
//     let j=1;
//     for (let i=1; i<=Math.floor(n);i++){
//         j=j*Math.floor(x);
//     }
//
//     return j;
// }
//
// console.log(pow(3,3));

//Task 16

