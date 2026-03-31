document.addEventListener('DOMContentLoaded', () => {
    const itemList = document.getElementById('saidaList');
    const form = document.getElementById('saidaForm');
    const localEnvioInput = document.getElementById('localEnvio');
    const inventario = JSON.parse(localStorage.getItem('inventario')) || [];

    itemList.innerHTML = ''; 
    if (inventario.length === 0) {
        itemList.innerHTML = '<p style="text-align: center; color: var(--text-muted);">Nenhum item disponível.</p>';
    } else {
        inventario.forEach(item => {
            const div = document.createElement('div');
            div.className = 'list-item-checkbox';
            div.innerHTML = `
                <label>
                    <input type="checkbox" name="itemSaida" value="${item.id}"> 
                    <span>${item.produto} <small>(Qtd: ${item.quantidade})</small></span>
                </label>
            `;
            itemList.appendChild(div);
        });
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const checkboxes = document.querySelectorAll('input[name="itemSaida"]:checked');
        if (checkboxes.length === 0) { alert('Selecione pelo menos um item.', 'error'); return; }
        
        const local = localEnvioInput.value;
        const ids = Array.from(checkboxes).map(cb => Number(cb.value));
        let inventarioAtual = JSON.parse(localStorage.getItem('inventario')) || [];
        let enviados = JSON.parse(localStorage.getItem('itensEnviados')) || [];
        let novoInventario = [];

        inventarioAtual.forEach(item => {
            if (ids.includes(item.id)) {
                item.localEnvio = local;
                item.dataEnvio = new Date().toLocaleDateString('pt-BR');
                enviados.push(item);
            } else {
                novoInventario.push(item);
            }
        });
        localStorage.setItem('inventario', JSON.stringify(novoInventario));
        localStorage.setItem('itensEnviados', JSON.stringify(enviados));
        alert('Itens enviados com sucesso!');
        setTimeout(() => { window.location.href = 'enviados.html'; }, 1500);
    });
});