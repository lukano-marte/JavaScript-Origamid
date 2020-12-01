const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const animaisTopo = listaAnimais.offsetTop;
console.log(animaisTopo);

const raposah2 = document.querySelector('h2')
const raposaLeft = raposah2.offsetLeft;

const rect = raposah2.getBoundingClientRect();


console.log(rect.top);

if(rect < 0) {
  console.log('Passou do elemento');
}

console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerWidth,
  window.outerHeight,
  window.pageYOffset,
);

const small = window.matchMedia('(max-width: 600px)');

if(small.matches) {
  console.log('Usuário Mobile');
} else {
  console.log('Usuário Desktop');
}

// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImagem = document.querySelector('img');
const distancia = primeiraImagem.getBoundingClientRect();
console.log(distancia.top);

// Retorne a soma da largura de todas as imagens
function somaImagens () {
  const imagens = document.querySelectorAll('img');
  let soma = 0;
  imagens.forEach(somar => {
    soma += somar.offsetWidth;
  });
  console.log(soma);
}

window.onload = function() {
  somaImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');

links.forEach(link => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if(linkWidth || linkHeight >= 48) {
    console.log('É menor');
  } else {
    console.log('É maior');
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if(browserSmall) {
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
}