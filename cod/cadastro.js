document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cadastroForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const cpf = document.getElementById('cpf').value;
        const password = document.getElementById('password').value;
        const users = JSON.parse(localStorage.getItem('users')) || [];

        if (users.find(user => user.cpf === cpf)) {
            alert('Este CPF já foi cadastrado.', 'error');
            return;
        }
        users.push({ name, cpf, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Usuário cadastrado com sucesso!');
        setTimeout(() => { window.location.href = 'teladelogin.html'; }, 1500);
    });
});