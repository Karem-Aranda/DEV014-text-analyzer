import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const textArea = document.querySelector('textarea[name="user-imput"]');
console.log(textArea)


//agregar evento - imput al textarea
//que dispare un console.log

document.getElementById("textarea").addEventListener("input", myfunction);

function myfunction(textarea) {
    console.log(textarea.target.value)
}
// let text = document.getElementById("input").value;

