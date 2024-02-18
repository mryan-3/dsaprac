//Remove duplicates from a sorted Array
//given an integer array of values sorted in non-decreasing order remove the duplicated elements in-place such that each unique element
//appears only once  and the order should remain the same
//the return value is the number of unique elements in nums
//input = [1, 1 ,2] >>>> output  = 2

//time complexity = O(n)
function removeDuplicates(nums){
    for(let i = 0; i < nums.length - 1; i++){
        if(nums[i] === nums[i+1]){
            nums.splice(i+1, 1)
            i--
        }
    }
    return nums.length
}

console.log(removeDuplicates([1, 1 ,1, 2, 3, 4, 5, 5, 6, 7 ,8 ,9 ,10]))

//Without using built in methods
//[1, 2, 2 ,3 ,4 ,5 ,5, 6]
//i = 0    j=1
//
function removeDuplicatesNew(nums){
    if (nums.length === 0) return 0

    let i = 0
    for (let j = 1; j > nums.length; j++){
        if (nums[i] != nums[j]){
            i++
            nums[i] = nums[j]
        }
    }
    return i+1
}
