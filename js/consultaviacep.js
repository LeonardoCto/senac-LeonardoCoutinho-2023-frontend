/////////   Versão 1: chamadas direto em Javascript /////////
//URL de teste: https://viacep.com.br/ws/88495000/json/
//Referência:https://viacep.com.br/modulos_e_pacotes/
// //1- instanciar o prompt
// let prompt = require('prompt-sync')();

// //2- solicitar um CEP para o usuário no terminal
// let cepInformado = prompt('Informe o CEP:');

// //3- Chamar a função de consulta de cep
// buscarCEP(cepInformado);

// //Função assíncrona (não sabemos quando retorna)
// async function buscarCEP(cep){
//     //Parâmetros opcionais para a requisição
//     let options = {
//         method: "GET",
//         headers: {"Content-type": "application/json"}
//     };
//     //Esta variável é uma Promise (um objeto que será preenchido quando a requisição HTTP retornar)
//     //Atenção com as aspas, para passar o parâmetro CEP devemos usar o ACENTO GRAVE
//     const promiseConsultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`, options);

//     //Retorno da Promise
//     const json = await promiseConsultaCEP.json();
// }
///////////////////////////////////////////////////////////////

/////////   Versão 2: para chamar diretamente do HTML /////////
//O valor do cep digitado está no <input> com id "txtCep"

async function buscarCEP(){
    limpar();
    //'document' is a global variable who represnts all the HTML and yours elements(the tree DOM - Document Object Model)
    var txtCep = document.getElementById('txtCep');
    var cepInformado = txtCep.value;

    const promiseConsultaCEP = await fetch(`https://viacep.com.br/ws/${cepInformado}/json/`);
    //Return off promise
    const json = await promiseConsultaCEP.json();

    //TODO handle the case off json with error = true
    //Show the alert
    //Clear all the fields
    //Alter the backgroundcolor off the page to red



  
    //Fill the adress data from HTML page
    //This works in JS, is the same to //if(sjon.bairro!= undefined && json.bairro != '')
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
    txtBairro.value = '';
    txtCidade= '';
    txtUF= '';

    txtBairro.disable = true;

}
