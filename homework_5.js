// //Task 1
// function removeText() {
//     let a = document.querySelector('#text').remove();  // OR onclick="document.querySelector('#text').remove()"  in HTML
// }

// //Task 2
//
// //button.removeEventListener("click", () => alert("1")); //won't be working because he don't know this function to remove
//                                                         // we have to set out function into variable and then work with it.
// //And code will show us 1 then 2. But I thought that only 1 will be shown because there can be only one onclick event.
//
// let button = document.querySelector('#klick');
//
// button.addEventListener("click", () => alert("1"));
// button.removeEventListener("click", () => alert("1"));
// button.onclick = () => alert(2);

// //Task 3
//
// let arr=["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// function copySorted(arr) {
//     let s = arr.slice();
//     return s.sort();
// }
// console.log(sorted);
// console.log(arr);

//Task 4
//
// function fact(n)
// {
//     console.log(n);
//     if (n == 1)
//     {
//         return n
//     }else {
//         return n*fact(n-1);
//     }
// }
//
// alert(fact(prompt("N = ", 5)));

// //Task 5
//
// let a = 0;
// let b = 1;
// function fib(n)
// {
//     if (+n <= 1 || Number.isNaN(+n) || n === null || n === 0){
//         return a;
//     }
//
//     let  c = a + b ;
//
//     a = b;
//     b = c;
//
//     console.log('a = ' + a + 'b = ' + b + 'c = ' + c + 'n = '+ n);
//
//     if (+n === 2)
//     {
//         return c;
//     }else {
//         return fib(n-1);
//     }
//
// }
//
// alert(fib(prompt("N = ", 3)));