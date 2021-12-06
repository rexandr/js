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

//Task 8

