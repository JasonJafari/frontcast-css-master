let backdrop = document.querySelector('.backdrop')
let modal = document.querySelector('.modal')
let selectPlanBtn = document.querySelectorAll('.plan button')
let modalClosBtn = document.querySelector('.modal__action--negative')

for (let i = 0; i < selectPlanBtn.length; i++) {
    selectPlanBtn[i].addEventListener('click', () => {
        modal.style.display = 'block'
        backdrop.style.display = 'block'
    })
}

backdrop.addEventListener('click', closeModal)
modalClosBtn.addEventListener('click', closeModal)

function closeModal() {
    backdrop.style.display = 'none'
    modal.style.display = 'none'
}