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
