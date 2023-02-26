const btnOpenModal = document.querySelector('#js-open-modal');
const btnCloseModal = document.querySelector('#js-close-modal');
const modal = document.querySelector('#js-modal');

function openModal(){
    modal.classList.add('active');
};

function closeModal(){
    modal.classList.remove('active');
};


btnOpenModal.addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);