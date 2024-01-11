document.addEventListener('DOMContentLoaded', function () {
    const postForm = document.getElementById('postForm');
    const postTitleInput = document.getElementById('postTitle');
    const postContentInput = document.getElementById('postContent');
    const renderizadorTitulo = document.getElementById('renderizador-titulo');
    const renderizadorConteudo = document.getElementById('renderizador-conteudo');
    const postContentPrint = document.getElementById('postContentPrint');

    postForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const data = {
            title: postTitleInput.value,
            body: postContentInput.value,
            userId: 1
        };

        // Simulando uma chamada de API usando a URL fornecida
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(response => response.json())
        .then(postData => {
            renderizadorTitulo.innerHTML = postData.title;
            renderizadorConteudo.innerHTML = postData.body;

            // Exibir conteúdo do post na versão impressa
            postContentPrint.setAttribute('data-title', postData.title);
            postContentPrint.setAttribute('data-body', postData.body);
        })
        .catch(error => console.error('Erro:', error));
    });
});
