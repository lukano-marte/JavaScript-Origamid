// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const primeiroDT = document.querySelector('dl')
console.log(primeiroDT.firstElementChild);

// Selecione o DD referente ao primeiro DT
const dd = document.querySelector('dl');
console.log(dd.children[1]);

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML;