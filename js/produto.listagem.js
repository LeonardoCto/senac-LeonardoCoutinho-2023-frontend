async function buscarTodosProdutos() {
    fetch('http://localhost:8080/api/produtos')
        .then(resultado => resultado.json())
        .then(json => {
            preencherTabela(json);
        });
}

function preencherTabela(jsonProdutos) {


    var dadosTabelaProdutos = document.getElementById('corpoTabela');

    for (let i = 0; i < jsonProdutos.length; i++) {
        let novaLinha = dadosTabelaProdutos.insertRow();

        let celulaId = novaLinha.insertCell();
        celulaId.innerText = jsonProdutos[i].id;

        let celulaNome = novaLinha.insertCell();
        celulaNome.innerText = jsonProdutos[i].nome;

        let celulaFabricante = novaLinha.insertCell();
        celulaFabricante.innerText = jsonProdutos[i].fabricanteDoProduto.nome;

        let celularValor = novaLinha.insertCell();
        celularValor.innerText = 'R$' + jsonProdutos[i].valor;

        let celulaPeso = novaLinha.insertCell();
        celularPeso.innerText = jsonProdutos[i].peso;

    }

}

buscarTodosProdutos();