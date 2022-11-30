/*

 * To handle the negative cases, we add a new condition:
    - example :  2 ^ -2
        - This can be written as (1/2)^2 = 1/4 = 0.25
    - This logic is used in this case.


*/ 

function power(a:number, x:number){

    if(x==0){
        return 1;
    }
    if(x==1){
        return a;
    }

// Converting a decimal to a fraction and inverting the power sign
    if(x<0){
        x = -x;
        a = 1/a;
    }


    let mid: number = Math.floor(x/2);

    let b:number = power(a,mid);
    
    //We calculate the right side of the tree each time we multiply the result. Because they both return the same values
       
    let result:number = b*b;
           
    if(x%2 ==0){
        return result;
    }else{
        return result*b;
    }


}

/*

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% Driver Code %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


*/

const result:number = power(2,-2);
console.log(result);

/*

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% Time Complexity %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

    The recurrence relation can be written as = T (n) = T (n/2) + c;
    Because we are calling one recursive function with half of its previous value.

    Talkig about the space complexity 
    - for Skewed  Recursive Tree
        Stack Space = O ( n ) -> Worst Case
    
    - for  Complete Recursive Tree
        Stack Space = O ( log (n)) -> Best and Average Case

*/