const NodeRSA = require('node-rsa');


let secret = "This is not readable";



public_key = '-----BEGIN PUBLIC KEY-----\n' +
'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDQiREel3LS7FVtgcJ1fW3PYb6v\n' +
'HJrMyu4RhQTMOqbU9wN2jcz1cQkmhQOBPtyNaf4wpZdVLMFRGqUK5zCspPkG6sYM\n' +
'AEe740gmGZZopEi5x1uE04hazSjJEJLXW2u6hx73FnF3nTLjq/2/7FVGt0ua24jf\n' +
'Lf4xkeqAU5qI3JCpGwIDAQAB\n'+
'-----END PUBLIC KEY-----';

private_key = '-----BEGIN RSA PRIVATE KEY-----\n' +
'MIICWwIBAAKBgQDQiREel3LS7FVtgcJ1fW3PYb6vHJrMyu4RhQTMOqbU9wN2jcz1\n' +
'cQkmhQOBPtyNaf4wpZdVLMFRGqUK5zCspPkG6sYMAEe740gmGZZopEi5x1uE04ha\n' +
'zSjJEJLXW2u6hx73FnF3nTLjq/2/7FVGt0ua24jfLf4xkeqAU5qI3JCpGwIDAQAB\n' +
'AoGAYERGQOcNPM2ZCjpyuKY0gR3QVypPU+cCS9gqRNV2mq2FTb9cNJn/7WZOHeYV\n' +
'Drs1euOWnt1QSM6SDhx33dsykeb0l1PugYkZHznc6/oIHeuhCf0yBraE37a/dP1o\n' +
'm8ci7pq+XFSUY3bjm1ArzFoS8NW9guj1m/tcqNamxYpR0NECQQD5Ku64K7BDnuNs\n' +
'ShVyjjh8zMFbU9k/0PMFubXh47dj4x8JhA1/CH7e8iaXNMZqz98DWunaJeVLx8es\n' +
'Rkfn6qS1AkEA1kDpDTwI/Kqg5eOAvnIXHbgx+i0yKPCvpXvvmB2A3RSRJO76tAhx\n' +
'8IqfyD9QcMXmuPhJ7Gv2oijYiwlZZpUIjwJACexNyYPj5y2CvSNOK1vCoCW/ZZW3\n' +
'RzVZGFdHCRH6kb3P1J8vsmlyNArMwqTVaheROB78xTVRJm10ZEYAQxozKQJAPN9c\n' +
'V4JDG2ZvKGGm5nUL1EnNCUNmCPO5M88ul41qW2XIhzHO0O/FT45TL1WtyRyxHMSO\n' +
'XDmgbRoly/rwB5E4SQJAGbMCAOYVzkb0Zs1BMd9MNb0u5Zw4UQ1WvnXWlEEU8iUM\n' +
'igXvDxnb/GSAUra/EGJwLF1rRn8IwJRC2cvHz7BJBw==\n' +
'-----END RSA PRIVATE KEY-----';


let key_private = new NodeRSA(private_key);
let key_public = new NodeRSA(public_key);

// public key for encryption
var encryptedString = key_public.encrypt(secret,'base64');
console.log(encryptedString);


//private key for decryption
var decryptedString = key_private.decrypt(encryptedString, 'utf8');
console.log(decryptedString);

//public key
// console.log(key_public.decrypt(encryptedString,'utf8'));
