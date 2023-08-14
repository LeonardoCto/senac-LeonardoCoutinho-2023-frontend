
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
