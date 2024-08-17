const typeNav = document.getElementById('typenav');
const conteinerImgNav = document.getElementById('conteinerimgnav');

conteinerImgNav.addEventListener('click', function() {
    this.classList.toggle('conteinerimgnavclick');

    if (typeNav.style.display === 'flex') {
        typeNav.style.display = 'none';
    } else {
        typeNav.style.display = 'flex';
    }
    if (body.style.overflowY === 'hidden') {
        body.style.overflowY = 'auto';
    } else {
        body.style.overflowY = 'hidden';
    }
});

