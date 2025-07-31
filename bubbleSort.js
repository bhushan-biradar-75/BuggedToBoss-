// Bubble Sort is a simple sorting algorithm that works by repeatedly stepping through the list, comparing adjacent elements and swapping them if they are in the wrong order

function sortAssArray(arr){
    let n = arr.length;
    for(let i = 0; i < n - 1; i++)
        {
            for(let j = 0; j < n - i; j++)
                {
                    if(arr[j] > arr[j + 1]){
                        let temp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = temp;
                    }
        }
    }
    return arr;
}
let inputsortAssArray = [5,2,4,1];
console.log("sortAssArray---->",sortAssArray(inputsortAssArray))