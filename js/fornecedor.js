async function listarTodos() {
    fetch('http://localhost:8080/api/fabricantes/todos')
        .then(resultado => resultado.json())
        .then(json => {
            preencherTabela(json);
        });
}

async function limpar() {

    document.getElementById("corpoTabela").innerHTML = "";

}

function validarCampos(){
    //TODO
    return true;
}

async function cadastrar() {
    let options = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            nome: document.getElementById("nome").value,
            cnpj: document.getElementById("cnpj").value,
            cep: document.getElementById("cep").value,
            cidade: document.getElementById("cidade").value,
            uf: document.getElementById("uf").value
        })
    }
    if (!validarCampos()) {
        alert("Informe os campos em branco!")
    } else {
        const despesaUsuario = await fetch('http://localhost:8080/api/fabricantes', options);
        const despesaJson = await despesaUsuario.json();
        alert("Cadastro feito com sucesso")

    }
}

async function buscarCEP() {

    var txtCep = document.getElementById('cep');
    var cepInformado = txtCep.value;
    const promiseConsultCEP = await fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
    const json = await promiseConsultCEP.json();
    if (json.erro) {
        pintarCamposdeVermelho();
    } else {
        preencherCamposComJSON(json);
    }
    console.log(json);
}

function preencherCamposComJSON(json) {
    cidade.value = json.localidade;
    uf.value = json.uf;
}

function preencherTabela(jsonFabricantes) {

    var dadosTabelaFabricantes = document.getElementById('corpoTabela');

    for (let i = 0; i < jsonFabricantes.length; i++) {
        let novaLinha = dadosTabelaFabricantes.insertRow();

        let id = novaLinha.insertCell();
        id.innerText = jsonFabricantes[i].id;

        let celulaNome = novaLinha.insertCell();
        celulaNome.innerText = jsonFabricantes[i].nome;

        let celulaCnpj = novaLinha.insertCell();
        celulaCnpj.innerText = jsonFabricantes[i].cnpj;

        let celulaCep = novaLinha.insertCell();
        celulaCep.innerText = jsonFabricantes[i].cep;

        let celulaCidade = novaLinha.insertCell();
        celulaCidade.innerText = jsonFabricantes[i].cidade;

        let celulaUf = novaLinha.insertCell();
        celulaUf.innerText = jsonFabricantes[i].uf;


    }
}


