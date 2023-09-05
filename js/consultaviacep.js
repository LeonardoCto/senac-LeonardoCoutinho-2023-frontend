
async function buscarCEP(){
    limpar();
    //'document' is a global variable who represnts all the HTML and yours elements(the tree DOM - Document Object Model)
    var txtCep = document.getElementById('txtCep');
    var cepInformado = txtCep.value;

    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
    .then(resultado => resultado.json())
    .then(json => {
        if(json.erro){
            mostrarTelaErro();
        }else{
            preencherCamposComJSON(json);
        }
    })
    .catch(erro => {
        mostrarTelaErro();
    })
  
}
    //Fill the adress data from HTML page
    //This works in JS, is the same to //if(sjon.bairro!= undefined && json.bairro != '')

    function preencherCamposComJSON(json){
    if(json.bairro){ 
        txtBairro.value = json.bairro;
    }else{
        txtBairro.disable = false;
    }
    txtLocalidade.value = json.localidade;
    txtLogradouro.value = json.logradouro;
    txtUF.value = json.UF;

    // Version 2 (old): get the component browsing on the tree DOM
    //document.getElementById('txtUF').value = json.uf;
}
function limpar(){
    divDadosEndereco.style = 'background-color: aqua';
    txtBairro.value = '';
    txtCidade.value = '';
    txtUF.value = '';
    txtBairro.disabled = true;
}

function mostrarTelaErro(){
    limpar();
    divDadosEndereco.style = 'background-color: red';
    alert('CEP informado não existe');
}

