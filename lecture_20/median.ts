
function merge(nums:Array<number>, start:number, mid:number, end:number){

    /* 
       Block 1

       Initializing the size of the sub arrays
       
    */
        let n1 = mid-start+1;
        let n2 = end-mid;
    
    // Block 2
        const left = new Array(n1);
        const right = new Array(n2);
    
    /*
      Block 3
    
     Copy the array items to the newly created array, with left = [start......mid], right = [mid+1.. .end]
   
    */

    for (let i = 0; i < n1; i++) {
        
        left[i] = nums[start+i];
        
    }
    for (let j = 0; j < n2; j++) {
        
        right[j] = nums[mid+1+j];
        
    }
    
    // Block 4
    // Here, we only copy the small elements from both arrays to the original array.
    let i = 0;
    let j =0;
    let k = start;
     while(i < n1 && j <n2){
    
         if(left[i]<=right[j]){
            
            nums[k] = left[i];
            i++;
    
         }else{
            nums[k] = right[j];
            j++;
         }
         k++;
    
     }
    
    
    // Block 5
     /*
     
     Copying the rest of the element if exist
     
     */
    
    while(i<n1){
        nums[k] = left[i];
        i++;
        k++ 
    }
    
    while(j<n2){
        nums[k] = right[j];
        j++;
        k++;
    }
    
    
    }
    
       
function divideAndConquer(nums:Array<number>,start:number,end:number):(Array<number>){
    
         if(start<end){
            let mid = start + Math.floor((end-start)/2);
            divideAndConquer(nums,start,mid);
            divideAndConquer(nums,mid+1,end);
            merge(nums,start,mid,end);
    
         }
   return nums; 
    }
    
/*
    
    * In this case, we concatenate two arrays to create a single array.
    * The median is then calculated based on the length of the array.
    * If the array length is odd, we compute and return the middle value.
    * Otherwise, we add the middle value and its previous value mid-1, average them, and return the value.

*/
    function passArray(nums1:number[],nums2:number[],start:number){

        let nums:number[] = nums1.concat(nums2);
        let arr:number[] = divideAndConquer(nums,start,nums.length-1);
        let mid = start + Math.floor( (arr.length-start)/2);   
        if((arr.length % 2 ) === 0){
           return ((arr[mid]+arr[mid-1])/2)
        }else{
           return arr[mid]
        }
    }
    

    // const nums1:number[] = [1,4,5];
    // const nums2:number[] = [2,3];

    // Driver Code
    const nums1 = [1,2,3,4];
    const nums2 = [5,6];
    const result = passArray(nums1,nums2,0);
    console.log(result);
    

/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% Time Complexity %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */
/*

    * It's essentially a merger sort with two additional steps concatenated and calculated as 
    * Time Complexit of merge sort in worst case is = O (n log(n))
    * Time complexity of concat process = O ( n )
    * Time complexity of median calculation = O (1)
    * Total Time Complexity = O (nlog(n))+ O (n) + c
    * 

*/