const Vform = () => {
    const userN = document.getElementById('inputName4')
    const userError = document.getElementById('userError')

    const phonenumber = document.getElementById('inputPhonenumber4')
    const phonenumberError = document.getElementById('phonenumberError');

    const ninnumber = document.getElementById('inputninNumber')
    const ninnumberError = document.getElementById('ninnumberError');

    const color = document.getElementById('inputcolor')
    const colorError = document.getElementById('colorError');

    const numberplate = document.getElementById('inputnumberplate')
    const numberplateError = document.getElementById('numberplateError');

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

    const description = document.getElementById('inputdescription')
    const descriptionError = document.getElementById('descriptionError');

    const duration = document.getElementById('inputduration')
    const durationError = document.getElementById('durationError');

    const paidprice = document.getElementById('inputpaidprice')
    const paidpriceError = document.getElementById('paidpriceError');

    const batteryprice = document.getElementById('inputbatteryprice')
    const batterypriceError = document.getElementById('batterypriceError');

    const batterysize = document.getElementById('inputbatterysize')
    const batterysizeError = document.getElementById('batterysizeError');

    const cartyreprice = document.getElementById('inputcartyreprice')
    const cartyrepriceError = document.getElementById('cartyrepriceError');

    const cartyresize = document.getElementById('inputcartyresize')
    const cartyresizeError = document.getElementById('cartyresizeError');

    const cartyremake = document.getElementById('inputcartyremake')
    const cartyremakeError = document.getElementById('cartyremakeError');


// regex
    const userRegex = /[A-Z][a-z]*( [A-Z][a-z]*)*/; // for name capital and small letters 
    const ninRegex = /^[A-Z]{2}[0-9A-Z]{12}$/; // for NIN exactly 14 alphanumric characters
    const phoneRegex = /^\d{10}$/; // for phone number
    const numberplateRegex = /^[U][A-Z]{2} [0-9A-Z]{4}$/; //for number plate starting with U

    if(userN.value != "" && userN.value.match(userRegex)){
        userN.style.border = "1px solid green"
        userError.textContent = ""
    }else{
        userN.style.border = "1px solid red"
        userError.textContent = "Name must start with capital letter"
        userError.style = "color: red"
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

    if(ninnumber.value != "" && ninnumber.value.match(ninRegex)){
        ninnumber.style.border = "1px solid green"
        ninnumberError.textContent  = ""
    }else{
        ninnumber.style.border = "1px solid red"
        ninnumberError.textContent = "Please enter valid Nin number"
        ninnumberError.style = "color: red"
        return false
    };

    if(color.value == ""){
        color.style.border = "1px solid red"
        colorError.textContent = "Please enter the Color"
        colorError.style = "color: red"
        return false
    }else{
        color.style.border = "1px solid green"
        colorError.textContent  = ""
    };

    if(numberplate.value != "" && numberplate.value.match(numberplateRegex)){
        numberplate.style.border = "1px solid green"
        numberplateError.textContent  = ""
    }else{
        numberplate.style.border = "1px solid red"
        numberplateError.textContent = "Please enter valid Numberplate"
        numberplateError.style = "color: red"
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

    if(description.value == "Default"){
        description.style.border = "1px solid red"
        descriptionError.textContent = "Please select the Description"
        descriptionError.style = "color: red"
        return false
    }else{
        description.style.border = "1px solid green"
        descriptionError.textContent = ""
    };

    if(duration.value == "Default"){
        duration.style.border = "1px solid red"
        durationError.textContent = "Please select the Duration"
        durationError.style = "color: red"
        return false
    }else{
        duration.style.border = "1px solid green"
        durationError.textContent = ""
    };

    if(paidprice.value == "Default"){
        paidprice.style.border = "1px solid red"
        paidpriceError.textContent = "Please select the Paid price"
        paidpriceError.style = "color: red"
        return false
    }else{
        paidprice.style.border = "1px solid green"
        paidpriceError.textContent = ""
    };

    if(batteryprice.value == ""){
        batteryprice.style.border = "1px solid red"
        batteryprice.textContent = "Please select the Battery Price"
        batterypriceError.style = "color: red"
        return false

    }else{
        batteryprice.style.border = "1px solid green"
        batterypriceError.textContent = ""
    };

    if(batterysize.value == ""){
        batterysize.style.border = "1px solid red"
        batterysize.textContent = "Please select the Battery size"
        batterysizeError.style = "color: red"
        return false

    }else{
        batterysize.style.border = "1px solid green"
        batterysizeError.textContent = ""
    };

    if(cartyreprice.value == ""){
        cartyreprice.style.border = "1px solid red"
        cartyreprice.textContent = "Please select the Car tyre price"
        cartyrepriceError.style = "color: red"
        return false

    }else{
        cartyreprice.style.border = "1px solid green"
        cartyrepriceError.textContent = ""
    };

    if(cartyresize.value == ""){
        cartyresize.style.border = "1px solid red"
        cartyresize.textContent = "Please select the Car tyre size"
        cartyresizeError.style = "color: red"
        return false

    }else{
        cartyresize.style.border = "1px solid green"
        cartyresizeError.textContent = ""
    };

    if(cartyremake.value == ""){
        cartyremake.style.border = "1px solid red"
        cartyremake.textContent = "Please select the Car tyre make"
        cartyremakeError.style = "color: red"
        return false

    }else{
        cartyremake.style.border = "1px solid green"
        cartyremakeError.textContent = ""
    };

}