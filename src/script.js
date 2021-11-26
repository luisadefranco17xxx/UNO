"use strict";


var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
var colorModal = new bootstrap.Modal(document.getElementById('staticBackdrop'));

var namesToSent;
var readyToSend;
var session_id;
var pile = ""; 
var pileColor="";
var pileValue="";
//let cards="";

let nextPlayer;
let lastPlayer;
var baseUrl = "src/img/";
var fieldnamenList;
var scoreHand;
var wild;
var eventForModal;
var lastWild;


let score=0;
let totScore=[0, 0, 0, 0];
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
    console.log(" WILD -->");
    console.log(wild);
    sendCard(eventForModal.dataset.value, eventForModal.dataset.color, wild);
});

async function startGame() {
    let p1TypeAvatar = document.querySelector('[name="inlineRadioOptions-1"]:checked').value
    let p2TypeAvatar = document.querySelector('[name="inlineRadioOptions-2"]:checked').value
    let p3TypeAvatar = document.querySelector('[name="inlineRadioOptions-3"]:checked').value
    let p4TypeAvatar = document.querySelector('[name="inlineRadioOptions-4"]:checked').value

    document.getElementById('avatar-p1').src ="https://robohash.org/" + fieldnamenList[0] +".png?set=" + p1TypeAvatar;
    document.getElementById('avatar-p2').src ="https://robohash.org/" + fieldnamenList[1] +".png?set=" + p2TypeAvatar;
    document.getElementById('avatar-p3').src ="https://robohash.org/" + fieldnamenList[2] +".png?set=" + p3TypeAvatar;
    document.getElementById('avatar-p4').src ="https://robohash.org/" + fieldnamenList[3] +".png?set=" + p4TypeAvatar;



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
        console.log("HTTP-Error: " + response.status);
    }
}


