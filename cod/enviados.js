document.addEventListener('DOMContentLoaded', () => {
    const itemList = document.getElementById('enviadosList');
    function renderItens() {
        const enviados = JSON.parse(localStorage.getItem('itensEnviados')) || [];
        itemList.innerHTML = '';
        if (enviados.length === 0) {
            itemList.innerHTML = '<p style="text-align: center; color: var(--text-muted);">Histórico vazio.</p>';
        } else {
            enviados.forEach(item => {
                const div = document.createElement('div');
                div.className = 'sent-item-card';
                div.innerHTML = `
                    <h3>${item.produto}</h3>
                    <p><strong>Qtd:</strong> ${item.quantidade}</p>
                    <p><strong>Data:</strong> ${item.dataEnvio}</p>
                    <p><strong>Local:</strong> ${item.localEnvio}</p>
                    <button class="btn-return" data-id="${item.id}">Retornar ao Inventário</button>
                `;
                itemList.appendChild(div);
            });
        }
    }
    itemList.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-return')) {
            const id = Number(event.target.dataset.id);
            let enviados = JSON.parse(localStorage.getItem('itensEnviados')) || [];
            let inventario = JSON.parse(localStorage.getItem('inventario')) || [];
            const item = enviados.find(i => i.id === id);
            if (item) {
                delete item.localEnvio; delete item.dataEnvio;
                inventario.push(item);
                enviados = enviados.filter(i => i.id !== id);
                localStorage.setItem('inventario', JSON.stringify(inventario));
                localStorage.setItem('itensEnviados', JSON.stringify(enviados));
                renderItens();
                alert('Item retornado ao inventário.');
            }
        }
    });
    renderItens();
});