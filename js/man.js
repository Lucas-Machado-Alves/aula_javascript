/*var nome = "Lucas Machado Alves";
var idade = 22;
var idade2 = 10;
var frase = "Japão é o melhor do mundo";
//alert(nome +" tem " + idade + " anos" );
//alert(idade + idade2); //neste caso ele vai somar pois a variável foi dada como "int" 
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão" , "Brasil"));//altera o nome Japão para Brasil
//console.log(frase.toLowerCase()); // deixa as letras em minúsculo
//console.log(frase.toUpperCase());//deixa as letras todas minúsculas
//alert(frase.replace("Japão" , "Brasil"));//altera o nome Japão para Brasil
*/

/*
var n1 = 5;
var n2 = 3;
var res = n1 + n2
alert("O resultado da soma de n1 e n2 é : " + res);
*/

/*
var lista = ["maça" , "pêra" , "laranja"];
lista.push("uva");//incere na lista a fruta pera
//lista.pop("");//tira o utimo elemento da lista
//console.log(lista);
//console.log(lista.length); //ver o tamanho da minha lista
//console.log(lista.reverse()); //ele imprime os elementos ao contrario da lista
//console.log(lista,toString); // transforma a exibição de  arei para string
//console.log(lista.join(" - ")); //coloca entre a exibição o sinal escolhido(-) no lugar dspas duplas e tranforma em String
*/

/*
//array
var fruta = {nome:"maça",  cor:"vermelha"}
console.log(fruta.nome);//vai mostrar o valor que esta contido em nome
alert(fruta.cor);// vai mostrar no alerta o valor que esta contido em cor
*/

/*
//listade dicionários
var frutas = [{nome:"maça",  cor:"vermelha"} , {nome:"banana",  cor:"amarela"} ]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
//condicional
var idade = prompt(" Qual a sua idade? ") //exibe uma pergunta para o usuário e armazena o valor digitado na variavel idade
if (idade >= 18){ //faz a comparação  do valor digitado 
    alert("Maior de idade!"); //caso for maior de idade
}else{
    alert("Menor de idade!"); //caso seja menor de idade
}
*/


/*
//laços de repetição (while)
var count = 0; // count recebe o valor 0
while(count <= 5){ //enquanto count for menor ou igual a 5, será rodado o programa abaixo
    console.log(count); // imprime o valor de count
   // alert(count);  // alerta o valor de count
    count++; //adiciona 1 a count
}
*/

/*
//laços de repetição (for)
var count;
for(count = 0; count <= 5; count++){//enquanto count for menor ou igual a 5, será rodado o programa abaixo
    alert(count); // imprime o valor de count
}
*/


/*
//Data, Mês, Ano, Hora
var d = new Date(); //Pega a data atual do console
alert(d); //exibe o valor de 'd' que é a data atual do console
console.log(d)

alert(d.getMonth()+1);//exibe o mês atual do console, sempre será necessário adicionar o +1
console.log(d.getMonth()+1);

alert(d.getMinutes()); //exibe os minutos atuais do console
console.log(d.getMinutes());

alert(d.getDay());//exibe o dia atual do console
console.log(d.getDay());

alert(d.getHours()); //exibe hora atual do console
console.log(d.getHours());
*/
/*
//Funções
function soma(n1,n2){//cria uma função
    return n1 + n2 //soma os valores
}
alert(soma(5+10));//mostra no campo alert o valor da soma de n1 + n2
*/

/*
var validar = 0; //cria a variavel global

function validaIdade(idade){//cria uma função
    if(idade >= 18){ //compara se idade e maios ou igual a 10
        validar = true //recebe verdadeiro
    }else{ //caso não for maior que 18
        validade = false //recebe falso
    }
    return validar; //retorna o valor da variavel validar
}
var idade = prompt ("Qual sua idade?"); //Pega valor digitado pelo usuario e armazena na variavel idade
validaIdade(idade) 
console.log(valida); //mostra no console o resultado da função idade
*/