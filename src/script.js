"use strict";


var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
var colorModal = new bootstrap.Modal(document.getElementById('staticBackdrop'));

var namesToSent;
var readyToSend;
var session_id;
var pile = "";
//let cards="";  

let nextPlayer;
var baseUrl = "src/img/";
var fieldnamenList;
var scoreHand;
var wild;
var eventForModal;


let score=0;
class Player {
    constructor(name, cards, color, value, score) {
        this.name = name;
        this.cards = cards;
        this.color = color;
        this.value = value;
        this.score = score;
    }
}
let arrPlayer_=new Player ;
let score_;
let cards_ = ["", "", ""];
let color_ = ["", "", ""];
let value_ = [0, 0, 0];


myModal.show();
//<img src="https://robohash.org/YOUR-TEXT.png">


setTimeout(function () {
    document.getElementById("name1").focus();
}, 500);
let formInputNames = document.getElementById("form-names-modal");

formInputNames.addEventListener("keyup", function () {
 
    let fieldName1 = document.getElementById("name1");
    let fieldName2 = document.getElementById("name2");
    let fieldName3 = document.getElementById("name3");
    let fieldName4 = document.getElementById("name4");


    fieldnamenList = [fieldName1.value, fieldName2.value, fieldName3.value, fieldName4.value];
    var formIsFull = true;
    readyToSend = false;

    fieldnamenList.forEach(function (fieldElement) {
        if (fieldElement == "") {
            formIsFull = false;
            document.getElementById('ready-to-send').classList.remove('display-feedback-success');        
            document.getElementById('error-feedback-empty').classList.add('display-feedback-empty');
        }
        if (formIsFull == true) {
            document.getElementById('error-feedback-empty').classList.remove('display-feedback-empty');
        }
    });

    if (formIsFull) {
        readyToSend = true;
        for (var j = 0, len = fieldnamenList.length - 1; j < len; j++) {
            for (var i = j + 1, len = fieldnamenList.length; i < len; i++) {

                if (fieldnamenList[i] == fieldnamenList[j]) {
                    console.log("There are two repeated names");
                    document.getElementById('error-feedback-names').classList.add('display-feedback-repeatednames');
                    document.getElementById('ready-to-send').classList.remove('display-feedback-success');
                    document.getElementById('start-game-btn').disabled = true;

                    readyToSend = false;
                }
            }
        }
        if (readyToSend == true) {
            document.getElementById('error-feedback-names').classList.remove('display-feedback-repeatednames');
            document.getElementById('ready-to-send').classList.add('display-feedback-success');
            document.getElementById('start-game-btn').disabled = false;
        }
        namesToSent = fieldnamenList;
    }
});

let startGameModalButton = document.getElementById("start-game-btn");

startGameModalButton.addEventListener("click", function () {

    if (readyToSend) {
        myModal.hide()
        startGame();
    }
});

let colorButtonClicked = document.getElementById('colorButtonClicked');
colorButtonClicked.addEventListener("click", function (event) {
    wild = event.target.id;
    console.log("ESTE ES WILD -->")
    console.log(wild)
    sendCard(eventForModal.dataset.value, eventForModal.dataset.color, wild);
});

async function startGame() {

    let response = await fetch("http://nowaunoweb.azurewebsites.net/api/game/start", {
        method: 'POST',
        body: JSON.stringify(
            namesToSent
        ),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });

    if (response.ok) {
        let result = await response.json();

        saveResponseFromServer(result);
        setPlayersNamesInBoard(namesToSent,result);
        setuptStartingCards();


    } else {
        alert("HTTP-Error: " + response.status);
    }
}

function saveResponseFromServer(response) {
    //SCORE
    session_id = response.Id;
    nextPlayer = response.NextPlayer;
    let topCard = response.TopCard;
    pile = `${topCard.Color}${topCard.Value}`;


   for (let i = 0; i < 4; i++) {
        arrPlayer_[i]=new Player("toCancel", color_, value_, cards_, score_);
        arrPlayer_[i].cards_=response.Players[i].Cards.map(item => `${item.Color}${item.Value}`);    
        arrPlayer_[i].color_=response.Players[i].Cards.map(item => `${item.Color}`);
        arrPlayer_[i].value_=response.Players[i].Cards.map(item => `${item.Value}`);
        console.log("LUISA1:"+arrPlayer_[i].cards_);
        console.log("LUISA1:"+arrPlayer_[i].color_);
        console.log("LUISA1:"+arrPlayer_[i].value_);
   }

}


function setPlayersNamesInBoard(names,response) {
    for (let i = 0; i < names.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = names[i];
        let nameField = document.getElementById('name-player' + (i + 1));
        nameField.appendChild(li);
    }

    for (let i = 0; i < 4; i++) {
        setScore(response.Players[i].Score,i+1);
    }
}

