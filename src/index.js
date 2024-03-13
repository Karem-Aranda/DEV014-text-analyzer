import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const contadorPalabras = document.querySelector('li[data-testid="word-count"]');
const contadorCaracteres = document.querySelector('li[data-testid="character-count"]');
const contadorSinEspacios = document.querySelector('li[data-testid="character-no-spaces-count"]');
const contadorNumeros = document.querySelector('li[data-testid="number-count"]');
const contadorSumaDeNumeros = document.querySelector('li[data-testid="number-sum"]');
const contadorPromedioDeLargoDePalabra = document.querySelector('li[data-testid="word-length-average"]');
const textArea = document.querySelector('textarea[name="user-input"]');

//Selecciona el elemento de html que tiene ese id y le asigna una variable
const botonLimpiar = document.getElementById("reset-button");

textArea.addEventListener("input", actualizarContadores);
botonLimpiar.addEventListener("click", limpiarTexto);

function limpiarTexto() {
  textArea.value = "";
}

function actualizarContadores(textarea) {
  const texto = textarea.target.value;

  const numeroDePalabras = analyzer.getWordCount(texto);
  const caracteres = analyzer.getCharacterCount(texto);
  const caracteresSinEspacios = analyzer.getCharacterCountExcludingSpaces(texto);
  const cantidadDeNumeros = analyzer.getNumberCount(texto);
  const sumaDeNumeros = analyzer.getNumberSum(texto);
  const promedioDeLargoDePalabra = analyzer.getAverageWordLength(texto);

  contadorPalabras.innerHTML = "Palabras: " + numeroDePalabras;
  contadorCaracteres.innerHTML = "Caracteres: " + caracteres;
  contadorSinEspacios.innerHTML = "Caracteres sin espacios: " + caracteresSinEspacios;
  contadorNumeros.innerHTML = "Numeros: " + cantidadDeNumeros;
  contadorSumaDeNumeros.innerHTML = "Suma de números: " + sumaDeNumeros;
  contadorPromedioDeLargoDePalabra.innerHTML = "Promedio Longitud De Palabra: " + promedioDeLargoDePalabra;
}





 