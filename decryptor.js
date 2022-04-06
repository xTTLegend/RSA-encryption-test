const NodeRSA = require('node-rsa');

let encrypedString = `stringhere==`;

const key_private = new NodeRSA('-----BEGIN RSA PRIVATE KEY-----\n'+
'MIICXAIBAAKBgQCjlGqBubPg5BlTJjuB6AHhS1shI0LFKu8Yd8bQElpvPlT9Ukxj\n'+
'0/F64p7q4FChXz1KAo7K7aFozFKAP7lMqmg02YldaZSfeq5Ralk3ax9V9OeGUPyI\n'+
'ePI1S/5hljwwEaKYo8KI2N14UCeY1XOlG2LOfES26xScBSsw+Q703T9YXQIDAQAB\n'+
'AoGACKf16t900VXAsVG4nGs2jkF6lQpUojJfbKAJ+UC/YFugC7erKy0v/hy35B3y\n'+
'pldv2ta/z6U7gVwukXLNz2zFDtEbHxt6/9W+cU1iQWhvYiZkPTzdoKqyHHa63yg0\n'+
'TIV8r0J8xQb4K8Rnz1WRsn3xKqK68O//MLduoa55SfNEWYECQQDkEZCYQvyLR2pq\n'+
'dwKIrgmSkv+QECpgXyRvP1HW+wlUDMm5uYxfUqpexwAbfWRohI7KcBA8RZE1vBF7\n'+
'dHyACCxpAkEAt5z9DM7hxeVZSEH2rdNuzL8lhyJJ/mK0Fche8qv8Yo18TKdJj03G\n'+
'0FaTmuHf4F13zcPYXeUiiJ39KFiX6sad1QJAJ2dtfxEbxwiYtzpGoszG9J8XLpHM\n'+
'cIgfqGTdQ/JtgysOc1s+iH2k1+kz+IvqnDBC53EDLRar5wfOUXEnzYsb+QJBAJD4\n'+
'QlN6hIfbLUL/0eQsq668vMSVLhbLl6QbL9wqLnsheqKK8mlS30ZfFOuUq05afdzY\n'+
'ZFy+LSXwl5DjYg7cAoECQGkgsO91ILwUTItm+fEQqbtyoKfL23KEZQth56pqP/UD\n'+
'8cxwOxYWFwTZDBqEttaQudWdTslzbf4vxYrBHRdO5Pc=\n'+
'-----END RSA PRIVATE KEY-----');

var decrypedString = key_private.decrypt(encrypedString, 'utf8');
console.log(decrypedString);