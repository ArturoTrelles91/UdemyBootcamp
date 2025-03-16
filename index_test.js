function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        
        //Write your code here.
        
    let myAge = prompt("How old are you: Introduce your age in years as an integer");
    
    
    alert('You have '+days(myAge)+' days, '+weeks(myAge)+' weeks, and '+months(myAge)+' months left.');  
    
    function days(a){
        let days = a*52*7;
        return days;
    }
        
    function weeks(a){
        let weeks = a*52;
        return weeks;
    }
        
    function months(a){
        let months = a*12;
        return months;
    }    
    /*************Don't change the code below**********/
    }
    
    