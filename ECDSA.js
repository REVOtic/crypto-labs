var EC = require('elliptic').ec;

var ec = new EC('secp256k1');

var key = ec.genKeyPair();

var msgHash = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
var signature = key.sign(msgHash);

var derSign = signature.toDER();

console.log(key.verify(msgHash, derSign));

var pubPoint = key.getPublic();
var x = pubPoint.getX();
var y = pubPoint.getY();


var pub = pubPoint.encode('hex');                                 
var pub = { x: x.toString('hex'), y: y.toString('hex') };         
var pub = { x: x.toBuffer(), y: y.toBuffer() };                   


var key = ec.keyFromPublic(pub, 'hex');

var signature = '3046022100...'; 
var signature = new Buffer('...');
var signature = { r: 'b1fc...', s: '9c42...' }; 


console.log('Verifying [',msgHash.toString(),'] with ',signature,' ',key.verify(msgHash, signature));