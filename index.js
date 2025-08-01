// =============================================================================
// Array Level 0

// Leetcode URl - https://leetcode.com/problems/remove-element/description/

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores)

function removeElement(nums) {
  let val = 2;
  let x = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[x] = nums[i];
      x = x + 1;
    }
  }
  return x;
}
let inputremoveElement = [0, 1, 2, 2, 3, 0, 4, 2];
let resultremoveElement = removeElement(inputremoveElement);
console.log("resultremoveElement", resultremoveElement);

// ====================================================================================================

// 26. Remove duplicates from sorted array
// Leetcode URL - https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

function removeDuplicateElement(nums) {
  let x = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i + 1] > nums[i]) {
      nums[x] = nums[i];
      x = x + 1;
    }
  }
  return x + 1;
}
let inputremoveDuplicateElement = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let resultremoveDuplicateElement = removeDuplicateElement(inputremoveElement);
console.log("resultremoveDuplicateElement", resultremoveDuplicateElement);

//Buy & sell stock
//Leetcode No - 121


const retunBuySellProfit = (prices) => {
  console.log(prices)
  let min = prices[0];
  let maxProfit = 0;
  for(i = 0; i < prices.length; i++)
  {
    if(prices[i] - min > maxProfit)
    {
      maxProfit = prices[i];
    }
    if(prices[i] < min)
      min = prices[i];
  }
  return maxProfit;
}
const arr = [7,6,4,3,1]
console.log(retunBuySellProfit(arr));

//Find max consecutive one 

const retrunMaxConsecutive = (input) => {
  let currentCount = 0;
  let maxCount = 0;
  for(i = 0; i < input.length; i++)
  {
    if(input[i] == 1)
    {
      currentCount++;
      
    if(currentCount > maxCount)
    {
      maxCount = currentCount;
    }
    } else {
      currentCount = 0;
    }

  }
  return maxCount;
}
let inputretrunMaxConsecutive = [0,1,1,1,0,1,1,0,1,1,1,1,1]
console.log(retrunMaxConsecutive(inputretrunMaxConsecutive));

//268 - Find the missing no

const retrunMissingNo = (input) => {
  let n = input.length;
  let totalSum = n * (n + 1) / 2;
  let sum = 0;

  for(i = 0; i < input.length; i++)
  {
    sum = input[i] + sum;
  }

  return totalSum - sum;
}
let inputretrunMissingNo1 = [3,0,1]
let inputretrunMissingNo2 = [0,2]
console.log(retrunMissingNo(inputretrunMissingNo2));

// Find singal no in array

const returnSingalNo = (input) => {
  //Two ways of solving this problem first one with XOR with o(n) without space complexity
  let xor = 0;
  for(i = 0; i < input.length; i++)
  {
     xor = input[i] ^ xor;
  } 
  return xor;
}
let inputreturnSingalNo = [2,2,1,3,3];
console.log(returnSingalNo(inputreturnSingalNo));