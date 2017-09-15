//  caesarCypher("Hello, world", 3);
function elClass(className, i) {
  return document.getElementsByClassName(className)[i];
}
function elId(IdName) {
  return document.getElementById(IdName);
}
var apiUrl = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";

function getAPI(APIurl, term, field, num){
  return fetch(APIurl+term)
    .then(function(APIvar){
      return APIvar.json()
        .then(function(content){
          string = content.join(" ");
          // field.value = caesarCypher(string, num); //to specific
          field.value = caesarCypher(string, num); //to specific
          // console.log(string); //to specific
          return string;
        });
    });
}
var button = elId("importTextFromAPI");
button.addEventListener("click", function(event){
  event.preventDefault();
  shiftNum = elClass("shift", 0).value;
  elClass("encryptedTextArea", 0).value = "";
  getAPI(apiUrl, "", elClass("encryptedTextArea", 0), shiftNum);
  // console.log(quote);
  // elClass("encryptedTextArea", 0).value = quote;
});

var button = elId("decypher");
button.addEventListener("click", function(event){
  event.preventDefault();
  shiftNum = elClass("shift", 0).value;
  elClass("unEncryptedText", 0).value = caesarDeCypher(
    elClass("encryptedTextArea", 0).value, shiftNum
  );
});

var button = elId("cypher");
button.addEventListener("click", function(event){
  event.preventDefault();
  shiftNum = elClass("shift", 0).value;
  elClass("encryptedTextArea", 0).value = caesarCypher(
    elClass("unEncryptedText", 0).value, shiftNum
  );

});
