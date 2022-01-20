

function createElement(data) {
  var paragraph = document.createElement("p");
  paragraph.textContent = data.currentTarget.response;
  document.body.appendChild(paragraph);
}

function queryWikipedia (callback) {
  let qResponse = new XMLHttpRequest();
  
  qResponse.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*")
  qResponse.send();
  qResponse.onload = callback;
}

queryWikipedia(createElement);
