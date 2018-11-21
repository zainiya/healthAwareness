var Coursetro;
var web3;
function initUserConnection() {
  if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }
  web3.eth.defaultAccount = web3.eth.accounts[0];
  var CoursetroContract = web3.eth.contract([{"constant": true, "inputs": [], "name": "getUsers", "outputs": [{"name": "", "type": "address[]"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [{"name": "", "type": "uint256"} ], "name": "userAccts", "outputs": [{"name": "", "type": "address"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "_address", "type": "address"}, {"name": "_fName", "type": "string"}, {"name": "_lName", "type": "string"}, {"name": "_email", "type": "string"}, {"name": "_password", "type": "string"}, {"name": "_street", "type": "string"}, {"name": "_unit", "type": "string"}, {"name": "_city", "type": "string"}, {"name": "_state", "type": "string"}, {"name": "_zipcode", "type": "string"} ], "name": "setUser", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [{"name": "ins", "type": "address"} ], "name": "getUser", "outputs": [{"name": "", "type": "string"}, {"name": "", "type": "string"}, {"name": "", "type": "string"}, {"name": "", "type": "string"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "countUsers", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"} ]);
  Coursetro = CoursetroContract.at('0x9c7e3ef08d821e077076eff80e398c045f62adfe');
 return JSON.parse('{"API":{"name":"user", "version":"v1"}}');
}

function createUser(fname, lname, email, password, street, unit, city, state, zipcode) {
  Coursetro.setUser(web3.eth.defaultAccount, fname, lname, email, password, street, unit, city, state, zipcode, function(err, res) {
    if (err) {
      return JSON.parse('{"error":"'+err+'"}');
    }
    if (res) {
      return JSON.parse('{"data":{"success":"true"}}');
    }
  });
}

function getUser() {
  Coursetro.getUser(web3.eth.defaultAccount, function(err, res) {
    if (res) {
      return JSON.parse('{"data":{"fname":"'+res[0]+'", "lname":"'+res[1]+'", "email":"'+res[2]+'", "zipcode":"'+res[3]+'"}}');
    }
    if (err) {
      document.write('{"error":"'+err+'"}');
    }
  });
}

function getUserCount() {
  Coursetro.countUsers(function(err, res) {
    if (res)
      return JSON.parse('{"data":{"count":'+res.c+'}}');
    if(err)
      return JSON.parse('{"error":"'+err+'"');
  });
}
