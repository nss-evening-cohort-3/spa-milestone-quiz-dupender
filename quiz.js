"use strict"

function populatePage(inventory) {
  // Loop over the inventory and populate the page
    let outputString = "";
    let container=document.getElementsByClassName("container")
  for (var i = 0; i < inventory.length; i++) {
    console.log("i",i );
    let currentCar = inventory[i];
    console.log("inventory",currentCar );
    outputString +=`<div id="output" class="row"><div class="col-xs-4"><p>${currentCar.year}  ${currentCar.make}  ${currentCar.model}</p><p>Price:  ${currentCar.price}</p>  Color:  ${currentCar.color}  <p>${currentCar.purchased}</p><p>Description:  ${currentCar.description}</p></div></div>`
    container[0].innerHTML = outputString;
    console.log("outputString",outputString);
  };

  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);
// 