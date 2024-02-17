//Rotate an Array ny k times where k is non negative
// rotate to the right by k steps
// input : nums=[1,2,3,4, 5, 6 ,7] k=3  >>>>>>output = [5, 6 ,7, 1, 2, 3, 4]
//size = 7 k =3 4, 7

//Time complexity of  O(n)
function rotateArray(nums, k){
    let size = nums.length

    if (k > size){
        k = k % size
    }

    const rotated = nums.splice(size - k, k)
    nums.unshift(...rotated)
    return nums
}

const nums = [1,2,3,4, 5, 6 ,7]
console.log(rotateArray(nums, 3))

//Optimized solution Jones
//[1, 2, 3,4 5, 6, ,7] >>>>>[7, 6, 5, 1, 2, ,3 , 4] >>>>> [5, 6, 7, ,4, 3, 2,1] >>> [5, 6, 7, 1, 2, 3, 4]
function rotateArrayOptimised(nums, k){
    let size = nums.length
    if (k > size){
        k = k% size
    }
    reverse(nums, 0, size -1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, size -1)

    return nums

}

// [1, 2,3 ,4 ]
// left = 0, right = 3
// temp = 1
// nums[0] = 4
// nums[3] = 1
// left = 1 right=2
// [4 ,2, 3, 1]
// temp = 2
// nums[1]= 3
// nums[2]= 2
function reverse(nums, left, right){
    while(left < right){
        let temp = nums[left]
        nums[left++] = nums[right]
        nums[right--] = temp
    }
}

