alert("Olá, mundo");

let nome_usuário= "";
let elemento= document.querySelector ("#nome-usuário");

while (nome_usuário == ""){
    nome_usuário = prompt("Qual é o seu nome?");
}

if(nome_usuário == null) {
    elemento.textContent= 'seja muito bem-vindo!';
} else {
    elemento.textContent= nome_usuário;
}

