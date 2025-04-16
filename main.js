// Implementa acesso para a tela de login
function acessar() {
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;

    // Implementa estrutura que testa se todos os campos foram preenchidos
    if(!loginEmail || !loginSenha) {
        alert("Preencha todos os campos!");
        return;
    } else{
        window.location.href = "cadastro.html";
    }
}

// cria variável do tipo array
var dadosLista = [];

function salvarUser() {
    let nomeUser = document.getElementById("nomeUser").value;

    if(nomeUser){
        dadosLista.push(nomeUser);
        console.log(dadosLista);
        criaLista();
        document.getElementById("nomeUser").value = "";
    }else{
        alert("favor informar um nome para cadastro");
    }
    
}   

// Função para preencher a lista de cadastro
    function criaLista() {
        let tabela = "<tr><th>Nome</th<th>Ações</th></tr>";
        for (let i = 0;i <=(dadosLista.length - 1); i++){
            tabela += "<tr><td>" + dadosLista[i] + "</td<td><button class='btn btn-warning'onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button class='btn btn-danger'onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
            document.getElementById("tabela").innerHTML = tabela;
        }
    }

    // Função para excluir nome da lista

    function excluir(i){
        dadosLista.splice((i-1), 1);
        document.getElementById('tabela').deleterow(i);
        console.log(dadosLista);

    }

    //Função para Edição de nome da lista
    function editar(i){
        document.getElementById('nomeUser').value = dadosLista [(i-1)];
        dadosLista.splice(dadosLista[(i - 1)], 1);
  
    }