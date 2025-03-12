
alert("Hola: Por favor escribe tu nombre con la primera letra en minusculas");

let nameUser = prompt("Cual es tu nombre?:");

if (nameUser !== null && nameUser.trim() !== "") {
     
 let nameLength = nameUser.length;
 let nameSlicedLetter = nameUser.slice(0,1);

 if( nameSlicedLetter != nameSlicedLetter.toUpperCase() ){
     alert("La primera letra esta en minusculas:" + " " + nameSlicedLetter);
     alert("Tu nombre es:" + " " + nameSlicedLetter.toUpperCase()+nameUser.slice(1,nameUser.length));
 }
    else{
         let restOfName = nameUser.slice(1,nameUser.length)
         alert("Tu nombre es:" + " " + nameSlicedLetter.toUpperCase()+ restOfName.toLowerCase() );
    }

}
else {
    alert("No introdujiste un nombre");
}