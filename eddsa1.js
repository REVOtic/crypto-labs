var EdDSA = require('elliptic').eddsa;

var ec = new EdDSA('ed25519');

var key = ec.keyFromSecret('693e3c...');

var msgHash = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var signature = key.sign(msgHash).toHex();

console.log(key.verify(msgHash, signature));

var pub = '0a1af638...';
var key = ec.keyFromPublic(pub, 'hex');

var signature = '70bed1...';
console.log(key.verify(msgHash, signature));