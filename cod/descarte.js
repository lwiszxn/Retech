document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('descarteForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const produto = document.getElementById('produto').value;
        const estado = document.getElementById('estado').value;
        const quantidade = document.getElementById('quantidade').value;
        const motivo = document.getElementById('motivo').value;

        const novoItem = {
            id: Date.now(),
            produto, estado, quantidade, motivo,
            dataCriacao: new Date().toLocaleDateString('pt-BR')
        };
        const inventario = JSON.parse(localStorage.getItem('inventario')) || [];
        inventario.push(novoItem);
        localStorage.setItem('inventario', JSON.stringify(inventario));

        form.reset();
        alert('Item enviado para o inventário!');
    });
});