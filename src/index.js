import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

let contadorPalabras = document.querySelector('li[data-testid="word-count"]');
let contadorCaracteres = document.querySelector('li[data-testid="character-count"]');
let contadorSinEspacios = document.querySelector('li[data-testid="character-no-spaces-count"]');
let contadorNumeros = document.querySelector('li[data-testid="number-count"]');
let contadorSumaDeNumeros = document.querySelector('li[data-testid="number-sum"]');
let contadorPromedioDeLargoDePalabra = document.querySelector('li[data-testid="word-length-average"]');
const textArea = document.querySelector('textarea[name="user-input"]');

let botonLimpiar = document.getElementById("limpiarTexto");

textArea.addEventListener("input", actualizarContadores);
botonLimpiar.addEventListener("click", limpiarTexto);

function limpiarTexto() {
    textArea.value = "";
}

function actualizarContadores(textarea) {
    let texto = textarea.target.value;

    let numeroDePalabras = analyzer.getWordCount(texto);
    let caracteres = analyzer.getCharacterCount(texto);
    let caracteresSinEspacios = analyzer.getCharacterCountExcludingSpaces(texto);
    let cantidadDeNumeros = analyzer.getNumberCount(texto);
    let sumaDeNumeros = analyzer.getNumberSum(texto);
    let promedioDeLargoDePalabra = analyzer.getAverageWordLength(texto);

    contadorPalabras.innerHTML = "Palabras: " + numeroDePalabras;
    contadorCaracteres.innerHTML = "Caracteres: " + caracteres;
    contadorSinEspacios.innerHTML = "Caracteres sin espacios: " + caracteresSinEspacios;
    contadorNumeros.innerHTML = "Numeros: " + cantidadDeNumeros;
    contadorSumaDeNumeros.innerHTML = "Suma de números: " + sumaDeNumeros;
    contadorPromedioDeLargoDePalabra.innerHTML = "Promedio Longitud De Palabra: " + promedioDeLargoDePalabra;
}





 