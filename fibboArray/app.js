
function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
    let fiboArray = [];    
    //Write your code here:
        
    if(n==1){
        fiboArray = [0];
    }
    else if(n==2){
        fiboArray = [0,1];
    }
    else{
        fiboArray = [0,1]
        for (let i = 2; i<n; i++){
             fiboArray.push(fiboArray[fiboArray.length-2]+fiboArray[fiboArray.length-1]);
        }
        
    
    }
        return fiboArray;
        
    
    //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    
    