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
    shownQuestion.innerText = '???????????? ???' + (+k+1) + ' - ' + ' ' + arr[+questionPosition][0];

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
            ['?????? ???????????????????? ???????????????', 'Java', 'JavaScript@$', 'Delphi', 'C#'],
            ['?????? ?????????? ???????????????????????????', '??????????????????@$', '??????????????', '????????????????', '?????? ????????????????'],
            ['?????? ?????????????? ???????????????????????????', '??????????', '??????????????????????', '????????????????@$', '??????????????'],
            ['???????????? ?????????? ?????????? ???? ?????????????????', '??????????????????', '??????????????????', '????????-????????-????????????????????', '????????????????????@$'],
            ['?????????????? ???????? ?????????????', '3', '5@$', '20', '100'],
            ['?????????????? ?????? ?????????????????????', '??????', '50/50', '???? ?? ???????', '????@$'],
            ['???????????? ?????????? ???????????? ?????????????????', '???? ??????', '24@$', '31', '1'],
        ],
        [
            ['?????? ???????????????? ???????????????? ???????? ???????????????? ?????????????', '????????', '?? ????????@$', '???? ????????????', '?? ????????????'],
            ['???????? ???? ???????? ???? ???????? ???????????? ???? ?????????? ?????????????????? ?????????????????????? ???? ????????????????????????-2008???', '??????????@$', '????????????', '??????????????', '??????????????'],
            ['?????? ?????????????????? ?????????????????? ????????, ???????????????????? ?????????? ???????????? ???????????', '?????????????????????? ??????????????????', '???????????????? ?????????? ????????????????@$', '???????????????? ??????', '??????????'],
            ['??????, ?????? ??????????????????, ???????????? ?????????????????? ?????????????????', '??????', '?????????????????? ??????????', '????????@$', '????????'],
            ['?? ?????????? ???????????? ?????? ?????????????????????? ???????????? ?? ???????? ?????????????? ?????????????', '??????????????', '????????????????', '??????????????', '????????????????????????????@$'],
            ['?????????? ???????? ???????????????????? ?? ???????????????? ?????????????? ?? ?????????? ???????????????', '??????????????????', '??????????????', '??????????????????@$', '????????????'],
            ['???? ?????????? ???????????? ???????????????? ?????????????????????? ?????????? ?????????????????????? ???????? ???????? ???????????????????', '???????? ????????????', '???????????? ??????????????@$', '?????????? ????????????', '?????????? ????'],
        ],
        [
            ['?????????? ?????????? ?????????? ?????????????? ?????????????? ?????????? ???????? ???? ?????????????', '??????????????????', '?? ??????????????@$', '??????????????????', '????????????????'],
            ['?????????? ?????????????????????? ???????????????? ???????????????? ?????????????????????? ???????????????????? ?????????', '????????????', '????????????', '??????????@$', '??????????'],
            ['?? ?????????? ???????????????????? ?????? ?????? ?????????????? ???????????? ?????? ???????????????? ???? 18 ?????????? 27 ?????????', '?????????????????????????? ????????@$', '???????????????????? ????????????????', '???????????????? ????????????????????', '????????????'],
            ['?????? ?? ???????????? ???????????????? ???????????????? ???????????????? ??????????, ???????????????????? ?? ???????????????????? ???????', '??????????????', '??????????????', '????????????????', '????????????????????@$'],
            ['?????? ?????????? ?????????? ?????????? ???????????? ?? ???????????? ?????????????????', '???? ??????????????', '???? ??????????????@$', '???? ??????????', '???? ??????????????'],
            ['???? ???????? ?????????????? ????????????, ?????????????????????? ?? ???????????????? ????????????????, ?????????????????????????? ???? ?????????????', '???? ???????? ????????????????@$', '???? ?????????? ????????', '???? ???????????????????????? ????????????', '???? ?????????? ????????'],
            ['???? ?????????? ?? ?????????? ?????????????????? ?????????????????? ???????????????? ???????????????', '????????????', '??????????????@$', '????????????', '??????????????'],
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
