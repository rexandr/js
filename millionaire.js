function start()
{
    document.querySelector('#start').remove();

    let friend = document.createElement("button");
    document.body.appendChild(friend);
    friend.setAttribute('onclick', 'removeFriend()');
    friend.setAttribute('id', 'friend');
    friend.setAttribute('right', '20px');
    friend.innerText = 'Friend';

    let fifty = document.createElement("button");
    document.body.appendChild(fifty);
    fifty.setAttribute('onclick', 'removeFifty()');
    fifty.setAttribute('id', 'fifty');
    fifty.innerText = '50/50';

    let question = document.createElement("label");
    document.body.appendChild(question);
    question.setAttribute('id', 'lable');
    question.innerText = arr[0][0];


    let table = document.querySelector('table');

    let answer = 1;

    for (let i = 0; i < table.rows.length; i++) {
        for (let j = 0; j < table.rows[i].cells.length; j++) {
            let button = document.createElement("button");
            button.innerText = arr[0][answer];
            answer++;
            table.rows[i].cells[j].appendChild(button);;
        }
    }




    // let body = document.body;
    // let table1 = document.createElement("table");
    // body.appendChild(table1);
    // let tr = document.createElement("tr");
    // table1.appendChild(tr);
    // table1.appendChild(tr);
    // let td = document.createElement("td");
    // let button = document.createElement("button");
    // button.innerText = "Click";
    // td.appendChild(button);
    // tr.appendChild(td);


}

function removeFriend()
{
    document.querySelector('#friend').remove();
}

function removeFifty()
{
    document.querySelector('#fifty').remove();
}


let arr = [
    ['question 1', 'answer1', 'answer2', 'answer3', 'answer4'],
    ['question 2', 'answer5', 'answer6', 'answer7', 'answer8']
            ]