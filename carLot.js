"use strict"
var CarLot = (function () {
  var inventory = [];

  return {
    getInventory: function () {
        return inventory;
    },
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
          inventoryLoader.open("GET","inventory.json");//tell loader where to go
          inventoryLoader.send();//tell loader to execute

      inventoryLoader.addEventListener("load", function () {
        inventory = JSON.parse(this.responseText).cars;
        // console.log(inventory);
        callback(inventory);
      });
    }
  };

})();