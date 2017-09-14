function caesarCypher(str, shiftBy) {
  // GET RID OF SPECIAL CHARS
  // IGNORE OR TRANSFORME SPACES
  shiftBy = shiftBy%27; // GET FROM WEB FORM
  var string2encrypt = str; // GET FROM WEB FORM
  var encryptedString = []; // MAKE P TAG ON PAGE
  var unicode2String = "";
  var string2Unicode = "";
  var string2UnicodeShifted = string2Unicode+shiftBy;
  for (var i = 0; i < string2encrypt.length; i++) {
    string2Unicode = string2encrypt.charCodeAt(i);
    unicode2String = String.fromCharCode(string2Unicode+shiftBy);
    encryptedString.push(unicode2String);
    string2UnicodeShifted = string2Unicode+shiftBy;
    // console.log(string2encrypt.split("")[i], string2Unicode, string2UnicodeShifted, unicode2String); // shows the encryption process
  }
  encryptedString = encryptedString.join("");
  // console.log(string2encrypt, "->\n", encryptedString);
  return encryptedString;
}
// caesarCypher("Hello, world", 3);
