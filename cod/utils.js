if (!document.getElementById('customToast')) {
    const toastDiv = document.createElement('div');
    toastDiv.id = 'customToast';
    toastDiv.className = 'toast';
    document.body.appendChild(toastDiv);
}

window.alert = function(message, type = 'success') {
    const toast = document.getElementById('customToast');
    const icon = type === 'error' ? '<i class="fas fa-exclamation-circle"></i>' : '<i class="fas fa-check-circle"></i>';
    toast.innerHTML = `${icon} <span>${message}</span>`;
    
    if (type === 'error' || message.toLowerCase().includes('erro') || message.toLowerCase().includes('incorreto') || message.toLowerCase().includes('já existe')) {
        toast.classList.add('error');
    } else {
        toast.classList.remove('error');
    }
    toast.classList.add('show');
    setTimeout(() => { toast.classList.remove('show'); }, 3000);
};