pragma solidity ^0.4.18;
import "./Owner.sol";

contract DoctorDirectory is Owned {
    struct Address {
        string street;
        string unit;
        string city;
        string state;
        string zipcode;
    }
    struct Doctor {
        string fName;
        string lName;
        Address addr;
        string email;
        string password;
        string license;
    }
    mapping (address => Doctor) doctors;
    address[] public doctorAccts;
    
    function setDoctor(address _address, string _fName, string _lName, string _email, string _password, string _license, string _street, string _unit, string _city, string _state, string _zipcode) public {
        Doctor doctor = doctors[_address];

        doctor.fName = _fName;
        doctor.lName = _lName;
        doctor.email = _email;
        doctor.password = _password;
        doctor.license = _license;
        doctor.addr.street = _street;
        doctor.addr.unit = _unit;
        doctor.addr.city = _city;
        doctor.addr.state = _state;
        doctor.addr.zipcode = _zipcode;
        
        doctorAccts.push(_address) -1;
     }
     function getDoctors() onlyOwner view public returns (address[]) {
        return doctorAccts;
    }
    function getDoctor(address ins) view public returns (string, string, string, string) {
        return (doctors[ins].fName, doctors[ins].lName, doctors[ins].email, doctors[ins].addr.zipcode);
    }

    function countDoctors() view public returns (uint) {
        return doctorAccts.length;
    }
}