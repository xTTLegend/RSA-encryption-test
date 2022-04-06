const NodeRSA = require('node-rsa');

let decrypedString = `Als je dit kan lezen, is het encrypen en decrypen gelukt!`;

const key_public = new NodeRSA('-----BEGIN PUBLIC KEY-----\n'+
'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCjlGqBubPg5BlTJjuB6AHhS1sh\n'+
'I0LFKu8Yd8bQElpvPlT9Ukxj0/F64p7q4FChXz1KAo7K7aFozFKAP7lMqmg02Yld\n'+
'aZSfeq5Ralk3ax9V9OeGUPyIePI1S/5hljwwEaKYo8KI2N14UCeY1XOlG2LOfES2\n'+
'6xScBSsw+Q703T9YXQIDAQAB\n'+
'-----END PUBLIC KEY-----');

var encrypedString = key_public.encrypt(decrypedString, 'base64');
console.log(encrypedString);