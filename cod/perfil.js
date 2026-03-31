document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('perfilForm');
    const inputNome = document.getElementById('perfilNome');
    const inputCpf = document.getElementById('perfilCpf');
    const inputSenha = document.getElementById('perfilSenha');
    const btnDeletar = document.getElementById('btnDeletarConta');

    // Recupera qual CPF está logado
    const loggedCpf = sessionStorage.getItem('loggedCpf');

    // Se não tiver ninguém logado, manda de volta pro login
    if (!loggedCpf) {
        window.location.href = 'teladelogin.html';
        return;
    }

    // Carrega os usuários do banco
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let currentUserIndex = users.findIndex(user => user.cpf === loggedCpf);

    // READ: Preenche os inputs com os dados do usuário logado
    if (currentUserIndex !== -1) {
        inputCpf.value = users[currentUserIndex].cpf;
        inputNome.value = users[currentUserIndex].name;
        inputSenha.value = users[currentUserIndex].password;
    }

    // UPDATE: Atualizar dados do usuário
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        users[currentUserIndex].name = inputNome.value;
        users[currentUserIndex].password = inputSenha.value;

        localStorage.setItem('users', JSON.stringify(users));
        alert('Perfil atualizado com sucesso!', 'success');
    });

    // DELETE: Excluir a conta
    btnDeletar.addEventListener('click', () => {
        // Usando o confirm nativo ou você pode adaptar para um modal customizado depois
        const confirmacao = confirm('Tem certeza que deseja excluir sua conta permanentemente? Esta ação não pode ser desfeita.');
        
        if (confirmacao) {
            // Remove o usuário da lista
            users.splice(currentUserIndex, 1);
            localStorage.setItem('users', JSON.stringify(users));
            
            // Limpa a sessão logada
            sessionStorage.removeItem('loggedCpf');
            
            alert('Sua conta foi excluída.', 'success');
            setTimeout(() => { window.location.href = 'teladelogin.html'; }, 1500);
        }
    });
});