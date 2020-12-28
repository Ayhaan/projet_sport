let btn = document.querySelector('section')
let video = document.querySelectorAll('iframe')
let fermer = document.querySelector('#close')
console.log(fermer);
var test = false;

video.forEach(el => el.addEventListener('click', () => {
    // console.log(el);
    el.classList.toggle('active')
    fermer.style.display = "block"
    document.body.style.overflowY = "hidden"
    fermer.addEventListener('click', () => {
        el.classList.remove('active')
        fermer.style.display = 'none'
        document.body.style.overflowY = "scroll"

    })
    // console.log(fermer);

}));



// if (test == true) {
//     console.log('TESST');
//     btn.addEventListener('click', () => {
//         video.forEach(el => {
//             el.classList.remove('active')
//         });
//     })
// }