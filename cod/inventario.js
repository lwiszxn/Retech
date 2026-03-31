document.addEventListener('DOMContentLoaded', () => {
    const itemList = document.getElementById('itemList');
    function renderInventario() {
        const inventario = JSON.parse(localStorage.getItem('inventario')) || [];
        itemList.innerHTML = ''; 
        if (inventario.length === 0) {
            itemList.innerHTML = '<p style="text-align: center; color: var(--text-muted);">Vazio.</p>';
        } else {
            inventario.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.className = 'list-item';
                itemElement.innerHTML = `
                    <span>
                        <strong>${item.produto}</strong> (${item.estado})<br>
                        <small>Qtd: ${item.quantidade}</small>
                    </span>
                    <button class="btn-delete" data-id="${item.id}"><i class="fas fa-times"></i></button>
                `;
                itemList.appendChild(itemElement);
            });
        }
    }
    itemList.addEventListener('click', (event) => {
        // Verifica se clicou no botão ou no ícone dentro dele
        const btn = event.target.closest('.btn-delete');
        if (btn) {
            if (confirm('Excluir item permanentemente?')) {
                const itemId = Number(btn.dataset.id);
                let inventario = JSON.parse(localStorage.getItem('inventario')) || [];
                inventario = inventario.filter(item => item.id !== itemId);
                localStorage.setItem('inventario', JSON.stringify(inventario));
                renderInventario();
            }
        }
    });
    renderInventario();
});