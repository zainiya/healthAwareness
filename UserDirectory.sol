pragma solidity ^0.4.18;
import "./Owner.sol";

contract UserDirectory is Owned {
    struct Address {
        string street;
        string unit;
        string city;
        string state;
        string zipcode;
    }
    struct User {
        string fName;
        string lName;
        Address addr;
        string email;
        string password;
    }
    mapping (address => User) users;
    address[] public userAccts;
    
    function setUser(address _address, string _fName, string _lName, string _email, string _password, string _street, string _unit, string _city, string _state, string _zipcode) public {
        User user = users[_address];

        user.fName = _fName;
        user.lName = _lName;
        user.email = _email;
        user.password = _password;
        user.addr.street = _street;
        user.addr.unit = _unit;
        user.addr.city = _city;
        user.addr.state = _state;
        user.addr.zipcode = _zipcode;
        
        userAccts.push(_address) -1;
     }
     function getUsers() onlyOwner view public returns (address[]) {
        return userAccts;
    }
    function getUser(address ins) view public returns (string, string, string, string) {
        return (users[ins].fName, users[ins].lName, users[ins].email, users[ins].addr.zipcode);
    }

    function countUsers() view public returns (uint) {
        return userAccts.length;
    }
}