const secp = require("noble-secp256k1");
const sha256 = require("sha256");

const getPrivateKey = () => {
    return new Promise((resolve, reject) => {
        resolve(sha256("private-key"));
    });
};

const getPublicKey = (privateKey) => {
    return new Promise((resolve, reject) => {
        if (!privateKey) {
            return reject("Private key is required to generate public key.");
        }
        resolve(secp.getPublicKey(privateKey));
    });
};

const signSignature = async (hashedMessage, privateKey) => {
    return new Promise((resolve, reject) => {
        if (!hashedMessage || !privateKey) {
            return reject("Hashed Message and private key is required.");
        }
        resolve(secp.sign(hashedMessage, privateKey));
    });
};

const verifySignature = (signature, hashedMessage, publicKey) => {
    return new Promise((resolve, reject) => {
        if (!signature || !hashedMessage || !publicKey) {
            return reject("Something is missing.");
        }

        resolve(secp.verify(signature, hashedMessage, publicKey));
    });
};

const retractPublicKey = (privateKey) => {
    if (!privateKey) {
        return null;
    }
    return secp.schnorr.getPublicKey(privateKey);
};

const rSignature = async (hashedMessage, privateKey) => {
    return new Promise((resolve, reject) => {
        if (!hashedMessage || !privateKey) {
            return reject("Something is missing");
        }

        resolve(secp.schnorr.sign(hashedMessage, privateKey));
    });
};

const signed = async (rsignature, hashedMessage, rpub) => {
    return new Promise((resolve, reject) => {
        if (!rsignature || !hashedMessage || !rpub) {
            return reject("Something is missing.");
        }

        resolve(secp.schnorr.verify(rsignature, hashedMessage, rpub));
    });
};

(async () => {
    // You pass either a hex string, or Uint8Array
    const privateKey = await getPrivateKey();
    const message = "this is a long message";
    const hashedMessage = sha256(message);

    const publicKey = await getPublicKey(privateKey);

    const signature = await signSignature(hashedMessage, privateKey);

    const isSigned = await verifySignature(signature, hashedMessage, publicKey);

    const rpub = retractPublicKey(privateKey);

    const rsignature = await rSignature(hashedMessage, privateKey);

    const risSigned = await signed(rsignature, hashedMessage, rpub);

    console.log(
        `private-key:: ${privateKey} \npublic-key: ${publicKey} hash-message: ${hashedMessage} \nmessage:: ${hashedMessage} \nsignature: ${signature} \nverify-signature: ${isSigned} \nrpublic: ${rpub} \nrSignature:: ${rsignature} \nrisSigned: ${risSigned}`
    );
})();
