"use strict";


var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));

myModal.show();

var readyToSend=false;
var namesToSent;

var session_id;
var deck="";
let cardPlayer1_B="";
let cardPlayer1_color="";
let cardPlayer1_value="";
let cardPlayer2_B="";
let cardPlayer3_B="";
let cardPlayer4_B="";
let nextPlayer;
var baseUrl="src/img/";
var fieldnamenList;


let field=document.getElementsByClassName("modal-body");

field[0].addEventListener("keyup", function(){   
     
    let fieldName1 =document.getElementById("name1");
    let fieldName2 =document.getElementById("name2");
    let fieldName3 =document.getElementById("name3");
    let fieldName4 =document.getElementById("name4");

    fieldnamenList =[fieldName1.value,fieldName2.value,fieldName3.value,fieldName4.value];
    var formIsFull=true;

    fieldnamenList.forEach(function(fieldElement) { 
        if (fieldElement=="")  
                { 
                    formIsFull=false; 
                }
    });

    if (formIsFull) {
        readyToSend=true;
        for (var j = 0, len = fieldnamenList.length-1; j < len; j++){
            for (var i = j+1, len = fieldnamenList.length; i < len; i++){
                if (fieldnamenList[i] == fieldnamenList[j]){
                        console.log("HIER Zwei felden sind gleich");
                        readyToSend=false;
                }
            }
        } 
        namesToSent = fieldnamenList;
    }

});

async function load(){
    console.log("start_function: "+ namesToSent);
    // hier starten wir gleich den request
    // warten auf das promise (alternativ fetch, then notation)
    let response = await fetch("http://nowaunoweb.azurewebsites.net/api/game/start",{             
        method: 'POST',
        body: JSON.stringify(
                namesToSent
        ),        
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });

    // dieser code wird erst ausgeführt wenn fetch fertig ist
    if(response.ok){ // wenn http-status zwischen 200 und 299 liegt
        // wir lesen den response body 
        let result = await response.json(); // alternativ response.text wenn nicht json gewünscht ist
        console.log(result);
        alert(JSON.stringify(result));
        console.log(result);
        saveResponseFromServer(result);
        drawCards();
        setPlayersNamesInBoard(namesToSent);
    }else{
        alert("HTTP-Error: " + response.status);
    }
}


function saveResponseFromServer(response){
    session_id=response.Id;
    let _deck=response.TopCard;
    nextPlayer=response.NextPlayer;
    deck=`${_deck.Color}${_deck.Value}`
    cardPlayer1_B = response.Players[0].Cards.map(item=>`${item.Color}${item.Value}`);
    cardPlayer1_color = response.Players[0].Cards.map(item=>`${item.Color}`);
    cardPlayer1_value = response.Players[0].Cards.map(item=>`${item.Value}`);
    cardPlayer2_B = response.Players[1].Cards.map(item=>`${item.Color}${item.Value}`);
    cardPlayer3_B = response.Players[2].Cards.map(item=>`${item.Color}${item.Value}`);
    cardPlayer4_B = response.Players[3].Cards.map(item=>`${item.Color}${item.Value}`);

}

let but=document.getElementsByClassName("footer_btn-primary");
but[0].addEventListener("click", function(){  
    console.log("HIER in start game");
    if(readyToSend) { 
         myModal.hide()
          load();          
    };

});

function setPlayersNamesInBoard(names){
    for (let i = 0; i < names.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = names[i];
        let nameField = document.getElementById('name-player'+ (i+1));
        nameField.appendChild(li);
    }
}



async function drawCards(){
    console.log("LUISAAAAA2"+deck);
    const url_deck = `${baseUrl}${deck}.png`;
    let myElem=document.getElementById("deck");
    const img = document.createElement("img");
    img.src = url_deck;
    myElem.appendChild(img);

    for(let i=0; i<cardPlayer1_B.length ;i++){
        const url = `${baseUrl}${cardPlayer1_B[i]}.png`;
        console.log("URL :"+ url);
        let myElem=document.getElementsByClassName("Player1-hand")[0];
        const img = document.createElement("img");
        img.src = url;
        img.dataset.value=cardPlayer1_value[i];
        img.dataset.color=cardPlayer1_color[i];

        myElem.appendChild(img);
    }
    for(let i=0; i<cardPlayer2_B.length ;i++){
        const url = `${baseUrl}${cardPlayer2_B[i]}.png`;
        console.log("URL :"+ url);
        let myElem=document.getElementsByClassName("Player2-hand")[0];
        const img = document.createElement("img");
        img.src = url;
        myElem.appendChild(img);
    }
    for(let i=0; i<cardPlayer3_B.length ;i++){
        const url = `${baseUrl}${cardPlayer3_B[i]}.png`;
        console.log("URL :"+ url);
        let myElem=document.getElementsByClassName("Player3-hand")[0];
        const img = document.createElement("img");
        img.src = url;

        myElem.appendChild(img);
    }
    for(let i=0; i<cardPlayer4_B.length ;i++){
        const url = `${baseUrl}${cardPlayer4_B[i]}.png`;
        console.log("URL :"+ url);
        let myElem=document.getElementsByClassName("Player4-hand")[0];
        const img = document.createElement("img");
        img.src = url;
        myElem.appendChild(img);
    }
    setActivePlayer();

}

function setActivePlayer() {


   for (let i=0;i<fieldnamenList.length;i++){
       if(fieldnamenList[i]==nextPlayer){
        let myElem=document.getElementById("name-player"+(i+1));
        const li = document.createElement("li");
        li.innerHTML ="Active Player";        
        myElem.appendChild(li);
       }
   }
}

document.querySelector(".card-all").addEventListener("mouseover", function(event){
    console.log(event.target.tagName);
    if (event.target.tagName === "IMG"){
        event.target.classList.add("selected");
    }
});

document.querySelector(".card-all").addEventListener("mouseout", function(event){
    if (event.target.tagName === "IMG"){
        event.target.classList.remove("selected");
    }    
});

document.querySelector(".card-all").addEventListener("click", function(event){
    console.log(event.target.dataset.value);
    console.log(event.target.dataset.color);


    sendCard(event.target.dataset.value,event.target.dataset.color);
});


async function sendCard(value, color){
    console.log("start_function send card "+value);

    //{id}?value={value}&color={color}&wildColor={wildColor}

    let response = await fetch("http://nowaunoweb.azurewebsites.net/api/game/playCard/"+session_id+"?value="+value+"&color="+color+"&wildColor= ",
    {       
        method: 'PUT',       
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });

    if(response.ok){ 
        let result = await response.json(); // alternativ response.text wenn nicht json gewünscht ist
        console.log(result);
        alert(JSON.stringify(result));
        //saveResponseFromServer(result);
        //drawCards();
        //setPlayersNamesInBoard(namesToSent);
    }else{
        alert("HTTP-Error: " + response.status);
    }
}



