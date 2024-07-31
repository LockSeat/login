const usuarios = [
    {
        login: 'admin@gmail.com',
        pass: 'admin'
    },
    {
        login: 'anna@gmail.com',
        pass: 'anna'
    },
    {
        login: 'lockseat@gmail.com',
        pass: 'senai'
    }
];

let botao = document.getElementById('btnLogar');

botao.addEventListener('click', function logar() {
    let pegaUsuario = document.getElementById('usuario').value;
    let pegaSenha = document.getElementById('senha').value;
    let validaLogin = false;

    for (let i in usuarios) {
        if (pegaUsuario == usuarios[i].login && pegaSenha == usuarios[i].pass) {
            validaLogin = true;
            break;
        }
    }

    if (validaLogin) {
        // Redireciona para a nova página se o login estiver correto
        window.location.href = "index.html";
    } else {
        // Exibe uma mensagem de erro se o login estiver incorreto
        alert('Email ou senha incorretos');
        // Opcional: Limpa os campos de entrada
        document.getElementById('usuario').value = '';
        document.getElementById('senha').value = '';
    }
});
