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
