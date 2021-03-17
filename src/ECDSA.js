var EC = require('elliptic').ec;
//console.log(EC);

// Create and initialize EC context
// (better do it once and reuse it)
function localEcdsa(){
    var ec = new EC('secp256k1');

    // Generate keys
    var key = ec.genKeyPair();
    //console.log(key)
    // Sign the message's hash (input must be an array, or a hex-string)
    var msgHash = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    console.log(msgHash)
    var signature = key.sign(msgHash);
    
    // Export DER encoded signature in Array
    var derSign = signature.toDER();
    console.log(derSign)
    // Verify signature
    console.log(key.verify(msgHash, derSign));
}
module.exports = localEcdsa;
