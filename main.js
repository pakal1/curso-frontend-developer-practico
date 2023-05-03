const menuEmail = document.querySelector('.navbar-email');
const desktopMneu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMneu.classList.toggle('inactive');

}
