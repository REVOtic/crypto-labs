const ed = require('noble-ed25519');
const privateKey = ed.utils.randomPrivateKey(); // 32-byte Uint8Array or string.
const msgHash = 'deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef';
(async () => {
  const publicKey = await ed.getPublicKey(privateKey);
  const signature = await ed.sign(msgHash, privateKey);
  console.log('This is the signature ',signature);
  const isSigned = await ed.verify(signature, msgHash, publicKey)
  console.log(isSigned);
})();