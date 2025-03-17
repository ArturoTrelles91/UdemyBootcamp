let guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];


let guestName = prompt("Cual es tu nombre?:");
let readList = guestList.includes(guestName);
                       
function callList(abc){
 
 if(readList){
     alert("Welcome "+guestName);
 }
    else{
        alert("You was not invited, sorry");
    }
    
}

callList(readList)