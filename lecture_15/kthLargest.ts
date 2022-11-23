/*

    * This partition function returns the pivot element's current position.

*/ 




function partition(nums:number[], low:number, high:number){

// Pivot is assigned with a the starting index value
    let pivot:number = nums[low];
    let i:number = low;

/* 
    * Here, j iterates through the array elements and compares their values to the pivot,
      if the j is small, the value is swapped with the i+1 index positioned value.
*/
    for(let j = i+1; j <=high; j++){
        if(nums[j]<=pivot){
            i++;
            [ nums[i], nums[j]] = [nums[j], nums[i]]    
        }
    }

  // This is the step where we swap the pivot element to its original position 'ith' indexed element.

    [nums[low], nums[i]] = [nums[i], nums[low]] 


    return i;
}


/*

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% STEPS %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

 1) Locate the Pivot index 
    - The pivot index can be computed by locating the current position of the I pointer.
   
 2) Determine which section the value of Key belongs to.
    - In order to find the kth largest value, we must reverse the logic that led to the kth smallest.
     We subtracted 1 from the key in the kth smallest. In this section, we subtract key from the array length itself, 
     so that if the array length is 8 and the index is 7,then numslength -key = 8 -1 = 7, 
     and we now compare the pivot value index with this index.
 

 3) We continue to compare Key-1 to I until it matches.

 4) If there are matches, we return the key-1 indexed value, which is the kth smallest position.




!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! NOTE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

 *  We took num.length - Key, because Key is the position and arrays begin at zero, so we needed to subtract one.
    in order to find the equivalent value in the array

 * One thing to keep in mind is that we do not sort the entire array in order to get the index. 
   However, we sort the position of the key by section. But how is this even possible? 
   Because the section is not based on the array's middle value, as in binary search, 
   but on the pivot, the left section is full of values less than the pivot and
   the right section is full of values greater than the pivot.
   The pivot's position may alternate between the left and right sides.
   As a result, sorting is limited to the region where the position can be found.

 * When the array is partially sorted, the main advantage of quicksort is that we can sort it in O (n log (n)).

*/

function findSmallest(nums:number[],low:number,high:number,key:number){
    if(low===high && high === (key-1))return nums[high];

  if(low<high){
    const currentPointer = partition(nums,low,high);
    let requiredIndex =  nums.length-key;
// Comparing the values
 if(currentPointer === requiredIndex){
        return nums[currentPointer];
    }    
//It goes either left or right here, not both.
    if(currentPointer < requiredIndex){

     return findSmallest(nums,currentPointer+1,high,key);   
    }else{
    return  findSmallest(nums,low,currentPointer-1,key)
    }
  }
  return nums[nums.length-1];
}



const num:number[] = [50,40,70,10,30,90,45,67,79];
const result:number = findSmallest(num,0,num.length-1,2);
console.log(result);
/*    

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% TIME COMPLEXITY %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

    Time Complexity of Qucik Sort in best case and Average case  = O ( n log ( n )).
    However, we are not using quick sort here, but rather Quick Select.

    What exactly is the difference between Quick Sort and Quick Select?

    In Quick Sort, we traverse both sides of the array. In quick select,
    we only go through one section of the array.
 
     Recurrence Relation will be T (n) = T (n/2) + c
                                  = n
    The best case time complexity = O ( n )
    Space COmplexity  = Q (1)



*/ 
