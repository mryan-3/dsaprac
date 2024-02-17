//find the second largest number in an array
//given an array print the second largest number in it
//input = [1, 23, 54, 65, 7, 4, 5 , 89 ]
//output = 65



//function secondLargest(arr){
    //arr.sort((a, b) => b-a) //has O(n log n) time complexity so its not the best
    //const newArr = Array.from(new Set(arr))

    //return newArr[1]
//}


//const arr = [1, 23, 54, 65, 7, 4, 5 , 89, 89, 1]
//console.log(secondLargest(arr))


// Optimised approach
//big O of O(n)
function secondLargestOp(arr){
    //[1, 4, 6, 8, 9, 2, 5, 7]
    //secondLargest = -1
    //largest = 1
    //secondLargest = -1
    //largest = 4
    //secondLargest = 4
    //largest = 6
    //secondLargest = 6
    //largest = 8
    //secondLargest = 8
    //largest = 9
    //secondLargest = 8
    //
    let largest = -1
    let secondLargest = -1
    for (let i = 0; i < arr.length ; i++){
        if (arr[i] > largest){
            secondLargest = largest
            largest = arr[i]
        } else if(arr[i] != largest && arr[i] > secondLargest){
            secondLargest = arr[i]
        }
    }

    return secondLargest
}

const arr = [1, 4, 6, 8, 9, 2, 5, 7]
console.log(secondLargestOp(arr))

