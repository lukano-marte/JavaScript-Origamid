const img = document.querySelector('img');

function callback(event) {
  console.log(event);
}

img.addEventListener('click', callback);

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event) {
//  console.log(event.currentTarget);
}

animaisLista.addEventListener('click', callbackLista);

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event){
  event.preventDefault();
  console.log(event);
}

linkExterno.addEventListener('click', handleLinkExterno);


const h1 = document.querySelector('h1');

function handleEvent(event) {
  console.log(event.type, event);
};

//h1.addEventListener('click', handleEvent);
//h1.addEventListener('mouseenter', handleEvent);
//h1.addEventListener('mousemove', handleEvent);

//window.addEventListener('scroll', handleEvent);
//window.addEventListener('resize', handleEvent);

function handleKeyboard(event) {
  if(event.key === 'a') {
    document.body.classList.toggle('azul');
  }
  
}

window.addEventListener('keydown', handleKeyboard);

const imgs = document.querySelectorAll('img');

function handleImg(event) {
  console.log(event.currentTarget.getAttribute('src'));
}

imgs.forEach((img) => {
  img.addEventListener('click', handleImg);
});





// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]');

function classeAtivo(event) {
  event.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove('ativo');
  })
  event.currentTarget.classList.toggle('ativo');
};

linksInternos.forEach((link) => {
  link.addEventListener('click', classeAtivo)
});

//linksInternos.addEventListener('click', classeAtivo);


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll('body *');
function mostraElementos(event) {
  console.log(event.currentTarget);
}

todosElementos.forEach((elemento) => {
  elemento.addEventListener('click', mostraElementos);
})


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
//const todosElementos = document.querySelectorAll('body *');
//function mostraElementos(event) {
//  event.currentTarge.remove();
//}

//todosElementos.forEach((elemento) => {
//  elemento.addEventListener('click', mostraElementos);
//})


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function handleClickT(event) {
  if(event.key === 't') {
    document.documentElement.classList.toggle('textomaior');
  }
}

window.addEventListener('keydown', handleClickT);