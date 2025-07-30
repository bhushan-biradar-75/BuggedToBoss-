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
console.log(charCounter(charCounterStr));

//Write a function to reverse a given string.


function reverseStr(str){
    let arr = [];
    let reverseStr = '';
    for(i = 0; str[i] !== undefined; i++)
    {
        arr[i] = str[i];
    }
    console.log(arr)
    for(j = arr.length - 1; j >= 0; j--){
        console.log(arr[j])
        reverseStr =  reverseStr + arr[j]; //Appending string
    }
    return reverseStr;
}
let reverseString = "Hello"
console.log(reverseStr(reverseString));

//Write a function to check is palindrom

function isPalindrom(str){
    let arr = [];
    let reverseStr = '';
    for(i = 0; str[i] !== undefined; i++)
    {
        arr[i] = str[i];
    }
    console.log(arr)
    for(j = arr.length - 1; j >= 0; j--){
        console.log(arr[j])
        reverseStr =  reverseStr + arr[j]; 
    }
    return reverseStr === str ? true : false;   
}
let isPalindromstr = "madam"
console.log(isPalindrom(isPalindromstr));

console.log({} + []);

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
    console.log("sen word",word)
    for(j = word.length - 1; j >= 0; j--)
    {
        console.log(word[j])
        reversedsenetnce = reversedsenetnce + word[j];
        // senetnceArray = 
        
    }
    return reversedsenetnce;
}
let sentence = "i am in the interview";
console.log("sen-> func retrun",returnReverseSentence(sentence));