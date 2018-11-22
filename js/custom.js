
function signUp() {
    //var form = document.signupForm;
    $("#pswd").css("border", "1px solid #ccc");
$("#pswd2").css("border", "1px solid #ccc");
    var valid = validateSignUpForm();
    
    if(valid){
        console.log("valid form");
        if(isDoctor) {
            console.log(web3.eth.defaultAccount);
          
                var result = createDoctor($("#fName").val(), $("#lName").val(), $("#email").val(), $("#pswd").val(), $("#doctorlic").val(), $("#streetName").val(), $("#unit").val(), $("#city").val(), $("#state").val(), $("#zipCode").val());
                 console.log(result);
                

        } else {
            var connection = initUserConnection();
            if(connection.API.name === 'user') {
                var result = createUser($("#fName").val(), $("#lName").val(), $("#email").val(), $("#pswd").val(), $("#streetName").val(), $("#unit").value, $("#city").value, $("#state").val(), $("#zipCode").val());
            } else {
                window.alert("Connection failed");
            }
        }
    }else{
        console.log("invalid form");
    }

}

function validateSignUpForm(){

    var elements = document.getElementsByTagName("input");
    var vflag=true;
    for(var i=0; i<elements.length; i++)
    {
        if(elements[i].value==''){
            if(elements[i].name=='doctorlic' && !isDoctor){

            }else{
                return false;
            }
        }
    }
    if(elements.pswd.value!=elements.pswd2.value){

        elements.pswd.style.border= "1px solid red";
        elements.pswd2.style.border= "1px solid red";
        alert("password should match");
        return false;
    }
    return true;
}

function updateDoctorProfile(){
    updateDoctor($("#fName").val(), $("#lName").val(), $("#email").val(), $("#doctorlic").val(), $("#streetName").val(), $("#unit").val(), $("#city").val(), $("#state").val(), $("#zipCode").val());
    
}