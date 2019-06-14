function trocarDiv(nome, idade){
    var area = document.getElementById("area");
    var texto = prompt("Qual o seu sobrenome?");
    area.innerHTML = nome+" "+texto+" tem "+idade+" anos";
}

function  adicionarIngrediente() {
    var ing = document.getElementById("ingrediente").value;

    var listahtml = document.getElementById("lista").innerHTML;

    listahtml = listahtml + "<li>" + ing + "</li>";

    document.getElementById("lista").innerHTML = listahtml;

  }