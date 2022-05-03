/* 
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
 */



let x = -121;

let isPalindrome = function (x){

    let arr = x.toString(); //121 as a string
    console.log(arr)
    let b = arr.split(""); //[1,2,1]
    console.log(b);

    let a = b.reverse(); //[1,2,1]
    console.log(a)

    let c = a.join('');
    console.log(c)

    if(arr === c ){
        console.log("true")
        return true
    }
    else{
        console.log("false")
        return false
    }



}

isPalindrome(x);