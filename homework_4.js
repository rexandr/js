// //Task 1                                                                                                 ************
//
//
// console.log(document.body.childNodes);
// console.log(document.body.childNodes[1]);
// console.log(document.body.childNodes[3]);
// console.log(document.body.childNodes[3].childNodes[3].childNodes);
//
//
// console.log(document.body.querySelector("div"));
// console.log(document.body.querySelectorAll("ul"));
// console.log(document.body.querySelectorAll("li")[1]);
//
// // for (let elem of document.body.children){
// //     if (elem.matches('<li>$Пит$</li>li>'))
// //     {
// //         alert(elem);
// //     }
// // }



// //Task 2
//
// let table = document.querySelector('table');
//
// for (let i = 0; i< table.rows.length; i++)
// {
//     for (let j = 0; j < table.rows[i].cells.length; j++)
//     {
//        table.rows[i].cells[j].innerText = (i+1) + ':' + (j+1);
//
//        j === i ? table.rows[i].cells[j].style.backgroundColor = 'red':'';
//     }
// }
//

// //Task 3
//
// let table = document.querySelector('table#age-table');
// let label = document.querySelectorAll('table#age-table label');
// let age = document.querySelector('table#age-table td');                                               //lucky))))
// let name = document.querySelector('form[name=search]');
// let input1 = document.querySelector('form[name=search] input');
// let input2 = document.querySelectorAll('form[name=search] input');
// console.log(table);
// console.log(label);
// console.log(age);
// console.log(name);
// console.log(input1);
// console.log(input2[input2.length-1]);

// //Task 4                                                                                                 ************
//
// function clear(elem) {
//
//     let cl = document.querySelectorAll(elem);
//     cl.childNodes.remove();
//
// }
//
// clear('#elem');

//
// //Task 5
//
// function ask() {
//
//     let text = '';
//
//     do {
//         text = prompt("Enter the value!", null);
//
//
//         if (text !== 0 || text !== null || text !== '')
//         {
//             console.log(text);
//         }
//
//     }while (text !== 0 || text !== null || text !== '')
// }
//
// ask();