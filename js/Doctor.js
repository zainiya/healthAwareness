var Coursetro;
var web3;

function initDoctorConnection() {
  if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
      web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }
  web3.eth.defaultAccount = web3.eth.accounts[0];
  var CoursetroContract = web3.eth.contract([{"constant": true, "inputs": [{"name": "ins", "type": "address"} ], "name": "getDoctor", "outputs": [{"name": "", "type": "string"}, {"name": "", "type": "string"}, {"name": "", "type": "string"}, {"name": "", "type": "string"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": false, "inputs": [{"name": "_address", "type": "address"}, {"name": "_fName", "type": "string"}, {"name": "_lName", "type": "string"}, {"name": "_email", "type": "string"}, {"name": "_password", "type": "string"}, {"name": "_license", "type": "string"}, {"name": "_street", "type": "string"}, {"name": "_unit", "type": "string"}, {"name": "_city", "type": "string"}, {"name": "_state", "type": "string"}, {"name": "_zipcode", "type": "string"} ], "name": "setDoctor", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}, {"constant": true, "inputs": [{"name": "", "type": "uint256"} ], "name": "doctorAccts", "outputs": [{"name": "", "type": "address"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "getDoctors", "outputs": [{"name": "", "type": "address[]"} ], "payable": false, "stateMutability": "view", "type": "function"}, {"constant": true, "inputs": [], "name": "countDoctors", "outputs": [{"name": "", "type": "uint256"} ], "payable": false, "stateMutability": "view", "type": "function"} ]);
  Coursetro = CoursetroContract.at('0xbde4255a28acf52ef4309900e5be839514791a89');
  return JSON.parse('{"API":{"name":"doctor", "version":"v1"}}');
}

function createDoctor(fname, lname, email, password, license, street, unit, city, state, zipcode) {
  Coursetro.setDoctor(web3.eth.defaultAccount, fname, lname, email, password, license, street, unit, city, state, zipcode, function(err, res) {
      if (err) {
        console.log(err);
        return JSON.parse('{"error":"'+err+'"}');
      }
      if (res) {

        msg = "Success";
        console.log(msg);
        return JSON.parse('{"data":{"success":true}}');
      }
    });
}

function getDoctor() {
  var account;
    if(getParam("address") === undefined) {
      account = web3.eth.defaultAccount;
    } else {
      account = getParam("address");
    }
    Coursetro.getDoctor(account, function(err, res) {
      if (res) {
        return JSON.parse('{"data":{"fname":"'+res[0]+'", "lname":"'+res[1]+'", "email":"'+res[2]+'", "zipcode":"'+res[3]+'"}}');
      }
      if (err) {
        document.write('{"error":"'+err+'"}');
      }
    });
}

function getDoctorCount() {
  Coursetro.countDoctors(function(err, res) {
      if (res)
        return JSON.parse('{"data":{"count":'+res.c+'}}');
      if(err)
        return JSON.parse('{"error":"'+err+'"');
    });
}