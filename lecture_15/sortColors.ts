
/*
   * To sort the array, we use three pointers.

   * We use three variables, left, current, and right, with values of 0, 0, and length-1, respectively.

   * The logic we used here is that if we find any zeros while iterating through the array, 
     we will swap them with the leftmost places, because we know that 0 will be the leftmost
     element in a sorted array.

   * Similarly, if we get any 2, we will swap it with the right most element,
    because 2 is the largest element in the array.


   * We don't need to consider the 1 here because it will already be sorted.

   * One limitation is that as the number of colours increases, we must increase the number of pointers,
     but this is a question-specific answer, not a general solution suitable for all cases. 

 */

const  sortColors = (colors:number[]):number[] => {
   
    let left:number = 0;                                                      // --> O (1)
    let current: number = 0;                                                  // --> O (1)
    let right: number= colors.length-1;                                       // --> O (1)

    while( current<=right ){                                                  // --> O (n)
   
        //In this case, we add one to the left and current pointers.
        if( colors[current] === 0 ){                                          // --> O (1)
            [colors[left],colors[current]] = [colors[current],colors[left]];  // --> O (1)
            left++;                                                           // --> O (1)
            current++;                                                        // --> O (1)
        }
     /*
        Why have we not increased the current in this block?
        Because the swapped value may not be the smallest value, we must double-check it.
       
     */   
        else if( colors[current] === 2 ){                                      // --> O (1)
            [colors[right],colors[current]] = [colors[current],colors[right]]  // --> O (1)
            right--;                                                           // --> O (1)
        }else{
            current++;                                                         // --> O (1)
        }
    }
    return colors;                                                             // --> O (1)
    
}


const colors: number[] = [2,0,1];
const result: number[] = sortColors(colors);
console.log(result);

//Time Complexity = O ( n ), Because we only use one loop and it iterates until the end of the array
//Space Complexity = O (1), No extra array is used.


export {}