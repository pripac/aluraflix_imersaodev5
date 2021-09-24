function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    if (filmeFavorito.endsWith(".jpg")){
        listarFilmesNaTela(filmeFavorito)
    } else { console.error("Esse endereço é inválido")}

    document.getElementById("filme").value = "";    
}

function listarFilmesNaTela(filmeFavorito) {
var elementoFilmeFavorito = "<img src="+ filmeFavorito + ">"
 var elementoListaFilmes = document.getElementById("listaFilmes");
 elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito;
 campoFilmeFavorito.value = ""
}