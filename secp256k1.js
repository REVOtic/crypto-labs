const { randomBytes, createHash } = require('crypto')
const secp256k1 = require('secp256k1')
// or require('secp256k1/elliptic')

// generate message to sign
// message should have 32-byte length, if you have some other length you can hash message
// for example `msg = sha256(rawMessage)`
const msg = 'There is a rally';
var hash = createHash('sha256').update(msg).digest(); //returns a buffer
//const msghash = 
// generate privKey
let privKey
do {
  privKey = randomBytes(32)
  console.log(privKey)
} while (!secp256k1.privateKeyVerify(privKey))
console.log(privKey)
// get the public key in a compressed format
const pubKey = secp256k1.publicKeyCreate(privKey)


// sign the message
const sigObj = secp256k1.ecdsaSign(hash, privKey)


// verify the signature
console.log(secp256k1.ecdsaVerify(sigObj.signature, msg, pubKey))
// => true