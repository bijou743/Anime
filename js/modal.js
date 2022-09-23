const modal = document.querySelector('.search-model')
const modalOpen = document.querySelector('.icon_search')

modalOpen.addEventListener('click', () => modal.style.display = 'block')

const modalClose = modal.querySelector('.search-close-switch')
modalClose.addEventListener('click', () => modal.style.display = 'none')