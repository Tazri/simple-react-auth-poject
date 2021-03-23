function isValidUserInformaton(user){
    let {
        userName,
        userEmail,
        userPassword,
        userConfirmPassword,
        error,
        setError
    } = user;
    let allOk = true;
    let errorMessage = {...error};

    errorMessage.userName = isValidName(userName);
    errorMessage.userEmail = isValidEmail(userEmail);
    errorMessage.userPassword = isValidPassword(userPassword);
    errorMessage.userConfirmPassword = isValidConfirmPassword(userConfirmPassword,userPassword);

    setError(errorMessage)
    if(Object.values(errorMessage).filter(error => error != '').length){
        allOk = false;
    }

    return allOk;
}


function isValidUser(user) {
    let {
        email,
        password,
        error,
        setError
    } = user;
    let allOk = true;
    let errorMessage = {...error};

    errorMessage.password = isValidPassword(password);
    errorMessage.email = isValidEmail(email);

    setError(errorMessage);
    if(Object.values(errorMessage).filter(error => error != '').length){
        allOk = false;
    }

    return allOk;
}

// valid subject
function isValidName(name) {
    if(!name.trim().length){
        return 'Please enter you name';
    }else if(name.length < 4 || name.length > 32){
        return 'Name is too long. Please enter your name in 4 to 32 charecter.'
    }else{
        return '';
    }
}

function isValidEmail(email){
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!email.trim()){
        return 'Please Enter Your Email.'
    }else if(!re.test(email)){
        return "Please Enter Your Correct Email."
    }else{
        return ''
    }
}

function isValidPassword(password){
    if(!password.trim()){
        return 'Please enter you password.'
    }else if(password.length < 5 || password.length > 32 ){
        return 'Please enter you password 5 to 32 charecter.';
    }else{
        return '';
    }
}

function isValidConfirmPassword(confirmPassword,password){
    if(!confirmPassword.trim()){
        return 'Please Confirm Your Password.'
    }else if(confirmPassword !== password){
        return 'Your password not match.Please make sure it match.'
    }else{
        return '';
    }

}

export {isValidUserInformaton,isValidUser}