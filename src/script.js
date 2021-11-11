"use strict";


var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));

myModal.show();

var readyToSend=false;
var namesToSent;
let cardPlayer1_A="";
let cardPlayer1_B="";
var baseUrl="src/img/";

let field=document.getElementsByClassName("modal-body");
field[0].addEventListener("keyup", function(){   
     
    let fieldName1 =document.getElementById("name1");
    let fieldName2 =document.getElementById("name2");
    let fieldName3 =document.getElementById("name3");
    let fieldName4 =document.getElementById("name4");

    var fieldnamenList =[fieldName1.value,fieldName2.value,fieldName3.value,fieldName4.value];
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
        namesToSent =fieldnamenList;
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
    }else{
        alert("HTTP-Error: " + response.status);
    }

    
}


function saveResponseFromServer(response){
    console.log(response.Players[0].Cards);
    cardPlayer1_A= response.Players[0].Cards.map(item=>`${item.Color.slice(0,1)}${item.Value}`);
    cardPlayer1_B= response.Players[0].Cards.map(item=>`${item.Color}${item.Value}`);
    console.log("Example a-> card 1 player 1: "+cardPlayer1_A[0]);
    console.log("Example b-> card 1 player 1: "+cardPlayer1_B[0]);
}

let but=document.getElementsByClassName("footer_btn-primary");
but[0].addEventListener("click", function(){  
    console.log("HIER in start game");
    if(readyToSend) { 
         myModal.hide()
          load();
          
    };

});



async function drawCards(){
    for(let i=0; i<cardPlayer1_B.length ;i++){
        const url = `${baseUrl}${cardPlayer1_B[i]}.png`;
        console.log("URL :"+ url);
        let myElem=document.getElementsByClassName("Player1-hand")[0];
        const img = document.createElement("img");
        img.src = url;
        myElem.appendChild(img);
    }
}








