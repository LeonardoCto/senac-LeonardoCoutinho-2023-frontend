async function buscarCEP() {
    limpar();
    var cepInformado = document.getElementById('cep').value;
    cepInformado = cepInformado.replace('-', '');

    var cepValido = validarCEP(cepInformado);
    if (cepValido) {
        fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
            .then(resultado => resultado.json())
            .then(json => {
                if (json.erro) {
                    mostrarTelaErro();
                } else {
                    preencherCamposComJSON(json);
                }
            })
            .catch(erro => {
                mostrarTelaErro();
            })
    }
}

function preencherCamposComJSON(json) {
    if (json.bairro) {
        bairro.value = json.bairro;
    } else {
        bairro.disabled = false;
    }

    if (json.logradouro) {
        rua.value = json.logradouro;
    } else {
        rua.disabled = false;
    }

    estado.value = json.uf;
    cidade.value = json.localidade;
    cidade.disabled = true;
    estado.disabled = true;
}

function limpar() {
    formulario.style = 'background-color: aqua';
    rua.value = '';
    bairro.value = '';
    cidade.value = '';
    estado.value = '';
    bairro.disabled = true;
    rua.disabled = true;
    cidade.disabled = true;
    estado.disabled = true;
}

function mostrarTelaErro() {
    limpar();
    formulario.style = 'background-color: red';
    alert('CEP informado não existe');
}

function validarCEP(cepFormatado) {
    var fieldsetCep = document.getElementById('fieldset-consulta-cep');
    var cepValido = false;
    if (cepFormatado.length == 8) {
        fieldsetCep.style = 'background-color: purple';
        cepValido = true;
    } else {
        fieldsetCep.style = 'background-color: orange';
    }

    return cepValido;
}

function salvarEndereco() {
    //TODO chamar no backend
    alert('Ainda não desenvolvido');
}

async function excluirPorCpf() {
    let cpf = "";//TODO pegar o cpf informado na tela

    let options = {
        method: "DELETE"
    };
    const exluirPessoa =
        await fetch('http://localhost:8080/api/pessoa/deletar-por-cpf/' + cpf, options);
    const resultado = await exluirPessoa.json();
    //tratamento do response aqui (despesaJson)
}

fetch('https://reqres.in/api/posts/1', { method: 'DELETE' })
    .then(() => console.log('Excluiu'));