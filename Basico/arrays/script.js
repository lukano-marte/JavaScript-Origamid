var videoGames = ['Switch', 'PS4', 'XONE'];
var ultimoItem = videoGames.pop();
videoGames.push('3DS');


for (var numero = 0; numero <= 10; numero++) {
  console.log('numero');
}


var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}


var bunker = ['Dragão', 'Kevin', 'Alicate', 'Paulão', 'Homem Bode'];
for(var item = 0; item < bunker.length; item++) {
  console.log(bunker[item]);
  if(bunker[item] === 'Alicate') {
    break;
  }
}


var aesir = ['Odin', 'Thor', 'Magni', 'Baldur']
aesir.forEach(function(deuses) {
  console.log(deuses)
});


// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var brasilCopa = [1959, 1962, 1970, 1994, 2002]

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for(var i = 0; i < brasilCopa.length; i++) {
  console.log('O Brasil ganhou a copa de ' + brasilCopa[i]);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for(var i = 0; i < frutas.length; i ++) {
  console.log(frutas[i]);
  if(frutas[i] == frutas[2]) {
    break;
  }
}
// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length - 1];