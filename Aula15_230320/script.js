const getEl = id => document.getElementById(id);
const content = getEl("content");

content.innerHTML += "<h2>Aula 15 / Etapa 7</h2>";

content.innerHTML += "<h3>String</h3>";

let texto1 = 'Quantas letras'; 
let texto2 = "14"; 
let texto3 = ``;

let textoNumero = '8765';

content.innerHTML += `<p>${typeof texto1}</p>`
content.innerHTML += `<p>${texto1.length}</p>`
content.innerHTML += `<p>${texto1.concat(texto2)}</p>`
content.innerHTML += `<p>${texto1[6]}</p>`

content.innerHTML += `<p>${texto1.charAt(6)}</p>`
content.innerHTML += `<p>${texto1.indexOf('a')}</p>`
content.innerHTML += `<p>${texto1.indexOf('z')}</p>`
content.innerHTML += `<p>${texto1.startsWith('Quantas')}</p>`
content.innerHTML += `<p>${texto1.endsWith('tras')}</p>`
content.innerHTML += `<p>${texto1.includes('le')}</p>`
content.innerHTML += `<p>${textoNumero.includes('7')}</p>`


content.innerHTML += `<p>${'100'.padStart(5, '0')}</p>` //00100
content.innerHTML += `<p>${'100'.padEnd(10, '0')}</p>` //00100






content.innerHTML += "<h3>Null e Undefined</h3>";

let texto = undefined
content.innerHTML += `<p>${texto}</p>`;
texto = "Texto"
content.innerHTML += `<p>${texto}</p>`;
texto = null
content.innerHTML += `<p>${texto}</p>`;

// texto = undefined


content.innerHTML += "<h3>Number</h3>";

// Number

let numInteger = 8765.987
content.innerHTML += `<p>1 ${Number.isInteger(numInteger)}</p>`;
content.innerHTML += `<p>2 ${Number.isInteger(6)}</p>`;
content.innerHTML += `<p>3 ${Number.isInteger(6.6)}</p>`;
content.innerHTML += `<p>4 ${Number.isInteger('6')}</p>`;
content.innerHTML += `<p>5 ${Number.isInteger('6.6')}</p>`;
content.innerHTML += `<p>6 ${Number.isInteger(Infinity)}</p>`;

content.innerHTML += `<p>7 ${Number.parseFloat(numInteger)}</p>`;
content.innerHTML += `<p>8 ${Number.parseInt(numInteger)}</p>`;

content.innerHTML += `<p>9 ${Number.MAX_VALUE}</p>`;
content.innerHTML += `<p>10 ${Number.MIN_VALUE}</p>`;


content.innerHTML += `<p>${Number.isNaN(3)}</p>`;
content.innerHTML += `<p>${Number.isNaN(3*'tres')}</p>`;



let numeroInteiro = 1;
numeroInteiro = 100_999_765; // 100999765

content.innerHTML += `<p>${typeof numeroInteiro}</p>`

let numHexa = 0x7E4
content.innerHTML += `<p>${numHexa}</p>`

numHexa = 0x8E4
content.innerHTML += `<p>${numHexa}</p>`

let numBin = 0b1011110111011011
content.innerHTML += `<p>${numBin}</p>`


// let numInt = 999.5587458569
let numInt = 999
let numStr = numInt.toString();

content.innerHTML += `<p>${numStr}</p>`

let numBinStr = numInt.toString(36);
content.innerHTML += `<p>${numBinStr}</p>`

content.innerHTML += `<p>${numInt.toFixed(6)}</p>`


