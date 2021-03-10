const crypto = require('crypto');
const alice = crypto.createECDH('secp256k1');
const bob = crypto.createECDH('secp256k1');


alice.setPrivateKey(
  crypto.createHash('sha256').update('alice', 'utf8').digest()
);


bob.generateKeys();

const aliceSecret = alice.computeSecret(bob.getPublicKey(), null, 'hex');
console.log('Alice Secret ', aliceSecret);
const bobSecret = bob.computeSecret(alice.getPublicKey(), null, 'hex');
console.log('Bob Secret ', bobSecret);


console.log(aliceSecret === bobSecret);