function start() {

    //start button removing
    document.querySelector('#start').remove();

    createFriendCallButton();

    createFiftyFiftyButton();

    createStopGameButton();

    showNextQuestion(level = 0);

}

function createFriendCallButton(){
    //friend calling hint button creating
    let friend = document.createElement("button");
    document.body.appendChild(friend);
    friend.setAttribute('onclick', 'friend()');
    friend.setAttribute('id', 'friend');
    friend.setAttribute('right', '20px');
    friend.innerText = 'Friend';
}

function createFiftyFiftyButton(){
    //50/50 hint button creating
    let fifty = document.createElement("button");
    document.body.appendChild(fifty);
    fifty.setAttribute('onclick', 'fiftyFifty()');
    fifty.setAttribute('id', 'fifty');
    fifty.innerText = '50/50';
}

function createStopGameButton(){
    //stop game button creating
    let stop = document.createElement("button");
    document.body.appendChild(stop);
    stop.setAttribute('onclick', 'finishGame(\'stop\')');
    stop.setAttribute('id', 'stop');
    stop.setAttribute('right', '20px');
    stop.innerText = 'Stop game!';
}

let userWin = 0;    //incombustible sum

let k = 0;          //current price's position


function showNextQuestion(level) {

    //level indication
    if (level === 1) {

        let message = `You are right. Your win - ${prices[k]} Ready to the next question?`;

        if (k === 4 || k === 9 || k === 14) {
            userWin = prices[k];
            //console.log(userWin);
            message = `You are right. Your win - ${prices[k]} and it is incombustible sum. Ready to the next question?`;
        }

        alert(message);

        k++;

    }

    let arr = changeDifficulty(k);


    //Question finding
    let questionPosition = Math.random() * arr.length;
    questionPosition = Math.floor(questionPosition);
    //console.log(questionPosition);

    //Question showing
    let lable = document.body.querySelector('#lable');
    if (lable){lable.remove()};
    let shownQuestion = document.createElement("label");
    document.body.appendChild(shownQuestion);
    shownQuestion.setAttribute('id', 'lable');
    shownQuestion.innerText = arr[+questionPosition][0];

    //table with answers
    let table = document.querySelector('table');

    //answers index
    let answerIndex = 1;


    //delete previous answers from table
    while (document.querySelector(".wrong")) {
        document.querySelector(".wrong").remove();
    }
    document.querySelector(".right") ? document.querySelector(".right").remove() : '';

    //right answer checking

    // table filling with answers
    let ansNum = 1;                                                   //answer's numerating
    for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; j < table.rows[i].cells.length; j++) {
            let button = document.createElement("button");
            let answer = arr[+questionPosition][answerIndex++];
            let action = 'showNextQuestion(level=1)';
            let classAt = 'right';
            if (answer.indexOf('@$') > -1) {                                       //find hint
                answer = answer.slice(0, answer.indexOf('@$'));                  //cut hint
            } else {
                action = 'finishGame()';
                classAt = 'wrong';
            }
            button.innerText = ansNum + ') ' + answer;                                        //answer setting
            button.setAttribute('onclick', action);
            button.setAttribute('class', classAt);
            table.rows[i].cells[j].appendChild(button);
            ansNum++;
        }
    }


    k === 15 ? finishGame('win') : '';      //last question is answered

    //delete shown question
    arr.splice(questionPosition, 1);
    //console.log(arr);

}

//hint from friend
function friend() {

    if (confirm("Are you sure?")) {
        let ran = 1 + Math.random() * 4;
        ran = Math.floor(ran);
        alert(`I guess the answer is ${ran}`);
        document.querySelector('#friend').remove();
    }

}

function fiftyFifty() {

    if (confirm("Are you sure?")) {
        document.querySelector('.wrong').remove();
        document.querySelector('.wrong');
        document.querySelector('.wrong').remove();
        document.querySelector('#fifty').remove();
    }
}

