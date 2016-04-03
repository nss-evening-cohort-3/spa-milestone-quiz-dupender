"use strict"

function populatePage(inventory) {
  // Loop over the inventory and populate the page
    let outputString = "";
    let output=document.getElementById("output")
  for (var i = 0; i < inventory.length; i++) {
    let currentCar = inventory[i];
    // console.log("inventory",currentCar );
    outputString +=`<div class="col-xs-4"><div id="eachCar${i}"><p>${currentCar.year}  ${currentCar.make}  ${currentCar.model}</p><p>Price:  ${currentCar.price}</p>  Color:  ${currentCar.color}  <p>${currentCar.purchased}</p><p>Description:  ${currentCar.description}</p></div></div>`

    output.innerHTML = outputString;
    if (i===0||1||2){
      console.log("i", i);
      document.getElementById('eachCar${[0]}').classList.add("fireBrick");  
    }
  };

  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);
