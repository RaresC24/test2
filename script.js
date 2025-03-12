const labels = document.querySelectorAll('.form-control label')

labels.forEach(label =>{
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay: ${idx / 10}s">${letter}</span>`)
        .join('')
})



const text = document.querySelectorAll('.text_mic')
const triggerBottom = window.innerHeight / 30 * 28
const ceva = 1


ShowText()
window.addEventListener('scroll', ShowText)
function ShowText(){
    text.forEach(linie => {
        const top = linie.getBoundingClientRect().top
        if(top > triggerBottom){
            linie.classList.add('show')
            linie.style.setProperty("--transition-time", `${ceva}s`);
            ceva += 2
        }
    })
} 







const b1 = document.querySelector('.btn1')
const b2 = document.querySelector('.btn2')
const b3 = document.querySelector('.btn3')
const f1 = document.querySelector('.contact_us')
const f2 = document.querySelector('.help_desk')
const f3 = document.querySelector('.make_appointment')


b1.addEventListener('click',() =>{
    f1.classList.add('show')
    f2.classList.remove('show')
    f3.classList.remove('show')
})
b2.addEventListener('click',() =>{
    f1.classList.remove('show')
    f2.classList.add('show')
    f3.classList.remove('show')
})
b3.addEventListener('click',() =>{
    f1.classList.remove('show')
    f2.classList.remove('show')
    f3.classList.add('show')
})