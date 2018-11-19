var isDoctor=false;
var msg='';
//1px solid #ccc;
function signUp() {
    var form = document.signupForm;
    form.pswd.style.border= "1px solid #ccc";
        form.pswd2.style.border= "1px solid #ccc";
    var valid = validateSignUpForm(form);
    if(valid){
        console.log("valid form");
        if(isDoctor) {
            var connection = initDoctorConnection();
            if(connection.API.name === 'doctor') {
                var result = createDoctor(form.fName.value, form.lName.value, form.email.value, form.pswd.value, form.doctorlic.value, form.sn.value, form.unit.value, form.city.value, form.state.value, form.zipCode.value);
                // console.log(msg);
            } else {
                window.alert("Connection failed");
            }
        } else {
            var connection = initUserConnection();
            if(connection.API.name === 'user') {
                var result = createUser(form.fName.value, form.lName.value, form.email.value, form.pswd.value, form.sn.value, form.unit.value, form.city.value, form.state.value, form.zipCode.value);
            } else {
                window.alert("Connection failed");
            }
        }
    }else{
        console.log("invalid form");
    }

}

function validateSignUpForm(ele){

    var elements = ele.getElementsByTagName("input");
    var vflag=true;
    for(var i=0; i<elements.length; i++)
    {
        if(elements[i].value==''){
            return false;
        }
    }
    if(ele.pswd.value!=ele.pswd2.value){
        
        ele.pswd.style.border= "1px solid red";
        ele.pswd2.style.border= "1px solid red";
        alert("password should match");
        return false;
    }
    return true;
}