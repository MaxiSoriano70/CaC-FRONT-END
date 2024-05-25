const estadoUsuario = {
    email: "",
    nombreApellido: "",
    telefono: "",
    fechaDeNacimiento: "",
    password: ""
}

const estadoErroresOK = {
    email: false,
    nombreApellido: false,
    telefono: false,
    fechaDeNacimiento: false,
    password: false
}

const formularioRegistro = document.querySelector("#form-registro");

const inputEmailRegistro = document.querySelector("#emailRegistro");
const inputNombreApellidoRegistro = document.querySelector("#nombreApellidoRegistro");
const inputTelefonoRegistro = document.querySelector("#telefonoRegistroRegistro");
const inputFechaNacimientoRegistro = document.querySelector("#fechaNacimientoRegistro");
const inputPasswordRegistro = document.querySelector("#passwordRegistro");
const inputPasswordRegistroRepetir = document.querySelector("#passwordRegistroRepetir");

const emailRegistroError = document.querySelector("#emailErrorRegistro");
const nombreApellidoRegistroError = document.querySelector("#nombreApellidoErrorRegistro");
const telefonoRegistroError = document.querySelector("#telefonoErrorRegistro");
const fechaNacimientoRegistroError = document.querySelector("#fechaNacimientoErrorRegistro");
const passwordRegistroError = document.querySelector("#passwordErrorRegistro");
const passwordRegistroRepetirError = document.querySelector("#passwordRepetirErrorRegistro");

const botonRegistrarse = document.querySelector("#botonRegistrarse");

inputEmailRegistro.addEventListener('change', function(){
    
});

const enviarDatosDeRegistro = (e) =>{
    e.preventDefault();
    console.log(inputEmailRegistro.value);
}

botonRegistrarse.addEventListener("click", enviarDatosDeRegistro);


/*const mostrarErrores = () => {
    estadoErroresOK.email ? emailRegistroError.classList.remove("visible") : emailRegistroError.classList.add("visible");
    estadoErroresOK.nombreApellido ? nombreApellidoRegistroError.classList.remove("visible") : nombreApellidoRegistroError.classList.add("visible");
    estadoErroresOK.telefono ?telefonoRegistroError.classList.remove("visible") :telefonoRegistroError.classList.add("visible");
    estadoErroresOK.fechaDeNacimiento ?fechaNacimientoRegistroError.classList.remove("visible") :fechaNacimientoRegistroError.classList.add("visible");
    estadoErroresOK.password ?passwordRegistroError.classList.remove("visible") :passwordRegistroError.classList.add("visible");
    estadoErroresOK.password ?passwordRegistroRepetirError.classList.remove("visible") :passwordRegistroRepetirError.classList.add("visible");
};

formularioRegistro.addEventListener('change', function(){
    estadoUsuario.email = inputEmailRegistro.value;
    estadoUsuario.nombreApellido = inputNombreApellidoRegistro.value;
    mostrarErrores();
});*/