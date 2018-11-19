var isDoctor=false;
    var msg='';
    function signUp() {
        var form = document.signupForm;
        validateSignUpForm(form);
        
        if(isDoctor) {
            var connection = initDoctorConnection();
            if(connection.API.name === 'doctor') {
                console.log(form.fName.value);
                console.log(form.lName.value);
                console.log(form.email.value);
                console.log(form.pswd.value);
                console.log(form.doctorlic.value);
                console.log(form.sn.value);
                console.log(form.unit.value);
                console.log(form.city.value);
                console.log(form.state.value);
                console.log(form.zipCode.value);
                var result = createDoctor(form.fName.value, form.lName.value, form.email.value, form.pswd.value, form.doctorlic.value, form.sn.value, form.unit.value, form.city.value, form.state.value, form.zipCode.value);
                
                console.log(msg);
                
                // while(true) {
                //     if(typeof result === 'undefined'){
                    
                //     }else{
                //         if(result.data && result.data.success) {
                //             window.alert("Doctor Registered");
                //         } else {
                //             window.alert("Problem in registration");
                //         }
                //         break;
                //     }
                // }


            } else {
                window.alert("Connection failed");
            }
        }
    }
    function validateSignUpForm(ele){
        //var element = 
    }