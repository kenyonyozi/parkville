const signoffForm = () =>{
    const userN = document.getElementById('inputName4')
    const userError = document.getElementById('userError');

    const recieptnumber = document.getElementById('inputRecieptnumber4')
    const recieptnumberError = document.getElementById('recieptnumberError');

    const ninnumber = document.getElementById('inputninNumber')
    const ninnumberError = document.getElementById('ninnumberError');

    const phonenumber = document.getElementById('inputPhonenumber4')
    const phonenumberError = document.getElementById('phonenumberError');

    const model  = document.getElementById('inputModel')
    const modelError  = document.getElementById('modelError');

    const date = document.getElementById('inputDate') 
    const dateError = document.getElementById('dateError')

    const time = document.getElementById('inputtime')
    const timeError = document.getElementById('timeError');

    const gender = document.getElementById('inputgender')
    const genderError = document.getElementById('genderError');
   
    const service = document.getElementById('inputservice')
    const serviceError = document.getElementById('serviceError');

    // regex
    const userRegex = /[A-Z][a-z]*( [A-Z][a-z]*)*/; // for name capital and small letters 
    const ninRegex = /^[A-Z]{2}[0-9A-Z]{12}$/; // for NIN exactly 14 alphanumric characters with first letter capital
    const phoneRegex = /^\d{10}$/; // for phone number

    if(userN.value != "" && userN.value.match(userRegex)){
        userN.style.border = "1px solid green"
        userError.textContent = ""
    }else{
        userN.style.border = "1px solid red"
        userError.textContent = "Name must start with capital letter"
        userError.style = "color: red"
        return false
    };

    if(recieptnumber.value == ""){
        recieptnumber.style.border = "1px solid red"
        recieptnumber.textContent = "Please select the Car tyre make"
        recieptnumberError.style = "color: red"
        return false

    }else{
        recieptnumber.style.border = "1px solid green"
        recieptnumberError.textContent = ""
    };

    if(ninnumber.value != "" && ninnumber.value.match(ninRegex)){
        ninnumber.style.border = "1px solid green"
        ninnumberError.textContent  = ""
    }else{
        ninnumber.style.border = "1px solid red"
        ninnumberError.textContent = "Please enter valid Nin number"
        ninnumberError.style = "color: red"
        return false
    };

    if(phonenumber.value != "" && phonenumber.value.match(phoneRegex)){
        phonenumber.style.border = "1px solid green"
        phonenumberError.textContent = ""
    }else{
        phonenumber.style.border = "1px solid red"
        phonenumberError.textContent = "Please enter valid Phone number"
        phonenumberError.style = "color: red"
        return false
    };

    if(model.value == ""){
        model.style.border = "1px solid red"
        model.textContent = "Please enter the Model"
        modelError.style = "color: red"
        return false

    }else{
        model.style.border = "1px solid green"
        modelError.textContent = ""
    };

    if(date.value == ""){
        date.style.border = "1px solid red"
        date.textContent = "Please enter Date"
        dateError.style = "color: red"
        return false

    }else{
        date.style.border = "1px solid green"
        dateError.textContent = ""
    };

    if(time.value == ""){
        time.style.border = "1px solid red"
        time.textContent = "Please enter the Time"
        timeError.style = "color: red"
        return false

    }else{
        time.style.border = "1px solid green"
        timeError.textContent = ""
    };

    if(gender.value == "Default"){
        gender.style.border = "1px solid red"
        genderError.textContent = "Please select the Gender"
        genderError.style = "color: red"
        return false
    }else{
        gender.style.border = "1px solid green"
        genderError.textContent = ""
    };

    if(service.value == "Default"){
        service.style.border = "1px solid red"
        serviceError.textContent = "Please select the Service"
        serviceError.style = "color: red"
        return false
    }else{
        service.style.border = "1px solid green"
        serviceError.textContent = ""
    };


}