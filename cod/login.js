document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const cpf = document.getElementById('cpf').value;
        const password = document.getElementById('password').value;
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const foundUser = users.find(user => user.cpf === cpf && user.password === password);

        if (foundUser) {
            sessionStorage.setItem('loggedCpf', foundUser.cpf);
            alert(`Bem-vindo(a), ${foundUser.name}!`);
            setTimeout(() => { window.location.href = 'menu.html'; }, 1000);
        } else {
            alert('CPF ou senha incorretos.', 'error');
        }
    });
});