const noticias = document.getElementsByClassName("card")

function normalizaStr(str) {
    return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

function buscaNoticia() {
    var input = document.getElementById("nome").value;
    var filtro = document.getElementById("tipo").value;
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
        // Caso tenha achado a notícia e o filtro permita exibir!
        if (achou[i] && (filtro === noticias[i].getElementsByTagName("a")[0].innerText || filtro === 'Todos')) {
            noticias[i].style.display = "inline"
        }
        // Removendo todas as outras que não são correspondentes
        else {
            noticias[i].style.display = "none"
        }
    }
}

function filtraNoticias() {
    var input = document.getElementById("nome").value;
    var filtro = document.getElementById("tipo").value;
    var achou = {};

    if (filtro === "Todos") {
        // Exibindo todas as notícias que o filtro e a pesquisa permitam
        for (let i = 0; i < noticias.length; i++) {
            if ((normalizaStr(noticias[i].getElementsByTagName("p")[0].innerText).includes(normalizaStr(input)) || input === '')){
                noticias[i].style.display = "inline"
            }
        }
        return;
    }

    // Verificando se achou as notícias
    for (let i = 0; i < noticias.length; i++) {
        achou[i] = false;

        var noticia = noticias[i].getElementsByTagName("a")[0].innerText;

        if (noticia === filtro) {
            achou[i] = true;
        }
    }

    // Renderizando as notícias
    for (let i = 0; i < noticias.length; i++) {
        // Caso o filtro permita e a pesquisa permita
        if (achou[i] && (normalizaStr(noticias[i].getElementsByTagName("p")[0].innerText).includes(normalizaStr(input)) || input === '')) {
            noticias[i].style.display = "inline"
        }
        // Removendo todas as outras que não são correspondentes
        else {
            noticias[i].style.display = "none"
        }
    }
}