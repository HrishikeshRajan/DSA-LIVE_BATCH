function divide(dividen:number,divisor:number){

    //This convert negative to positive values
    let divid = Math.abs(dividen);
    let div = Math.abs(divisor);
    let result = 0;

    while(divid >= div){
        let shift = 0;
        while(divid >= (div<< shift)){
            shift +=1;
            result += (1<<(shift-1));
            divid -= div << (shift-1);
        }
      
    }
    //Here we handle the edge cases for negative cases and divisor become less than zero
    if((dividen <0 && divisor >= 0) || (divisor < 0 && dividen >=0)){

        result = -result;
    }
return Math.min(2147283647,Math.max(-2147283648,result));

}


const result = divide(10,3);
console.log(result);


/*

Time Complexity = O (log(n))
 
*/ 