async function setuptStartingCards() {

    const url_pile = `${baseUrl}${pile}.png`;
    let myElem = document.getElementById("pile");
    const img = document.createElement("img");
    img.src = url_pile;
    img.id = "pile-top";
    myElem.appendChild(img);


    for (let j = 0; j < 4; j++) {
         
        for (let i = 0; i < arrPlayer_[j].cards_.length; i++) {
            const url = `${baseUrl}${arrPlayer_[j].cards_[i]}.png`;
            console.log('CARDS PLAYER '+j+'-->');
            console.log("URL :" + url);

            let myElem;
            if(j==0)      {  myElem = document.getElementsByClassName("Player1-hand")[0]; }
            else if(j==1) {  myElem = document.getElementsByClassName("Player2-hand")[0]; }
            else if(j==2) {  myElem = document.getElementsByClassName("Player3-hand")[0]; }
            else if(j==3) {  myElem = document.getElementsByClassName("Player4-hand")[0]; }         
            const img = document.createElement("img");
            img.src = url;
            img.dataset.value = arrPlayer_[j].value_[i];
            img.dataset.color = arrPlayer_[j].color_[i];
            myElem.appendChild(img);
        }
    }
    setActivePlayer();
}

function setActivePlayer() {
    for (let i = 0; i < fieldnamenList.length; i++) {
        if (fieldnamenList[i] == nextPlayer) {
            let myElem = document.getElementById("name-player" + (i + 1));
            const li = document.createElement("li");
            li.innerHTML = "Active Player";
            li.classList.add('active-player')
            myElem.appendChild(li);

            let myHand = document.getElementById("hand-player" + (i + 1));
            myHand.classList.add("active-hand");

            let activeCard=myHand.parentElement.parentElement;
            activeCard.classList.add("scale-up-center");  

        } else {
            let myElem = document.getElementById("name-player" + (i + 1));
            let activeLi = myElem.querySelector(".active-player");
            if (activeLi != null) {
                activeLi.remove();
            }
          
            let myHand = document.getElementById("hand-player" + (i + 1));
            if (myHand.classList.contains("active-hand")) {
                myHand.classList.remove("active-hand");
            }

            let activeCard=myHand.parentElement.parentElement;
            activeCard.classList.remove("scale-up-center");
        }
    }
}

async function sendCard(value, color, wild) {

    let response = await fetch("http://nowaunoweb.azurewebsites.net/api/game/playCard/" + session_id + "?value=" + value + "&color=" + color + "&wildColor=" + wild,
        {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });

    if (response.ok) {

        let result = await response.json();
        console.log('Result from sendCard call --> ')
        console.log(result);
        alert(JSON.stringify(result));
        if (result.error == "WrongColor" || result.error == "Draw4NotAllowed") {
            showErrorToSelectCard(true);
            return false;
        } else {
            saveResponseFromServerAfterPlayCard(result);
            showErrorToSelectCard(false);
            return true;
        }
    } else {
        console.log('response not OK')
        alert("HTTP-Error: " + response.status);
        return false;
    }
}


function saveResponseFromServerAfterPlayCard(response) {
    nextPlayer = response.Player;

    setActivePlayer();

    for (let i = 0; i < fieldnamenList.length; i++) {
        setPlayersHandsAndScoresAfterPlayCard(fieldnamenList[i], i + 1);
    }

    //  removeSelectedCardFromPlayerHand();
    removeOldPileTopCard();
    setPileTopCard();
}

async function setPlayersHandsAndScoresAfterPlayCard(playerName, playerNumber) {

    let response = await fetch("http://nowaunoweb.azurewebsites.net/api/Game/GetCards/" + session_id + "?playerName=" + playerName,
        {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });

    if (response.ok) {
        let result = await response.json();
        console.log('result from setPlayersHandsAndScoresAfterPlayCard -->')
        console.log(result);
        saveResponseFromServerAfterSetPlayersHandsAndScores(result, playerNumber);
        return true;
    } else {
        alert("HTTP-Error: " + response.status);
        return false;
    }

}

function setScore(score,playerNumber){
    let spanScore = document.getElementById("score-player" + playerNumber);

    while (spanScore.firstChild) {
        spanScore.removeChild(spanScore.firstChild);
    }
    spanScore.appendChild(document.createTextNode('SCORE = ' + score));
}


