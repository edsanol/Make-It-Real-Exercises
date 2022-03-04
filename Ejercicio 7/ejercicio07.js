// Ejercicio 3 (Leetcode) two-sum

/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 let twoSum = function(nums, target) {
    let = aux = 0;
    let arrAux = [];

    for(let i=0; i<nums.length; i++){
        aux = nums[i];
        for(let j=i+1; j<nums.length; j++){
            if(aux + nums[j] === target)
            {
                arrAux.push(i);
                arrAux.push(j);
                return arrAux;
            }
        }
    }
    return null;
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));