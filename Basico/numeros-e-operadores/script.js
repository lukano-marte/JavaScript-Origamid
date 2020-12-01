var total1 = 10 + 5 + 10;
var divisao = 100 / 5;
var modulo = 84948182 % 3;

console.log(modulo);

var testeNaN = '100' / 2;
console.log(isNaN(testeNaN));

var soma1 = 10 + 10 + 30 * 4 / 2 + 10;
console.log(soma1);

var incremento = 5;
console.log(incremento++);
console.log(incremento);

var decremento = 5;
console.log(decremento--);
console.log(decremento);

var idade = +'28';
var somaIdade = -5;

console.log(idade);


// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total);

// Crie duas expressões que retornem NaN
var n1 = 'número 10' + 10;
var n2 = 'número 20' + 20;
console.log(n1 * n2);

// Somar a string '200' com o número 50 e retornar 250
var somarString = +'200' + 50;
console.log(somarString);

// Incremente o número 5 e retorne o seu valor incrementado
var nIncremento = 5;
console.log(++nIncremento);

// Como dividir o peso por 2?
var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = numero / 2; // NaN (Not a Number)

console.log(pesoPorDois);