"use strict"

var CarLot = (function (originalCarLot) {
  let clickedID = "";
  originalCarLot.activateEvents = function (inventory){
    for (var i = 0; i < inventory.length; i++) {
      let selected = document.getElementById(`eachCar${[i]}`)
      selected.addEventListener("click", function(e) {
        // clickedID targets carDescription0(,1 & 2) individually & gives access of carDescription to mirrorText below
        clickedID = e.target.parentElement.lastChild.id
        console.log("e",clickedID);
        // increase border width and add background color to eachCar element  
        selected.classList.add("clicked");  
        // clear input field on nav bar 
        document.getElementById('inputBar').value = "";
        // put focus on inputBar
        document.getElementById('inputBar').focus();
        });  
        };
    };      
        // When you start typing into the navbar's text input, the description of the currently selected car should be bound to what you are typing in and match it exactly.
        document.getElementById("inputBar").addEventListener("keypress", mirrorText);
          function mirrorText() {
          document.getElementById(clickedID).innerHTML = document.getElementById("inputBar").value;
            };
  return originalCarLot;
  }) (CarLot)
