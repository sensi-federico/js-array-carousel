

// Consegna:
// Dato un array contenente una lista di cinque immagini, creare 
// un carosello come nello screenshot allegato.

// MILESTONE 1
// Per prima cosa, creiamo il markup statico: 
// costruiamo il container e inseriamo un'immagine grande al centro: 
// avremo così la struttura base e gli stili pronti per poterci poi 
// concentrare solamente sull'aspetto logico.


// array contenente immagini

const slides = [
    './assets/img/01.webp',
    './assets/img/02.webp',
    './assets/img/03.webp',
    './assets/img/04.webp',
    './assets/img/05.webp'
];

// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte 
// le immagini dinamicamente servendoci 
// dell'array fornito e un semplice ciclo for che concatena 
// un template literal. 
// Tutte le immagini saranno nascoste, tranne la prima, 
// che avrà una classe specifica che la renderà visibile. 
// Al termine di questa fase ci ritroveremo con lo stesso slider 
// stilato nella milestone 1, ma costruito
// dinamicamente attraverso JavaScript.

const slidesEl = document.querySelector('div.slides');

let imageActive = 0;

for (let i = 0; i < slides.length; i++) {
    const slideUrl = slides[i];
    const markUp = `<img class="${i === imageActive ? 'active' : ''}" src="${slideUrl}" alt="">`
    slidesEl.insertAdjacentHTML('beforeend', markUp);
}

const nextButtonEl = document.querySelector('.next');
const prevButtonEl = document.querySelector('.prev');

nextButtonEl.addEventListener('click', function() {
    const images = document.querySelectorAll('.slides > img');
    const currentSlide = images[imageActive];

    currentSlide.classList.remove('active');
    imageActive++;
    
    const nextSlide = images[imageActive];
    nextSlide.classList.add('active');
})

 