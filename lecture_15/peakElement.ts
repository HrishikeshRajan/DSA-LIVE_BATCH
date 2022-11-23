/*

   * What exactly is a peak element? , A peak element is one that is greater than its preceding and following element.
   
   * In this case, we hard coded the left and right ends and then performed a modified binary search in between.
   
   * Here, we'll compare the middle value to its next element until we get to the start less than end point.
   


*/


const findPeakElement = (nums: number[]): number => {                   // --> O (1)

   let start: number = 0;                                               // --> O (1)
   let end: number = nums.length - 1;                                   // --> O (1)
   if (nums[0] > nums[1]) {                                             // --> O (1)
      return nums[0]                                                    // --> O (1)
   }
   if (nums[-1] > nums[-2]) {                                           // --> O (1)
      return nums[-1];                                                  // --> O (1)
   }

   while (start < end) {                                                 //--> O ( log (n))
      let mid: number = Math.floor(start + (end - start) / 2);           // --> O (1)
      let after: number = mid + 1;                                       // --> O (1)
      if (nums[mid] > nums[after]) {                                     // --> O (1)
         end = mid;                                                      // --> O (1)
      } else {                                                    
         start = mid + 1;                                                // --> O (1)
      }
   }
   return end;                                                           // --> O (1)
}

const nums = [1, 2, 10, 3, 1, 4, 4]
const result = findPeakElement(nums);
console.log(result);

/*

Time Compexity = O ( log (n)), Since we are using  modified binary search approach
Space Compexity = O (1 ) , no extra spaces are used other than variables

*/