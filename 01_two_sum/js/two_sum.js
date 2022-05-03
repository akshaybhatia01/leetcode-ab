/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
*/

// Solution 1

let twoSum = (nums, target)=>{

    for(let i = 0; i < nums.length; i++){
        let num_i = nums[i]

        for(let a = 0; a < nums.length; a++ ){
            let num_a = nums[a];
            let sum = num_i + num_a; 
            if (sum === target) {
                return [i, a];
                break; 
            }
            
        }
    };

};

// Solution 2

let solution = twoSum([2, 7, 11, 15], 17);
console.log(solution, 'solution')


let nums = [2,11,7,15];
let target = 13;
let numLength = nums.length;

let twoSum =  (nums, target)=>{

    let map = {};

    for(i=0; i< numLength; i++){
        let value = nums[i]; //11
        let complement = target - value;  //2


        if(map[complement] !== undefined){ //if complement exists
            console.log([map[complement], i]) 
            return [map[complement], i]
        }
        else{
            map[value] = i;
        }

    }

}

twoSum(nums, target);
