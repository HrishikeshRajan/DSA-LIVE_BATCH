function closest(nums,target){

    let closest_sum =100000000;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++){

        let pointer1 = i+1;
        let pointer2 = nums.length-1;

        while(pointer1<pointer2){

            
            
            let sum = nums[i]+nums[pointer1]+nums[pointer2];
                  closest_sum = sum;

            if(Math.abs(target -sum) < Math.abs(target - closest_sum) ){
            
            }
            console.log(closest_sum , 'sum > target :', sum>target)
            if(sum > target){
                pointer2--;
            }
            else{
                pointer1++
            }
        }

    }

    return closest_sum;

}

nums = [-1, 2, 1, -4];
const result = closest(nums,1);
console.log(result)


2