function saveResponseFromServer(response) {
    //SCORE
    session_id = response.Id;
    lastPlayer=nextPlayer;
    nextPlayer = response.NextPlayer;
    let topCard = response.TopCard;
    pile = `${topCard.Color}${topCard.Value}`;
    pileColor=topCard.Color;
    pileValue=topCard.Value;

    for (let i = 0; i < 4; i++) {
        arrPlayer_[i]=new Player("toCancel", color_, value_, cards_, score_);
        arrPlayer_[i].cards_=response.Players[i].Cards.map(item => `${item.Color}${item.Value}`);
        arrPlayer_[i].color_=response.Players[i].Cards.map(item => `${item.Color}`);
        arrPlayer_[i].value_=response.Players[i].Cards.map(item => `${item.Value}`);
        arrPlayer_[i].score_=response.Players[i].Score;
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
    //console.log("totScore in :setPlayersNamesInBoard "+totScore)
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

async function setActivePlayer() {
    for (let i = 0; i < fieldnamenList.length; i++) {
        if (fieldnamenList[i] == nextPlayer) {
            let myElem = document.getElementById("name-player" + (i + 1));


            let myHand = document.getElementById("hand-player" + (i + 1));
            myHand.classList.add("active-hand");

            let activePlayerWrapper = myHand.parentElement.parentElement.parentElement;
            activePlayerWrapper.classList.add("scale-up-center");

            let activeAvatarWrapper = document.getElementById("avatar-wrapper-player" + (i + 1));
            activeAvatarWrapper.classList.remove('d-flex');

            let activeAvatar = document.getElementById("avatar-p"+ (i + 1));
            activeAvatar.classList.add('active-avatar');


        } else {
            let myElem = document.getElementById("name-player" + (i + 1));
            let activeLi = myElem.querySelector(".active-player");
            if (activeLi != null) {
                activeLi.remove();
            }
            console.log("Luisa1:  nextPlayer  :"+nextPlayer)
            let myHand = document.getElementById("hand-player" + (i + 1));
            if (myHand.classList.contains("active-hand")) {
                myHand.classList.remove("active-hand");
            }

            let notActivePlayerWrapper=myHand.parentElement.parentElement.parentElement;
            notActivePlayerWrapper.classList.remove("scale-up-center");
            // notActivePlayerWrapper.classList.add("scale-down-center");
            // setTimeout(function (){
            //     notActivePlayerWrapper.classList.remove("scale-down-center");
            // }, 500);

            let notActiveAvatarWrapper = document.getElementById("avatar-wrapper-player" + (i + 1));
            notActiveAvatarWrapper.classList.add('d-flex');

            let notActiveAvatar = document.getElementById("avatar-p"+ (i + 1));
            notActiveAvatar.classList.remove('active-avatar');
        }
    }
}

async function sendCard(value, color, wild) {
    try{
        let response = await fetch("http://nowaunoweb.azurewebsites.net/api/game/playCard/" + session_id + "?value=" + value + "&color=" + color + "&wildColor=" + wild,
            {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            });

        if (response.ok) {
            let result = await response.json();
            if (result.error == "WrongColor" || result.error == "Draw4NotAllowed") {
                showErrorToSelectCard(true);
                return false;
            } else {
                console.log('Aquí removemos el background color -->' + lastWild);
                document.getElementById('card-pile-and-deck').classList.remove('back-color-'+ lastWild);

                if (color === 'Black'){
                    console.log('ESTE DEBE SER EL COLOR ELEGIDO ' + wild);
                    lastWild = wild;
                    document.getElementById('card-pile-and-deck').classList.add('back-color-'+ wild);
                }
                saveResponseFromServerAfterPlayCard(result);
                //saveResponseFromServer(result);  //TODO vedere se ok
                showErrorToSelectCard(false);
                return true;
            }
        } else {
            console.log('response not OK')
            console.log("HTTP-Error: " + response.status);
            return false;
        }
    } catch(e){
        alert("No internet connection: "+e)
    }
}


function saveResponseFromServerAfterPlayCard(response) {
    lastPlayer=nextPlayer;
    nextPlayer = response.Player;

    setActivePlayer();

    for (let i = 0; i < fieldnamenList.length; i++) {
        setPlayersHandsAndScoresAfterPlayCard(fieldnamenList[i], i + 1);
    }

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
        saveResponseFromServerAfterSetPlayersHandsAndScores(result, playerNumber);

        return true;
    } else {
        console.log("HTTP-Error: " + response.status);
        return false;
    }
}

function setScore(score,playerNumber){
    console.log(playerNumber);
    totScore[playerNumber-1]=score;
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


    if (cardsPlayerToSetHand.length==0 && lastPlayer==fieldnamenList[playerNumber-1] ){
        let tot=0;
        for (let i = 0; i < 4; i++) {
            tot = tot+totScore[i];    
        }
        let message ="Player : "+fieldnamenList[playerNumber-1] + " won with "+tot+" points";
        playerWon(message)
    }

    if (cardsPlayerToSetHand.length==1 && lastPlayer==fieldnamenList[playerNumber-1]){
        showCalledUNO(true,fieldnamenList[playerNumber-1]);
    }

    let myElem = document.getElementById("hand-player" + playerNumber);
    while (myElem.firstChild) {
        myElem.removeChild(myElem.firstChild);
    }

    for (let i = 0; i < cardsPlayerToSetHand.length; i++) {
        const url = `${baseUrl}${cardsPlayerToSetHand[i]}.png`;

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
        console.log("HTTP-Error: " + response.status);
        return false;
    }
}

async function appendPileTopFromResponseFromServerAfterTopCard(response) {
    pileColor=response.Color;
    pileValue=response.Value;
    
    let _pile = `${response.Color}${response.Value}`
    const url_pile = `${baseUrl}${_pile}.png`;

    let myElem = document.getElementById("pile");
    const img = document.createElement("img");
    img.src = url_pile;
    img.id = "pile-top"
    img.classList.add('fade-in')
    myElem.appendChild(img);
    setTimeout(function(){
        myElem.classList.remove('fade-in')
    }, 1001)
}

async function removeSelectedCardFromPlayerHand() {
    let toRemove = document.getElementById("selected-card");
    toRemove.remove();
}

async function removeOldPileTopCard() {
    let toRemove = document.getElementById("pile-top");
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
        showErrorToSelectCard(false);

        for (let i = 0; i < fieldnamenList.length; i++) {
            if (fieldnamenList[i] == playerToReceiveCard) {
                let myElem = document.getElementById("hand-player" + (i + 1));
                const img = document.createElement("img");
                img.src = url;
                img.dataset.value = result.Card.Value;
                img.dataset.color = result.Card.Color;
                img.classList.add('fade-in');
                myElem.appendChild(img);
            }
        }
        nextPlayer = result.NextPlayer;
        setTimeout(setActivePlayer, 1000);
        return true;
    } else {
        console.log("HTTP-Error: " + response.status);
        return false;
    }
}

