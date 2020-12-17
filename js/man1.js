function clicou(){
    //alert("Obrigado por clicar!")
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado pro clicar!</b>";
}

function redirecionar(){
    window.open("https://www.google.com/")//usado para abrir links em outra janela
    //window.location.href =" https://www.google.com/ ";//usado para abrir links na mesma janela
}

//Ao passar o mouse muda o texto no html da pagina
function trocar(){
    document.getElementById("mousemove")
    .innerHTML = "Obrigador por passar o mouse!";
}

//Ao tirar o mouse muda o texto atual para o anterior
function voltar(){
    document.getElementById("mousemove")
    .innerHTML = "Passe o mouse aqui";
}


//Opção passando o proprio elemento(this)
function trocar2(elemento){
    elemento.innerHTML = "Obrigador por passar o mouse!";
}

function voltar2(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}


//onload
function load(){
    alert("Pagina carregada!")
}

//funcaoChange
function funcaoChange(elemento){
    console.log(elemento.value) //pega o valor que esta sendo escolhido no select do HTML
}