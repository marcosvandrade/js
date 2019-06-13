function trocarDiv(nome, idade){
    var area = document.getElementById("area");
    var texto = prompt("Qual o seu sobrenome?");
    area.innerHTML = nome+" "+texto+" tem "+idade+" anos";
}