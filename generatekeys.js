const NodeRSA = require('node-rsa');

const key = new NodeRSA({ b: 1024 });

var public_key = key.exportKey('public');
var private_key = key.exportKey('private');

console.log(public_key + `\n` + private_key)