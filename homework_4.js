

//I had no enough time but I'm going to improve it soon.
// It is  a little hard to figure it all from 0 and to combine with php.
// I try to.

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
//     //cl.innerHTML = "";
//     //cl.removeChild("<li></li>");
//
// console.log(elem)
// console.log(cl)
// }

// clear('ol');


// //Task 5
//
// function ask() {
//
//     let text = prompt("Enter the value!", 'Vasya');
//
//     let ul1 = document.querySelector("ul#task5");
//
//     while (text)
//     {
//         if (text === null || text === ''){
//             break;
//         }
//
//         let elem = document.createElement("li");
//         let elemText = document.createTextNode(text);
//         elem.appendChild(elemText);
//         ul1.appendChild(elem);
//
//         //ul1.innerHTML += `<li>${text}</li><br>`;
//
//         text = prompt("Enter the value!", 'Petya');
//     }
// }
//
// ask();


// //Task 6
//
// function task6()
// {
//     let li1 = document.querySelector("li#one");
//     let li4 = document.querySelector("li#two");
//     // li1.append('<li>2</li><br>')
//     // li1.append('<li>3</li><br>')
//
//     li1.insertAdjacentHTML('afterend','<li>2</li>')
//     li4.insertAdjacentHTML('beforebegin','<li>3</li>')
//
// }
//
// task6();

// //Task7
//
// function showNotification(options)
// {
//
//
//     let note = document.body.insertAdjacentHTML("afterbegin", `<div class="notification">${options}</div>`)
//
//     setTimeout(()=>document.querySelector('.notification').remove(), 1500);   //I have done it))))))
//
//
//
//     //setTimeout(()=>note.parentNode.removeChild(note), 1500);
//     // setTimeout(()=>document.body.insertAdjacentHTML("afterbegin", `<div class="notification">${options}</div>`), 1500)
//     // setTimeout(()=>document.body.insertAdjacentHTML("afterbegin", `<div class="notification">${options}</div>`).remove, 1500)
// }
//
// showNotification('Hello');