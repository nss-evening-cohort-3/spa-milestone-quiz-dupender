"use strict"

function populatePage(inventory) {
  // Loop over the inventory and populate the page
    let outputString = "";
    let output=document.getElementById("output");
  for (var i = 0; i < inventory.length; i++) {
    let currentCar = inventory[i];
    outputString +=`<div class="col-xs-4"><div id="eachCar${i}" class="car"><p>${currentCar.year}  ${currentCar.make}  ${currentCar.model}</p><p>Price:  ${currentCar.price}</p>  Color:  ${currentCar.color}  <p>${currentCar.purchased}</p><p id="carDescription${i}">Description:  ${currentCar.description}</p></div></div>`

      output.innerHTML = outputString;
      };
  if (i<=3){
          document.getElementById("eachCar0").classList.add("fireBrick");
          document.getElementById("eachCar1").classList.add("black");
          document.getElementById('eachCar2').classList.add("blue");
          };
  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents(inventory);

};

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);
