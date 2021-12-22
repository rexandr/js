function start() {

    //правильну відповідь позачати, а при виводі позначку видаляти
    //при виводі питання видаляти його з масиву.
    //перепитати чи дісно використати підказку
    //if answer is right than increase a global variable and set price to another global value according to price-array's index.

    //start button removing
    document.querySelector('#start').remove();


    //friend calling hint button creating
    let friend = document.createElement("button");
    document.body.appendChild(friend);
    friend.setAttribute('onclick', 'document.querySelector(\'#friend\').remove()');
    friend.setAttribute('id', 'friend');
    friend.setAttribute('right', '20px');
    friend.innerText = 'Friend';

    
    //50/50 hint button creating
    let fifty = document.createElement("button");
    document.body.appendChild(fifty);
    fifty.setAttribute('onclick', 'document.querySelector(\'#fifty\').remove()');
    fifty.setAttribute('id', 'fifty');
    fifty.innerText = '50/50';

    showNextQuestion();

}


// Questions and answers array

let arr =
[
    ['question 1', 'answer1', 'answer2@$', 'answer3', 'answer4'],
    ['question 2', 'answer5', 'answer6@$', 'answer7', 'answer8'],
    ['question 3', 'answer9', 'answer10@$', 'answer11', 'answer12'],
    ['question 4', 'answer13', 'answer14@$', 'answer15', 'answer16'],
    ['question 5', 'answer17', 'answer18@$', 'answer19', 'answer20'],
]

function showNextQuestion() {

    //Question finding
    let questionPosition = Math.random() * arr.length;
    questionPosition = Math.floor(questionPosition);
    console.log(questionPosition);

    //Question showing
    let shownQuestion = document.createElement("label");
    document.body.appendChild(shownQuestion);
    shownQuestion.setAttribute('id', 'lable');
    shownQuestion.innerText = arr[+questionPosition][0];

    //table with answers
    let table = document.querySelector('table');

    //answers index
    let answerIndex = 1;

    
    //delete previous answers from table
    while (document.querySelector(".ans"))
    {
        document.querySelector(".ans").remove();
    }

    //right answer checking


    
    // table filling with answers
    for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; j < table.rows[i].cells.length; j++) {
            let button = document.createElement("button");

            let answer = arr[+questionPosition][answerIndex++];
            let action = 'showNextQuestion()';
            if (answer.indexOf('@$')>-1){                                       //find hint
                answer = answer.slice(0,answer.indexOf('@$'));                  //cut hint
            }else{
                action = 'finishGame()';
            }

            button.innerText = answer;                                        //answer setting
            button.setAttribute('onclick', action);
            button.setAttribute('class', 'ans');
            table.rows[i].cells[j].appendChild(button);
        }
    }

    //delete shown question
    arr.splice(questionPosition,1);
    console.log(arr);

}


//finishing game when user has wrong or press STOP button.
function finishGame() {
    alert('Game over!');
}