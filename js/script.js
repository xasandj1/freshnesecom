const mainBtn = document.querySelectorAll(".main__btn");
const mainCard = document.querySelector('.main__card');

console.log(mainCard);
// for (let i = 0; i < mainBtn.length; i++) {
//     mainBtn[i].addEventListener('click',function (e) {
//         e.preventDefault()
//         for (let x = 0; x < mainBtn.length; x++) {
//             mainBtn[x].classList.remove("--active")
//             // mainCard[x].classList.remove("--active")
//         }
//         // mainBtn[x].classList.add("--active")
//         mainCard.classList.add('--active')
//     })

// }

for (let i = 0; i < mainBtn.length; i++) {
    mainBtn[i].addEventListener('click', function (e) {
        mainCard.classList.add('active')
    })
    for (let x = 0; x < mainBtn.length; x++) {
        mainBtn[x].addEventListener('click', function (e) {
            mainCard.classList.add("active")
        })
    }
}