const localaes = require('./src/aes')
const localcurve25519 = require('./src/curve25519')
const localEcdsa = require('./src/ECDSA')
const localEddsa = require('./src/eddsa1')
const localsecp256k1 = require('./src/secp256k1')
const localRsa = require('./src/rsa')
const localEd25519 = require('./src/Ed25519')
const { getUserInput } = require('./src/utils/getUserInput')
const revotechEncryptionTechnique = {
    aes: localaes,
    curve: localcurve25519,
    ecdsa: localEcdsa,
    eddsa: localEddsa,
    secp256k1: localsecp256k1,
    rsa: localRsa,
    ed25519: localEd25519

}
module.exports = revotechEncryptionTechnique;
