/** ///2017-09-12//////////////////////////////////////////////////////////////
function caesarCypher(str, shiftBy) {
  // GET RID OF SPECIAL CHARS
  // IGNORE OR TRANSFORME SPACES
  // shiftBy = shiftBy%28; // GET FROM WEB FORM
  shiftBy = shiftBy; // GET FROM WEB FORM
  // console.log(shiftBy);
  var string2encrypt = str; // GET FROM WEB FORM
  var encryptedString = []; // MAKE P TAG ON PAGE
  var unicode2String = String.fromCharCode(null);
  var string2Unicode = string2encrypt.charCodeAt(null);
  var string2UnicodeShifted = string2Unicode+shiftBy;
  for (var i = 0; i < string2encrypt.length; i++) {
    string2Unicode = string2encrypt.charCodeAt(i);
    unicode2String = String.fromCharCode(string2Unicode+shiftBy);
    encryptedString.push(unicode2String);
    console.log(string2encrypt.split("")[i], string2Unicode, string2UnicodeShifted, unicode2String); // shows the encryption process
  }
  encryptedString = encryptedString.join("");
  console.log(string2encrypt, "->", encryptedString);
  return encryptedString;
}
caesarCypher("Hello, world", 3);
//**///2017-09-13/////////////////////////////////////////////////////////////
/**///////////////////////////////////////////////////////////////////////////
// const quoteButton = document.body.querySelector(‘#get-quote’);
// const quoteOutput = document.body.querySelector(‘#quote’);
//
// function* quoteGenerator() {
//     while (true) {
//         yield fetch(‘http://ron-swanson-quotes.herokuapp.com/v2/quotes')
//            .then(res => res.json());
//     }
// }
//
// const generator = quoteGenerator();
// function updateQuote() {
//     // quoteButton.disabled = true;
//
//     generator.next().value.then(function (data) {
//         quoteOutput.innerHTML = `"${data[0]}"`;
//         quoteButton.disabled = false;
//     });
// }
//
// quoteButton.onclick = updateQuote;
//
// updateQuote();
//**//////////////////////////////////////////////////////////////////////////
/** ///2017-09-14/////////////////////////////////////////////////////////////
var encryptedText = caesarCypher("Hello, world", 3);
console.log("index.js says",encryptedText);

function elClass(className, i) {
  return document.getElementsByClassName(className)[i];
}

function importText(formClass, btnType, reset){
  console.log(form);
  var form = formClass;
  form.addEventListener(btnType, function(event){
    event.preventDefault();
    reset.value="";
  });
}
importText(elClass("encryption", 0), "submit", elClass("encryptedTextArea", 0));

function getAPI(apiUrl, searchTerm){
   return fetch(apiUrl + searchTerm)
    .then(function(apiVar){
      console.log(apiVar.json());
      return apiVar.json();
    });
}
function populateField(targetField, content){
  targetField = content;
}
populateField(
  elClass("encryptedTextArea", 0),
  getAPI("http://ron-swanson-quotes.herokuapp.com/v2/quotes", "")
);
quote = getAPI("http://ron-swanson-quotes.herokuapp.com/v2/quotes", "");
console.log(quote);
//**//////////////////////////////////////////////////////////////////////////
/** ///2017-09-14/////////////////////////////////////////////////////////////
function eventListener(formClass, resetField, resetMethod){
  var form = formClass;// formClass = elClass("encryption", 0);
  form.addEventListener("submit", function(event){
    event.preventDefault();
    resetField[resetMethod] = null;
  });
}
eventListener();
//**//////////////////////////////////////////////////////////////////////////
/**///2017-09-xx/////////////////////////////////////////////////////////////

//**//////////////////////////////////////////////////////////////////////////
/**///2017-09-xx/////////////////////////////////////////////////////////////

//**//////////////////////////////////////////////////////////////////////////
/**///2017-09-xx/////////////////////////////////////////////////////////////

//**//////////////////////////////////////////////////////////////////////////
/**///2017-09-xx/////////////////////////////////////////////////////////////

//**//////////////////////////////////////////////////////////////////////////
/**///2017-09-xx/////////////////////////////////////////////////////////////

//**//////////////////////////////////////////////////////////////////////////
/**///2017-09-xx/////////////////////////////////////////////////////////////

//**//////////////////////////////////////////////////////////////////////////
