
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

function addRow(id){
     var table = document.getElementById(id);
    var row = table.insertRow(-1);
    var x = document.getElementById(id).rows.length;
    x=x-1;
    var cell1 = row.insertCell(0);
    cell1.innerHTML = ''+x;
    cell1 = row.insertCell(1);
    cell1.innerHTML = '<input type="date" name="date'+x+'" value="2018-11-13" id="date'+x+'">';
    cell1 = row.insertCell(2);
    cell1.innerHTML = '<input type="text" name="zipcode'+x+'" id="zipcode'+x+'" placeholder="Enter patient`s zipcode">';
    cell1 = row.insertCell(3);
    cell1.innerHTML = '<input type="text" name="disease'+x+'" id="disease'+x+'" placeholder="Enter disease">';
    cell1 = row.insertCell(4);
    cell1.innerHTML = '<input type="checkbox" data-toggle="toggle" data-on="Yes" data-off="No" data-onstyle="danger" name="isdoctor'+x+'" id="isdoctor'+x+'">';
    cell1 = row.insertCell(5);
    cell1.innerHTML = '<label class="radio-inline">'+
                        '<input type="radio" name="svrradio'+x+'" checked>Less</label>'+
                        '<label class="radio-inline"><input type="radio" name="svrradio'+x+'">Moderate</label>'+
                        '<label class="radio-inline"><input type="radio" name="svrradio'+x+'">High</label>';
    cell1 = row.insertCell(6);
    cell1.innerHTML = '<input type="text" name="sym'+x+'">';
    var cell1 = row.insertCell(7);
    cell1.innerHTML = '<input type="text" name="pre'+x+'">';
    
    

    
}