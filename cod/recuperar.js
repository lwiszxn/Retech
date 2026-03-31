document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('recuperarForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Captura os valores digitados
        const cpf = document.getElementById('cpf').value;
        const novaSenha = document.getElementById('novaSenha').value;

        // Resgata a lista de usuários do localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Verifica se existe algum usuário com o CPF informado
        const userIndex = users.findIndex(user => user.cpf === cpf);

        if (userIndex !== -1) {
            // Ação de UPDATE do CRUD: Atualiza a senha no array
            users[userIndex].password = novaSenha;

            // Salva o array atualizado de volta no localStorage
            localStorage.setItem('users', JSON.stringify(users));

            // Exibe o alerta de sucesso personalizado do seu utils.js
            alert('Senha redefinida com sucesso!', 'success');

            // Redireciona de volta para a tela de login
            setTimeout(() => {
                window.location.href = 'teladelogin.html';
            }, 1500);
        } else {
            // Se o CPF não for encontrado, exibe o alerta de erro do seu utils.js
            alert('Erro: CPF não encontrado no sistema.', 'error');
        }
    });
});