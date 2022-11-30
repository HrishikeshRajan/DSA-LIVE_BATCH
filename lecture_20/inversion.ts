function merge(nums:number[], low:number, mid:number, high:number){



/* 

    BLOCK 1
     - Initilize the variable n1 and n2 with space for allocting left and right sub array

*/

let  inversion_count = 0;
let n1 = mid - low + 1;
let n2 = high - mid;


/* 

    BLOCK 2
    - Initilize the left  and right have size of n1 and n2 respectively

*/

let LeftArray = new Array(n1);
let RightArray = new Array(n2);

/* 

    BLOCK 3
    - Copying the elements from original array to left and right array respectively
    - for left array we only need elements from low to n1, which is space alloted for left sub array
    - for right array we need to copy elemenst form mid+1 to end, so we done by mid+1 gives base and 
      increment by one till end

*/
for(let i = 0; i < n1 ; i++){
    LeftArray[i] = nums[low+i];    
}

for(let j = 0; j <n2; j++){
    RightArray[j] = nums[mid+j+1];
}

/* 

    BLOCK 4
    - Here we check the condition for sorting in merge sort, but in this case we add exta case to handle
        the count;
    - The items in left sub array and right sub array will be always sorted. So based on that
       any instant, any element in right sub array become smaller than the corresponding element
       in the left sub array, then all elements fo right sub array is fall under inversion. This principle
       is used here tp calcuate the count of inversion
   

*/
let i =0;
let j = 0;
let k = low;

while((i<n1) && (j < n2)){

    if(LeftArray[i]<= RightArray[j]){
        nums[k] = LeftArray[i];
        i++;
    }else {

        nums[k] = RightArray[j]
        j++;


// Here we calculated the count for the inversion
 inversion_count +=(n1-i);
        }
    k++;
}


//Block 5
// Now copy the rest of the elements to the original array

while(i<n1){
    nums[k] = LeftArray[i]
    i++;
    k++;
}

while(j<n2){
    nums[k] = RightArray[j];
    j++;
    k++;
}


return  inversion_count;
}



function Divide(nums:number[],low:number,high:number):number{

    let inverison = 0;
    if(low<high){
     const mid = low + Math.floor((high-low)/2);
    inverison += Divide(nums,low,mid);
    inverison += Divide(nums,mid+1,high);
    inverison += merge(nums,low,mid,high);
    }
   return inverison;
}



// Driver Code
// const nums:number[] = [3,5,6,9,1,2,7,8]
const nums:number[]= [70,50,60,10,20,30,80,15];
// const nums:number[] = [1,20,6,4,5];
const result = Divide(nums,0,nums.length-1);
console.log(result);



/*

 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% ANALYSIS %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
 
 Time Complexity = T ( n/2) for left an T (n/2) for right and for merge sort n
                 
                    = 2 T (n/2) + n
                 
                    = Theta (n log(n)) + n

 */


export {};