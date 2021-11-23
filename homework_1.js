// Task 1
let admin = 'root';
let name = "Vjacheslav";

admin = name;

alert(`${admin}`);

//Task 2
//Yes, you can use uppercase in both cases. It is a common practice.

//Task 3
let name1 = "Ilya";

alert(`hello ${1}`);       //hello 1
alert(`hello ${"name"}`);  //hello name
alert(`hello ${name1}`);   //hello Ilya

//Task 4
alert("" + 1 + 0);     //10
alert("" - 1 + 0);     //-1
alert(true + false);   //1
alert(6/"3");          //2
alert("2"*"3");        //6
alert(4+5+"px");       //9px
alert("$"+4+5);        //$45
alert("4"-2);          //2
alert("4px"-2);        //NaN
alert(7/0);            //Infinity
alert(" -9 "+5);       //-9 5
alert(" -9 "-5);       //-14
alert(null+1);         //1
alert(undefined+1);    //NaN

//Task 5
let a = 1, b = 1;   //a = 2  b = 2
let c = ++a;        //2
let d = b++;        //1

//Task 6
let a = 2;             //4
let x = 1 + (a *= 2);  //5

//Task 7
alert(5>4);               //true
alert("ананас">"яблоко"); //false
alert("2">"12");          //true
alert(undefined==null);   //true
alert(undefined===null);  //false
alert(null=="\n0\n");     //false
alert(null===+"\n0\n");   //false

//Task 8
let name = prompt('What is your name?', 'Vasya');
alert(`Hello ${name}`);

//Task 9
if ("0"){
    alert('Hello');     //showing up
}

//Task 10
let officialJS = prompt("What is JavaScript's an official title?", "ECMAScript");
if (officialJS == "ECMAScript"){
    alert('You are right!');
} else {
    alert('Don\'t you know? - "ECMAScript!"');
}

//Task 11
let number = prompt("Enter a number", -5);
if (number > 0){
    alert(1);
} else if (number < 0){
    alert(-1);
} else {
    alert(0);
}

//Task 12
alert('');
alert(null||2||undefined);       //2

//Task 13
alert('');
alert(alert(1)||2||alert(3));    //1 2

//Task 14
alert('');
alert(1&&null&&2);               //null

//Task 15
alert('');
alert(alert(1)&&alert(2));       //1 undefined

//Task 16
alert('');
alert(null||2&&3||4);            //3

//Task17
alert(17);
let age = prompt("Enter your age:", 35);

let range = (age => 14 && age <= 90)?alert('In range'):alert('Out of range');

if (age > 13 && age < 91){
    alert('In range');
}else{
    alert('Out of range');
}


// Task18
alert(18);
let age1 = prompt("Enter your age:", 35);

if (!(age1 => 14 && age1 <= 90)){
    alert('Out of range');
}else{
    alert('In range');
}

if (age1 < 14 || age1 > 90){
    alert('Out of range');
}else{
    alert('In range');
}

//Task 19
if(-1||0) alert('first');         //+
if(-1&&0) alert('second');        //-
if(null||-1&&1) alert('third');   //+

// Task20

let login = prompt("Login:", "Admin");

if (login == "Admin"){
    pas = prompt("Password:", "I am boss!");
    if(pas == "I am boss!"){
        alert('Hello!');
    }else if (pas === null) {
        alert('Canceled!');
    }else{
        alert('Password is wrong!');
    }
}else{
    alert('I know you!');
}

//Task 21
let a = +prompt('a?','');
switch (a){
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case (2||3):
        alert('2,3');
        break;
}

//Task 22

let b = +prompt('b?','');

if (b>0){
    alert(++b);
}else{
    alert(b);
}

//Task 23

let c = +prompt('c?','');

if (c>0){
    alert(++c);
}else{
    alert(c+2);
}

//Task 24

let d = +prompt('d?','');

if (d>0){
    alert(++d);
}else if(d<0){
    alert(d+2);
}else{
    alert(d=10);
}

//Task 25

let e = +prompt('e?','');
let f = +prompt('f?','');
let g = +prompt('g?','');
let h = 0;
if (e>0){h++};
if (f>0){h++};
if (g>0){h++};
alert(h);

//Task 26

let e = +prompt('e?','');
let f = +prompt('f?','');
let g = +prompt('g?','');
let h = 0;
let i = 0;
if (e>=0){
    h++;
}else{
    i++;
};
if (f>=0){
    h++;
}else{
    i++;
};
if (g>=0){
    h++;
}else{
    i++;
};
alert(`Positive's count - ${h}. Negative's count - ${i}`);

//Task 27

let k = +prompt('k?','');
let l = +prompt('l?','');
if (k>l){
    alert(k);
}else{
    alert(l);
}

//Task 28

let m = +prompt('m?','');
let n = +prompt('n?','');
if (m>n){
    alert(`${m} ${n}`);
}else{
    alert(`${n} ${m}`);
}

//Task 29

let A = +prompt('A?','');
let B = +prompt('B?','');
if (A<B){
    alert(`A = ${A} B = ${B}`);
}else{
    let C = 0;
    C=A;
    A=B;
    B=C;
    alert(`A = ${A} B = ${B}`);
}

//Task 30

let A = +prompt('A?','');
let B = +prompt('B?','');
if (A!=B){
    alert(`A = ${A+B} B = ${A+B}`);
}else{
    alert(`A = ${A=0} B = ${B=0}`);
}

//Task 31

let A = +prompt('A?','');
let B = +prompt('B?','');
if (A!=B){
    alert(`A = ${A = A>B?A:B} B = ${B=A}`);
}else{
    alert(`A = ${A=0} B = ${B=0}`);
}

//Task 32

let D = +prompt('D?','');
let C = +prompt('C?','');
let E = +prompt('E?','');
if (D>E&&C>E){
    alert(E);
}else if(D>C&&E>C){
    alert(C);
}else{
    alert(D);
}

//Task 33

let D = +prompt('D?','');
let C = +prompt('C?','');
let E = +prompt('E?','');
let F=0;
if (D>E&&C>E){
    alert(`${F = D>C?C:D}`);
}else if(D>C&&E>C){
    alert(`${F = D>E?E:D}`);
}else{
    alert(`${F = E>C?C:E}`);
}

//Task 34

let D = +prompt('D?','');
let C = +prompt('C?','');
let E = +prompt('E?','');
let F=0;
if (D>E&&C>E){
    alert(`${E} ${F = D<C?C:D}`);
}else if(D>C&&E>C){
    alert(`${C} ${F = D<E?E:D}`);
}else{
    alert(`${D} ${F = E<C?C:E}`);
}

//Task 35

let D = +prompt('D?','');
let C = +prompt('C?','');
let E = +prompt('E?','');
let F=0;
if (D>E&&C>E){
    alert(`${F = D+C}`);
}else if(D>C&&E>C){
    alert(`${F = D+E}`);
}else{
    alert(`${F = E+C}`);
}

//Task 36

let D = +prompt('D?','');
let C = +prompt('C?','');
let E = +prompt('E?','');
if (D==E){
    alert(2);
}else if(C==E){
    alert(1);
}else{
    alert(3);
}