//Write a function that counts the number of characters in a string manually.

//Input: "hello" → Output: 5

function charCounter(str){
    let arr = [];
    for(i = 0; str[i] !== undefined; i++)
    {
        arr[i] = str[i];
    }
    return arr.length;
}
let charCounterStr = "Hello"
// console.log(charCounter(charCounterStr));

//Write a function to reverse a given string.


function reverseStr(str){
    let arr = [];
    let reverseStr = '';
    for(i = 0; str[i] !== undefined; i++)
    {
        arr[i] = str[i];
    }
    // console.log(arr)
    for(j = arr.length - 1; j >= 0; j--){
        // console.log(arr[j])
        reverseStr =  reverseStr + arr[j]; //Appending string
    }
    return reverseStr;
}
let reverseString = "Hello"
// console.log(reverseStr(reverseString));

//Write a function to check is palindrom

function isPalindrom(str){
    let arr = [];
    let reverseStr = '';
    for(i = 0; str[i] !== undefined; i++)
    {
        arr[i] = str[i];
    }
    // console.log(arr)
    for(j = arr.length - 1; j >= 0; j--){
        console.log(arr[j])
        reverseStr =  reverseStr + arr[j]; 
    }
    return reverseStr === str ? true : false;   
}
let isPalindromstr = "madam"
// console.log(isPalindrom(isPalindromstr));

// console.log({} + []);

//Reverse the sentence

function returnReverseSentence(word){
    // let senetnceArray = [];
    // let word = '';
    let reversedsenetnce = '';
    // let spiltSenetence = sentence.split(' ').reverse().join(', ');
    // console.log(spiltSenetence);
    // for(i = 0; sentence[i] !== undefined; i++)
    // {
    //     console.log("sen->",sentence[i])
    //     if(sentence[i] == '')
    //     {
    //         console.log("senw ord",word)
    //         reversedsenetnce = reversedsenetnce + word;
    //         word = '';
    //     } else {
    //         word = word + sentence[i];
    //     }
    //     // senetnceArray[i] = sentence[i];
    // }
    // console.log("sen word",word)
    for(j = word.length - 1; j >= 0; j--)
    {
        // console.log(word[j])
        reversedsenetnce = reversedsenetnce + word[j];
        // senetnceArray = 
    }
    return reversedsenetnce;
}
let sentence = "i am in the interview";
console.log("sen-> func retrun",returnReverseSentence(sentence));

//Given a string, find the first character that does not repeat anywhere in the string.

// "aabccdeff" → Output: 'b'

function firstNonRepeatingChar(input) {
    let countObject = {}
    for(let i = 0; i < input.length; i++)
        {
       let char = input[i];
       if(countObject[char] !== undefined){
        countObject[char]++;
       } else {
        countObject[char] = 1;
       }
    }
   
    for(let i = 0; i < input.length; i++)
    {
        let ch = input[i]
        if(countObject[ch] === 1)
        {
            return ch;
        }
    }
    return -1;
}
let inputfirstNonRepeatingChar = "aabccdeff";
console.log(firstNonRepeatingChar(inputfirstNonRepeatingChar));

//Given a string, find the whole character key & value count that does not repeat anywhere in the string.

// "aabccdeff" → Output: {b : 1, d : 1, e : 1}

function uniqueKeyCount(input){
    let uniqueKeyobj = {};

    for(let i = 0; i < input.length; i++)
    {
        let char = input[i];
        if(uniqueKeyobj[char] !== undefined)
        {
        uniqueKeyobj[char] = uniqueKeyobj[char] + 1;
        } else {
        uniqueKeyobj[char] = 1;
        }
    }

    let uniqueKeyobjwithcount = {};

    for(let j = 0; j < input.length; j++)
    {
        let char = input[j];
        //uniqueKeyobj finding key thos who have 1 count;
        if(uniqueKeyobj[char] === 1)
        {
            uniqueKeyobjwithcount[char] = uniqueKeyobj[char];
        }
    }
    return uniqueKeyobjwithcount;
}
let inputuniqueKeyCount = "aabccdeff";
console.log("uniqueKeyCount--->",uniqueKeyCount(inputuniqueKeyCount));

// 🔤 Problem: Check if Two Strings Are Anagrams
// 🧾 Description:

// Write a function that takes two strings and returns true if they are anagrams of each other, and false otherwise.

// 🔹 An anagram is when two strings have the same characters, in the same quantity, but possibly in a different order.
// 🔹 Ignore spaces, case sensitivity is optional (I'll specify below).

// isAnagram("listen", "silent");     // true
// isAnagram("hello", "bello");       // false
// isAnagram("School MASTER", "The ClassROOM"); // true (if ignoring case and spaces)

function isAnagram(inputFirst, inputSecond){
    if(inputFirst.length !== inputSecond.length){
        return false;
    }
    let firstFrqObj = {};
    
    for(let i = 0; i < inputFirst.length; i++)
    {
        let char = inputFirst[i];
         if(firstFrqObj[char] === undefined)
            {
                firstFrqObj[char] = 1;
            } else {
                firstFrqObj[char]++;
            }
    }

    let secondFrqObj = {};

    for(let j = 0; j < inputSecond.length; j++)
    {
        let char = inputSecond[j];
        if(secondFrqObj[char] === undefined)
            {
                secondFrqObj[char] = 1;
            } else {
                secondFrqObj[char]++;
            }
    }

    console.log("first---->",firstFrqObj)
    console.log("second--->",secondFrqObj)

    for(key in firstFrqObj)
    {
        if(firstFrqObj[key] !== secondFrqObj[key])
        {
            return false;
        }
    }
    return true;
}
let inputFirst = "test"
let inputSecond = "ttew"
console.log(isAnagram(inputFirst, inputSecond));

