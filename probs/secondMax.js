//find the second largest number in an array
//given an array print the second largest number in it
//input = [1, 23, 54, 65, 7, 4, 5 , 89 ]
//output = 65



function secondLargest(arr){
    arr.sort((a, b) => b-a)
    const newArr = Array.from(new Set(arr))

    return newArr[1]
}


const arr = [1, 23, 54, 65, 7, 4, 5 , 89, 89, 1]
console.log(secondLargest(arr))
