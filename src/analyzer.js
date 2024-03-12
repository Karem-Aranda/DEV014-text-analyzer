const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const numeroDePalabras = text.split(' ').filter((palabra) => {
      if (palabra !== "") {
        return palabra;
      }
    }).length;

    return numeroDePalabras;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const numeroDeCaracteres = text.length;

    return numeroDeCaracteres;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const numeroDeCaracteresSinSimbolos = text.trim().replace(/[^A-Z0-9]+/ig, "").length;

    return numeroDeCaracteresSinSimbolos;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const numeroDeCaracteres = text.length;
    const numeroDePalabras = text.trim().split(/\s+/).length;
    const promedio = numeroDeCaracteres / numeroDePalabras;

    return promedio.toFixed(2);
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const cantidadDeNumeros = text.trim().replace(/[^\d]/g, '').length;

    return cantidadDeNumeros;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const numeros = text.trim().replace(/[^\d]/g, '').split('');

    let total = 0;

    for(let i = 0; i < numeros.length; i++) {
      total = total + parseInt(numeros[i]);
    }

    return total;
  },
};

export default analyzer;
