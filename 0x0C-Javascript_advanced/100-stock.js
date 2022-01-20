

let stock = {
  macbook: 2,
  iphone: 4,
}

function processPayment(itemName) {
  this[itemName] -= 1;
  console.log("Payment is being processed for item", itemName);
}

function processError(itemName) {
  console.log("No more", itemName, "in stock");
  console.log("Payment is not being processed");
}

function processOrder(itemName, callbackPayment, callbackError) {
  console.log("Verifying the stock of ", itemName);
  if (this[itemName] > 0) {
    callbackPayment(itemName)    
  } else {
    callbackError(itemName)
  }
}

var item = (prompt("Please enter the item you would like to purchase (Macbook, Iphone)")).toLowerCase()
