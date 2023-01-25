var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    // Extraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);
    console.log(paciente);

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagenDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);
    // limpando o form
    form.reset();
    ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
})

function adicionaPacienteNaTabela(paciente) {
    // cria a tr e td do paciente
    pacienteTr = montaTr(paciente);
    // adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagenDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){
    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso inválido");
    }

    if (!validaAltura(paciente.altura)){
        erros.push("Altura inválida");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }
    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }
    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }
    return erros;
}