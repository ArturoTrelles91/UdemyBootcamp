alert("Hola: Por favor escribe una sentencia");
let sentenceUser = prompt("Pon tu sentencia aqui:");
alert("Tu sentencia tiene:" + sentenceUser.length + " " + "caracteres");
let maxChart = 10
let avChart = maxChart-(sentenceUser.length);

if(avChart > 0){
  alert("Te quedan:" + avChart + " " + " caracteres Disponibles");
} else {
    alert("Tu sentencia rebasa el numero de caracteres disponible");
    alert(sentenceUser.slice(0,maxChart));
}