function addHeartbeatToTopDeckCard(){
    let topDeckCard = document.getElementById("deck-11");
    topDeckCard.classList.add("heartbeat");
    setTimeout(function(){
        topDeckCard.classList.remove("heartbeat");
    }, 1400);
}


document.getElementById("deck-11").addEventListener("click", function (event) {
    showCalledUNO(false,"");
    addHeartbeatToTopDeckCard();
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
        if(event.target.nodeName == 'IMG') {
            if (event.target.dataset.color === "Black" && event.target.parentElement.classList.contains("active-hand")) {

                console.log("checkIfValidCardInHand" +checkIfValidCardInHand());
                if (event.target.dataset.value==13  && !checkIfValidCardInHand())  {                     
                   eventForModal = event.target
                   colorModal.show();
                  } else if (event.target.dataset.value==14){
                    eventForModal = event.target
                    colorModal.show();
                  } else  {
                      showErrorToSelectCard(true);
                    } 
            } else if (event.target.parentElement.classList.contains("active-hand")) {
                
                console.log("I will call sendCard funtion --> wild: " +wild);
                if( pileColor=="Black")  pileColor=wild;
                if(event.target.dataset.color== pileColor || event.target.dataset.value==pileValue)   
                {
                    console.log("Send OK");
                    wild = "";
                    sendCard(event.target.dataset.value, event.target.dataset.color, wild);
                } else {
                    showErrorToSelectCard(true);
                }
            } else {
                event.target.classList.remove("shake-horizontal");
                event.target.offsetWidth;
                event.target.classList.add("shake-horizontal");
            }
            showCalledUNO(false,"")
        } else {
            console.log("NO ES ImAGEN EL event.target!!!")
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

function showCalledUNO(bool,player) {
    if (bool) {
        document.getElementById('called-UNO').classList.add('display-called-UNO');
        document.getElementById('called-UNO-message').innerHTML=player+ " CALLED UNO ";
    } else {
        document.getElementById('called-UNO').classList.remove('display-called-UNO');
    }
}

function playerWon(message){
    document.getElementById('Player-won').classList.add('display-Player-won');
    document.getElementById('Player-won-message').innerHTML=message;
    console.log(message);
}

function checkIfValidCardInHand(){
   let  arrCardActivePlayer=  document.getElementsByClassName("active-hand")[0].childNodes;
    if(arrCardActivePlayer.length===1)   return false;

    for (let i = 0; i < arrCardActivePlayer.length; i++) {

            if(arrCardActivePlayer[i].dataset.value != 13) {
                    if ( arrCardActivePlayer[i].dataset.value == pileValue || arrCardActivePlayer[i].dataset.color == pileColor)  {
                    console.log("CALL NO ALLOWED");
                    return true;
                    } 
                } 
    }
   return false;
}


//idea for background 
//https://www.google.at/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DHMW67GFOnIc&psig=AOvVaw2t9cSUPCMAXE2H1Nl74NIw&ust=1638009160328000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOjU1uPptfQCFQAAAAAdAAAAABAs