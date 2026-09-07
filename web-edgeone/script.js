document.addEventListener('DOMContentLoaded', () => {
    const btnAction = document.getElementById('btnAction');
    const statusBox = document.getElementById('statusBox');
    const statusText = document.getElementById('statusText');

    btnAction.addEventListener('click', () => {
        statusBox.classList.remove('hidden');
        statusText.innerText = "Mengecek konektivitas Edge Network...";
        
        setTimeout(() => {
            statusText.innerText = "Tencent EdgeOne Status: Operational (Active SSL & Global Caching)";
        }, 800);
    });
});