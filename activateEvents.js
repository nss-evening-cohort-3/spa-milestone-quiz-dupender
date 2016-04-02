"use strict"

var CarLot = (function (originalCarLot) {
  originalCarLot.activateEvents = function (){
    for (var i = 0; i < inventory.length; i++) {
      currentInv = inventory[i];
      console.log("currentInv",currentInv );

    };
  }
  console.log("originalCarLot",originalCarLot );
  return originalCarLot;
}) (CarLot)