"use strict";


var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));

myModal.show();

var readyToSend=false;


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
    }   
});

let but=document.getElementsByClassName("footer_btn-primary");
but[0].addEventListener("click", function(){  
    console.log("HIER in start game");
    if(readyToSend) myModal.hide();
});