function saveResponseFromServerAfterSetPlayersHandsAndScores(response, playerNumber) {
    scoreHand = response.Score;

    setScore(scoreHand,playerNumber);

    let cardsPlayerToSetHand = response.Cards.map(item => `${item.Color}${item.Value}`);
    let cardsPlayerToSetHand_color = response.Cards.map(item => `${item.Color}`);
    let cardsPlayerToSetHand_value = response.Cards.map(item => `${item.Value}`);
    let myElem = document.getElementById("hand-player" + playerNumber);
    while (myElem.firstChild) {
        myElem.removeChild(myElem.firstChild);
    }

    for (let i = 0; i < cardsPlayerToSetHand.length; i++) {
        const url = `${baseUrl}${cardsPlayerToSetHand[i]}.png`;
        console.log('CARDS PLAYERTOSETHAND--> Player = ' + fieldnamenList[playerNumber - 1])
        console.log("URL :" + url);

        const img = document.createElement("img");
        img.src = url;
        img.dataset.value = cardsPlayerToSetHand_value[i];
        img.dataset.color = cardsPlayerToSetHand_color[i];
        myElem.appendChild(img);
    }
}


async function setPileTopCard() {

    let response = await fetch("http://nowaunoweb.azurewebsites.net/api/Game/TopCard/" + session_id,
        {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });

    if (response.ok) {
        let result = await response.json();
        console.log('Result from setPileTopCard -->')
        console.log(result);
        appendPileTopFromResponseFromServerAfterTopCard(result);
        return true;
    } else {
        alert("HTTP-Error: " + response.status);
        return false;
    }
}

function appendPileTopFromResponseFromServerAfterTopCard(response) {
    let _pile = `${response.Color}${response.Value}`
    const url_pile = `${baseUrl}${_pile}.png`;

    let myElem = document.getElementById("pile");
    const img = document.createElement("img");
    img.src = url_pile;
    img.id = "pile-top"
    myElem.appendChild(img);

}

async function removeSelectedCardFromPlayerHand() {
    let toRemove = document.getElementById("selected-card");
    toRemove.remove();
}

async function removeOldPileTopCard() {
    let toRemove = document.getElementById("pile-top");
    console.log('Este es el que hay que remover de la pila -->');
    console.log(toRemove);
    toRemove.remove();
}

async function drawACardFromDeck() {
    let response = await fetch("http://nowaunoweb.azurewebsites.net/api/Game/DrawCard/" + session_id,
        {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });

    if (response.ok) {
        let result = await response.json();
        let playerToReceiveCard = result.Player;

        const url = `${baseUrl}${result.Card.Color}${result.Card.Value}.png`;
        console.log('Este está en drawCardFromDeck -->')
        console.log("URL :" + url);
        showErrorToSelectCard(false);

        for (let i = 0; i < fieldnamenList.length; i++) {
            if (fieldnamenList[i] == playerToReceiveCard) {
                let myElem = document.getElementById("hand-player" + (i + 1));
                const img = document.createElement("img");
                img.src = url;
                img.dataset.value = result.Card.Value;
                img.dataset.color = result.Card.Color;
                myElem.appendChild(img);
            }
        }
        nextPlayer = result.NextPlayer;
        setActivePlayer();
        return true;
    } else {
        alert("HTTP-Error: " + response.status);
        return false;
    }
}

document.getElementById("deck").addEventListener("click", function (event) {
    drawACardFromDeck();
})

for (let i = 0; i < 4; i++) {
    document.getElementsByClassName("card-body hand")[i].addEventListener("mouseover", function (event) {
        if (event.target.tagName === "IMG" && event.target.parentElement.classList.contains("active-hand")) {
            event.target.classList.add("selected");
        }
    });

    document.getElementsByClassName("card-body hand")[i].addEventListener("mouseout", function (event) {
        if (event.target.tagName === "IMG" && event.target.parentElement.classList.contains("active-hand")) {
            event.target.classList.remove("selected");
        }
    });

    document.getElementsByClassName("card-body hand")[i].addEventListener("click", function (event) {
        event.target.id = "selected-card";
        if (event.target.dataset.color === "Black" && event.target.parentElement.classList.contains("active-hand")) {
            eventForModal = event.target
            colorModal.show();
        } else if (event.target.parentElement.classList.contains("active-hand")) {
            wild = "";
            sendCard(event.target.dataset.value, event.target.dataset.color, wild);
        } else {
            event.target.classList.remove("shake-horizontal");
            event.target.offsetWidth;
            event.target.classList.add("shake-horizontal");
        }
    });
};

let restartButton = document.getElementById("restart-game-btn");
restartButton.addEventListener("click", function () {
    location.reload();
})


function showErrorToSelectCard(bool) {

      if (bool) {
        document.getElementById('error-to-select').classList.add('display-feedback-error');
      } else {
        document.getElementById('error-to-select').classList.remove('display-feedback-error');       
      }
}






