function isLeap(year) {
    /**************Don't change the code above****************/    
     let yeart = 1998;
        
     if(yeart%4 !== 0){
        // console.log(year);
         alert("Not leap year");
     }
    
     else if(yeart%100 === 0 && yeart%400 !==0){
          //console.log(year);
         alert("Not leap year.");
     }
     else{
          //console.log(year);
          alert("Leap year.");
     }
       
    
    }
    
    isLeap();