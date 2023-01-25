var titulo = document.querySelector(".titulo");
titulo.textContent = 'Aparecida Nutrição';

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido){
        pesoEhValido = false;
        console.log("Peso inválido");
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValida) {
        alturaEhValida = false;
        console.log("Altura inválida");
        tdImc.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = calcularImc(peso, altura);
        tdImc.textContent = imc;
    }

}

function calcularImc(peso, altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso){
    if (peso >= 0 && peso <= 300){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.0){
        return true;
    }else{
        return false;
    }
}
