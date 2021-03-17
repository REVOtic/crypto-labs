var EdDSA = require('elliptic').eddsa;
var md5 = require('md5')
// Create and initialize EdDSA context
// (better do it once and reuse it)
function localEddsa(){
    var ec = new EdDSA('ed25519');
let secret = "Hello how are you1?"
let hexString = ec.makeSignature(secret);
//console.log(hexString);
// Create key pair from secret
var key = ec.keyFromSecret(hexString); // hex string, array or Buffer

// Sign the message's hash (input must be an array, or a hex-string)
var msgHash = md5('Here comes the Sun');
var signature = key.sign(msgHash).toHex();

// Verify signature
console.log(key.verify(msgHash, signature));
}
module.exports = localEddsa;

