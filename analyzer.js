const analyzer = {   // ⁠trim() quita los espacios de los textos
  getWordCount: (text) => {
    const numeroDePalabras = text.split(' ').filter((palabra) => palabra !== "").length; //filter se usa para filtrar con una condicion ya que debe retornar

    return numeroDePalabras;
  }, //split() corta un texto dependiendo lo que pases como parámetros, te regresa una lista
  getCharacterCount: (text) => {
    const numeroDeCaracteres = text.length;

    return numeroDeCaracteres;
  },
  getCharacterCountExcludingSpaces: (text) => {
    const numeroDeCaracteresSinSimbolos = text.trim().replace(/[^A-Z0-9]+/ig, "").length; // Deja unicamente palabras y numeros, y regresa su longitud

    return numeroDeCaracteresSinSimbolos;
  },
  getAverageWordLength: (text) => {    
    const palabras = text.split(" ");
    const longitudDePalabras = palabras.filter((palabra) => palabra !== "").join("").length;
  
    const promedioDeLongitud = longitudDePalabras / palabras.length;

    return parseFloat(promedioDeLongitud.toFixed(2)); //toFixed() para poner cuantos decimales tienes 
  },
  getNumberCount: (text) => {
    const cantidadDeNumeros = text.split(' ').filter(palabra => {
      if (palabra.endsWith('.')) { // Limpiamos las palabras en caso de que terminen en punto
        palabra = palabra.replace(".", ""); 
      }
      return !isNaN(palabra) && palabra !== "";  // Evaluamos si la palabra es un numero con isNotANumber
    }).length;

    return cantidadDeNumeros;
  },
  getNumberSum: (text) => {
    let suma = 0;
  
    const numeros = text.split(' ').filter(palabra => {
      if (palabra.endsWith('.')) { // Limpiamos las palabras en caso de que terminen en punto
        palabra = palabra.replace(".", "");
      }
      return !isNaN(palabra) && palabra !== ""; // Evaluamos si la palabra es un numero con isNotANumber
    });

    for (let i = 0; i < numeros.length; i++) { // Sumamos la lista de numeros
      suma += parseFloat(numeros[i]);
    } //parseFloat()  para convertir un número, o un string, a números con decimales

    return suma;
  },
};

export default analyzer;
