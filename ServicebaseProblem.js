// Reverse a string without using built-in methods

function returnReverseString(str){
    let input = '';
    for(let i = str.length - 1; i >= 1; i--)
    {
        input = input + str[i];
    }
    return input;
}
let returnReverseStringInput = 'Smith'
console.log(returnReverseString(returnReverseStringInput))

//Check if a string is a palindrome.

function ispalindrome(input) {
    let copyofInput = input;
    let reverseStr = '';

    for(let i = input.length - 1; i >= 0; i--)
    {
        reverseStr = reverseStr + input[i];
    }
 
    if(reverseStr === copyofInput)
    {
        return true;
    } else {
        return false;
    }
}
let ispalindromeIp = "MAM"
console.log(ispalindrome(ispalindromeIp));

//Find the factorial of a number (iterative + recursive).

//Find duplicates in an array.

function duplicateNo(input){
    let duplicateArr = [];
    let hasMap = [];
    let findOriginalArr = [];
    for(let i = 0; i < input.length; i++){
        let num = input[i];
        if(hasMap[num])
        {
            duplicateArr.push(num);
        } else {
            hasMap[num] = true;
            findOriginalArr += num;
        }
    }
    return findOriginalArr;
}
let arrduplicateNo = [1,2,1,5,7,8,2,4,5];
console.log(duplicateNo(arrduplicateNo));

function findDuplicateStr(input) {
    let counter = {};
    for(let i = 0; i < input.length; i++)
    {
        if(counter[input[i]] == undefined)
        {
            counter[input[i]] = 1  
        } else {
            counter[input[i]] = counter[input[i]] + 1;
        }
    }
    return counter;
}
let findDuplicateStrArr = "aabcc";
console.log(findDuplicateStr(findDuplicateStrArr));

//find minimum & maximum no in array;

function maxNo(input){
    let max = input[0];
    for(let i = 0; i < input.length; i++)
    {
        if(input[i] < max)
        {
            max = input[i];
        }
    }
    return max;
}
let maxNoArr = [2,6,5]
console.log(maxNo(maxNoArr))

// Count the frequency of characters in a string.
function stringCounter(input){
    let counter = {};

    for(let i = 0; i < input.length; i++)
    {
        let ch = input[i];
        if(counter[ch] === undefined)
        {
            counter[ch] = 1
        } else {
            counter[ch] = counter[ch] + 1;
        }
    }
    return counter;

}
let str = "aabbfgt"
console.log(stringCounter(str));