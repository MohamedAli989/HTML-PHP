const URL = "https://reqres.in/"
const tabela = document.getElementById('tbusuario');



fetch(URL)
    .then(response => response.text())
    .then(response => {
        const potsArray = JSON.parse(response);
        potsArray.forEach((e) => {
            const tdImagem = document.createElement('td');
            const tdNome = document.createElement('td');
            const tdEmail = document.createElement('td');
            const tr = document.createElement('tr');
            const img = document.createElement('img');

            <img src="Chris.png" alt=""></img>

            img.src = e.avatar;
            tdImagem.appendChild(img);


            tdNome.innerText = e.nome;
            tdEmail.innerText = e.email;
            
            tr.appendChild(img);
            tr.appendChild(tdEmail);
            tr.appendChild(tdNome);
            tr.appendChild(tdImagem);
            tabela.appendChild(tabela);
        });

    });