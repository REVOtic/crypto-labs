const crypto = require('crypto');
async function aes(){
    const alice = crypto.createECDH('secp256k1');//passing the curve name
    alice.generateKeys(); //generate both public and private keys
    
    const may = crypto.createECDH('secp256k1');//passing the curve name
    may.generateKeys(); //generate both public and private keys
    
    const bob = crypto.createECDH('secp256k1');//pass the curve name
    bob.generateKeys(); //generate the same curve and keys else the shared secret wont be generated
    
    const alicePublicKeysBase64 = alice.getPublicKey().toString('base64'); //convert ALice public key into base64 to transmit to Bob
    const bobPublicKeysBase64 = bob.getPublicKey().toString('base64'); //convert Bob public key into base64 to transmit to Alice
    const mayPublicKeysBase64 = may.getPublicKey().toString('base64'); //convert Bob public key into base64 to transmit to Alice
    
    const SharedKey = alice.computeSecret(bobPublicKeysBase64, 'base64', 'hex'); //passing the parameters in base64 and hex format
    //const bobSharedKey = bob.computeSecret(alicePublicKeysBase64, 'base64', 'hex'); 
    const maySharedKey = may.computeSecret(alicePublicKeysBase64, 'base64', 'hex'); //passing the parameters in base64 and hex format
    
    
    //console.log(SharedKey === bobSharedKey);
    console.log('Alice shared key: ', SharedKey);
    //console.log('Bob shared key: ', bobSharedKey);
    
    const aes256 = require('aes256') //calling the library
    
    
    
    const plaintext = "Meet me at the park at 10th street"
    const encrypted = aes256.encrypt(SharedKey, plaintext);
    console.log("encrypted:", encrypted);
    
    const decrypted = aes256.decrypt(maySharedKey, encrypted);
    console.log("decrypted message:", decrypted);
}

module.exports = aes;