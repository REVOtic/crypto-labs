const crypto = require('crypto');

const alice = crypto.createECDH('secp256k1');
alice.generateKeys();

const bob = crypto.createECDH('secp256k1');
bob.generateKeys();

const alicePublicKeysBase64 = alice.getPublicKey().toString('base64');
const bobPublicKeysBase64 = bob.getPublicKey().toString('base64');

const aliceSharedKey = alice.computeSecret(bobPublicKeysBase64, 'base64', 'hex');
const bobSharedKey = bob.computeSecret(alicePublicKeysBase64, 'base64', 'hex');

console.log(aliceSharedKey === bobSharedKey);
console.log('Alice shared key: ', aliceSharedKey);
console.log('Bob shared key: ', bobSharedKey);

const aes256 = require('aes256')

const message = "Meet me at the park at 10th street"
const encrypted = aes256.encrypt(aliceSharedKey, message);
console.log("encrypted:", encrypted);

const decrypted = aes256.decrypt(bobSharedKey, encrypted);
console.log("decrypted message:", decrypted);
