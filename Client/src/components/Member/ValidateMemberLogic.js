export default function ValidateMemberLogic(values) {
    let errors = {}

    if (!values.username.trim()){   //trimming the white space
        errors.username = "Username is required"
    }

    if (!values.address.trim()){   //trimming the white space
        errors.username = "Address is required"
    }

    if (!values.email){   //if there is no values it will say email required
        errors.email = "Email is required"
    }
    else if(/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/.test(values.email)){    //if there is no valid email it will throw this error msg 
        errors.email= "Email address is invalid"
    }

    if (!values.password){  
        errors.password = "Password is required"
    }
    else if(values.password.length < 6){    //if there is no valid email it will throw this error msg 
        errors.password= "Password needs to be 6 characters or more."
    }

    if (!values.confirmpassword){  
        errors.confirmpassword = "Password is required"
    }
    else if(values.confirmpassword !== values.password){    //if there is no valid email it will throw this error msg 
        errors.confirmpassword= "Password donot match."
    }
    return errors;
}