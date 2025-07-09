const abrirMenu = document.querySelector('[data-modal="menu"]');
const fecharMenu = document.querySelector('[data-modal="fechar"]');

const dropDown = document.querySelector('[data-modal="drop"]');

function openMenu(event){
    event.preventDefault();
    dropDown.classList.add('ativo');
}
function closeMenu(event){
    event.preventDefault();
    dropDown.classList.remove('ativo');
}

abrirMenu.addEventListener('click', openMenu);
fecharMenu.addEventListener('click',closeMenu);