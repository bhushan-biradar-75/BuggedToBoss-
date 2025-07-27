// Recusion
//Calling function it self unitil eligible condition that's called as recursion

//Find sum of n number using recursion


const findSumofnoinArr = (n , index = 0) => {
        if(n.length == index) return 0;
    console.log(`At index ${index}, value: ${n[index]}`);  // 👈 Logging current frame
        sum = n[index] + findSumofnoinArr(n , index + 1);
            console.log(`Returning sum from index ${index}: ${sum}`);
        return sum;
}
let arrno = [1,2,3,4];
console.log(findSumofnoinArr(arrno));

//Because LIFO beacuse of this bheaviour getting this output

// At index 0, value: 1
// At index 1, value: 2
// At index 2, value: 3
// At index 3, value: 4
// Returning sum from index 3: 4
// Returning sum from index 2: 7
// Returning sum from index 1: 9
// Returning sum from index 0: 10


function retrunFactorail(no){
   let fact = 1;
    for(i = 1; i <= no; i++)
    {
     fact = fact * i;
    }
    return fact;
}
let factNo = 5;
console.log((retrunFactorail(factNo)))

//Using Recursion
function retrunFactorailRec(no){
    if (no == 1) return 0;
    return no * retrunFactorailRec(no -1);
}
let factNoRec = 5;
console.log((retrunFactorailRec(factNoRec)))



