var EC = require('elliptic').ec;
var ec = new EC('curve25519');

var key1 = ec.genKeyPair();
var key2 = ec.genKeyPair();

var shared = key1.derive(key2.getPublic());

console.log('The shared key');
console.log(shared.toString(16));