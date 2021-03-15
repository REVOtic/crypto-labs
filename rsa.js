const NodeRSA = require('node-rsa'); //include the package
const key = new NodeRSA({b:1024}) //create a key and mention the bytes. Combination of public and private key
//const key2 = new NodeRSA({c:1024})
//console.log(key)
let secret = "He is the founder, CEO, CTO, and chief designer of SpaceX; early investor, CEO, and product architect of Tesla, Inc.; founder of The Boring Company; co-founder of Neuralink; and co-founder and initial co-chairman of OpenAI. A centibillionaire, Musk is one of the richest people in the world.";

var encryptedString = key.encrypt(secret, 'base64'); //encrypt using using public key, encrypt method and pass parameters
console.log('The encrypted string is: ', encryptedString);

var decryptedString = key.decrypt(encryptedString, 'utf8');// decrypt using private key
console.log('The decrypted string is: ', decryptedString);

var public_key = key.exportKey('public'); // to extract the public key and private key
var private_key = key.exportKey('private');
//console.log('public key is ', public_key + '\n' + 'private key is ', private_key);


// let key_private = new NodeRSA(private_key); //create new object
// let key_public = new NodeRSA(public_key);

// // public key for encryption
// var encryptedString = key_public.encrypt(secret,'base64');
// console.log('public key: ', encryptedString);


// //private key for decryption
// var decryptedString = key_private.decrypt(encryptedString, 'utf8');
// console.log('private key: ', decryptedString);

// //public key
// console.log(key_public.decrypt(encryptedString,'utf8'));
