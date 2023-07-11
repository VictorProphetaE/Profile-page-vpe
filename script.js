function showPage(page) {
    // Hide all other pages
    document.querySelectorAll('.alldiv').forEach(div => {
        div.style.display = 'none';
    });

    // Show requested page
    document.querySelector(`#${page}`).style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('button').forEach(button => {
        button.onclick = function() {
            showPage(this.dataset.page);
        };
    });

    // Adicione o código HTML à página 'text.js'
    var divElement = document.createElement('div');
    divElement.innerHTML = htmlCode;
    document.body.appendChild(divElement);

    // Defina a página inicial para 'home2'
    showPage('home2');

    // Adicione os eventos de clique para exibir as seções dentro de 'about-me'
    document.querySelectorAll('#about-me button').forEach(button => {
        button.onclick = function() {
            showPage(this.dataset.page);
        };
    });

    // Adicione o evento de clique para voltar à seção "About Me" quando o botão "Back" for clicado
    document.querySelector('#formacoes-complementares .btn2').onclick = function() {
        showPage('about-me');
    };

    document.querySelector('#habilidades .btn2').onclick = function() {
        showPage('about-me');
    };

    document.querySelector('#objetivo .btn2').onclick = function() {
        showPage('about-me');
    };
});
