var crypto = require('crypto');
var ed25519 = require('ed25519');

/*
	First lets make some keypairs.
*/

// Alice likes to be random, and remembers that the MakeKeypair function takes a 32 byte buffer
var aliceSeed = crypto.randomBytes(32); //random byte buffer of 32 byte size
var aliceKeypair = ed25519.MakeKeypair(aliceSeed);
console.log('Alice private key', aliceKeypair.privateKey)
console.log('Alice public key', aliceKeypair.publicKey)


/*
	Now some messages
*/
var message = 'Hi Bob, How are your pet monkeys doing? What were their names again? -Alice';


var signature = ed25519.Sign(Buffer.from(message, 'utf8'), aliceKeypair.privateKey); //Using Sign(Buffer, Keypair object)
console.log('THis is the signature',signature);

// Alice sends her message and signature over to bob.


// check the other signatures
if (ed25519.Verify(Buffer.from(message, 'utf8'), signature, aliceKeypair.publicKey)) {
	console.log('Signature valid');
} else {
	console.log('Signature NOT valid');
}

	
	