function changeDifficulty(k){
    //question's difficulties changing
    let arr = [];
    if (k <= 4) {

        arr = answersAll[0];

    } else if (k > 4 && k <= 9) {

        arr = answersAll[1];

    } else {

        arr = answersAll[2];

    }

    return arr;
}

//finishing game when user wrong, stopped game or won the game.
function finishGame(val) {

    if (val === 'stop') {
        alert(`Game over! Your win is ${prices[k - 1] || 0}`);
        location.reload();
    } else if (val === 'win') {
        alert('You are the WINNER!');
        location.reload();
    } else {
        alert(`Game over! Your win is ${userWin || 0}`);
        location.reload();
    }

}

// Questions and answers array

let answersAll =
    [
        [
            ['Как называется предмет?', 'Java', 'JavaScript@$', 'Delphi', 'C#'],
            ['Как зовут преподавателя?', 'Костянтин@$', 'Василий', 'Петрович', 'Сам приходит'],
            ['Как фамилия преподавателя?', 'Гейтс', 'Маккалистер', 'Онищенко@$', 'Сусанин'],
            ['Какого цвета книга по предмету?', 'Заюзаного', 'Затёртого', 'Серо-буро-малинового', 'Неизвестно@$'],
            ['Сколько было лекций?', '3', '5@$', '20', '100'],
            ['Предмет был интересный?', 'Нет', '50/50', 'Вы о чём?', 'Да@$'],
            ['Какого числа защита проэктов?', 'Её нет', '24@$', '31', '1'],
        ],
        [
            ['Где ежегодно проводят день открытых дверей?', 'Дома', 'В вузе@$', 'На роботе', 'В Египте'],
            ['Чего не было на Диме Билане во время победного выступления на «Евровидении-2008»?', 'обуви@$', 'носков', 'рубашки', 'цепочки'],
            ['Кто регулярно исполняет хаку, ритуальный танец народа маори?', 'сёрфингисты Австралии', 'регбисты Новой Зеландии@$', 'лесорубы США', 'Джуны'],
            ['Что, как считается, кричат танцующие лезгинку?', 'Ура', 'Свободная касса', 'Асса@$', 'Вася'],
            ['В какой стране был опубликован первый в мире прогноз погоды?', 'Украина', 'Германия', 'Франция', 'Великобритания@$'],
            ['Какое море фигурирует в названии фильмов о Джеке Воробье?', 'Баренцево', 'Мертвое', 'Карибское@$', 'Черное'],
            ['Из книги какого писателя иллюзионист Дэвид Копперфильд взял себе псевдоним?', 'Джек Лондон', 'Чарльз Диккенс@$', 'Оскар Уайльд', 'Эдгар По'],
        ],
        [
            ['Какую майку носит «горный король» гонки «Тур де Франс»?', 'клетчатую', 'в горошек@$', 'полосатую', 'радужную'],
            ['Какой углеводород является основным компонентом природного газа?', 'гептан', 'пропан', 'метан@$', 'бутан'],
            ['В каком кинофильме суд над главным героем был назначен на 18 часов 27 июля?', 'Бриллиантовая рука@$', 'Кавказская пленница', 'Берегись автомобиля', 'Мимино'],
            ['Как в Италии называют холодный северный ветер, приходящий с Альпийских гор?', 'памперо', 'сирокко', 'мистраль', 'трамонтана@$'],
            ['Где можно найти пятно Ктулху и бороду Слейпнир?', 'на Нептуне', 'на Плутоне@$', 'на Уране', 'на Сатурне'],
            ['Из чего индейцы Гвианы, охотившиеся в бассейне Амазонки, изготавливали яд кураре?', 'из коры растений@$', 'из желез змей', 'из пластинчатых грибов', 'из слюны тёщи'],
            ['От слова с каким значением произошло название «трико»?', 'тонкий', 'вязаный@$', 'темный', 'опасный'],
        ],
    ]

//answer's prices
let prices =
    [
        100,
        200,
        300,
        500,
        1000,
        2000,
        4000,
        8000,
        16000,
        32000,
        64000,
        125000,
        250000,
        500000,
        1000000
    ]
