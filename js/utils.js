const setErrors = (mensaje, campo, isError) =>{
    if (isError){
        campo.classList.remove("is-valid");
        campo.classList.add("is-invalid");
        campo.nextElementSibling.classList.remove("valid-feedback");
        campo.nextElementSibling.classList.add("invalid-feedback");
        campo.nextElementSibling.textContent = mensaje;
    }else{
        campo.classList.remove("is-invalid");
        campo.classList.add("is-valid");
        campo.nextElementSibling.classList.remove("invalid-feedback");
        campo.nextElementSibling.classList.add("valid-feedback");
        campo.nextElementSibling.textContent = mensaje;
    }
}


const validarMail = (e) => {
    /*Input camputado desde el html*/
    const campo = e.target;
    /*El valor del input capturado*/
    const campoValue = campo.value.toLowerCase().trim();

    const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    if(campoValue.length < 4 || !regex.test(campoValue)){
        setErrors(`${campo.name} invalido.`, campo, true);
    }
    else{
        setErrors(`${campo.name} valido.`, campo, false);
    }
};


const validarContrasenia = (e) => {
    /*Input camputado desde el html*/
    const campo = e.target;
    /*El valor del input capturado*/
    const campoValue = campo.value;
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[^\W_]{6,16}$/;
    if(campoValue.length < 5 || !regex.test(campoValue)){
        setErrors(`La ${campo.name} debe tener al entre 6 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.`, campo, true);
    }
    else{
        setErrors(`${campo.name} valida.`, campo, false);
    }
};