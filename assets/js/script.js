const noticias = document.getElementsByClassName("card")

function normalizaStr(str) {
    return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

function buscaNoticia() {
    var input = document.getElementById("nome").value;
    var achou = {};

    // Verificando se achou as notícias
    for (let i = 0; i < noticias.length; i++) {
        achou[i] = false;

        var noticia = noticias[i].getElementsByTagName("p")[0].innerText;

        if (normalizaStr(noticia).includes(normalizaStr(input))) {
            achou[i] = true;
        }
    }

    // Renderizando as notícias
    for (let i = 0; i < noticias.length; i++) {
        console.log(achou);
        // Caso tenha achado a notícia exibir!
        if (achou[i]) {
            noticias[i].style.display = "inline"
        }
        // Removendo todas as outras que não são correspondentes
        else {
            noticias[i].style.display = "none"
        }
    }
}