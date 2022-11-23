
/*

    * Two variables, element and count, are declared here.

    * We compare the count variable with zero for each iteration.

    * If they match, we update the element variable with the current element 
      in the array that the i point's at.

    * If the element in the current array and the element assigned to the variable are equal,\
      we raise the count variable.

    * If not, we reduce it by 1 instead. Finally, we have a number that is still present in the element variable.

 */
 const getMajorityElem = (nums: number[]): number => {

    //Since we will overwrite the existing value, the element variable is set to -1.

    let element: number = -1;                                // --> O ( 1 )
    let count: number = 0;                                   // --> O ( 1 )

    for (let i: number = 0; i < nums.length; i++) {          // --> O ( n )

        if (count === 0) {                                   // --> O ( 1 )

            element = nums[i]                                // --> O ( 1 )
        }
        if (element === nums[i]) {                           // --> O ( 1 )

            count++;                                         // --> O ( 1 )

        } else {
            count--;                                         // --> O ( 1 )
        }
    }
    return element;                                          // --> O ( 1 )
}

/*

    * The element that we have obtained is then passed to this validate function.

    * To be the majority element, the element must be greater than half the total number of elements.
 
    * Assume we have [1,1,2,3,3,3,4,4,4,4]. What will be the majority element in this case?
    
    * The answer is false because we have four fours but the array length is 8, 8/2 = 4, 4 not greater than 4
    
    * If the above array looks like [1,1,2,3,3,3,4,4,4,4,4,4], the answer is 4, because count of 4 is 5 greater than count of 4.

*/
const validate = (nums: number[], element: number): boolean => {

    let count: number = 0;                                            // --> O ( 1 )    

    for (let i: number = 0; i < nums.length; i++) {                   // --> O ( n )

        if (nums[i] === element) {                                    // --> O ( 1 )

            count++;                                                  // --> O ( 1 )
        }
    }

    //checking the element is greater than the half of the array
    let result = Math.floor(nums.length / 2);                         // --> O ( 1 )

    if (count > result) {                                             // --> O ( 1 ) 

        return true;                                                  // --> O ( 1 )
    }

    return false;                                                     // --> O ( 1 )
}






//General function act that provides values to both functions
const findMajorityElem = (numd: number[]): void => {
    const candidate = getMajorityElem(nums);
    const response = validate(nums, candidate);
    if (response) {
        console.log(`${candidate} is the majority element`)
    } else {
        console.log('No majority element found');

    }
}


const nums: number[] = [2, 3, 7, 3, 4,4,4,4,4]; 
findMajorityElem(nums);


/*

   Time Complexity = O ( n ), Because we only have one loop and iterate element by element until we reach the end of the array

   Space Complexity = O ( 1 ), Since we are using no extra array

*/
export { }