"use strict"

var CarLot = (function (originalCarLot){
  // let clickedID = "";
  //Pass in 2 arguments: A car DOM element that was clicked on and A color name.
  originalCarLot.setBorderBackground = function (selected, color ){
    selected.style.backgroundColor = color;
    selected.style.border = "4px solid yellow";
    console.log(selected.style.border );
  }

  originalCarLot.resetBorderBackground = function(){
  let cars = document.getElementsByClassName("car");
  for (var i = 0; i < cars.length; i++) {
    // selects all elements with the class 'car' in the DOM output string, which is ALL the 3 cars and resets the backgroundColor and border back to original values because of nulling out instyle properties that were added above
    cars[i].style.backgroundColor = "";
    cars[i].style.border = "";
    };
  }
return originalCarLot
}) (CarLot)