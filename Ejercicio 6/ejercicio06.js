// Ejercicio 6 (Leetcode) move-zeroes

/*
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 let moveZeroes = function(nums) {
    let aux1;
    let aux2;
    let cont = 0;
  
    while(cont < nums.length){
        for(let i=nums.length; i>=0; i--){ // Se recorre de atrás hacía adelante, para no entrar en un bucle infinito
        if(nums[i] == 0 && i<nums.length-1){ // Si el cero ya está en la ultima posición, no necesito desplazarlo
            aux1 = nums[i];
            aux2 = nums[i+1];

            nums[i] = aux2;
            nums[i+1] = aux1;
        }
    
        }
        cont++;
    }
    return nums;
}; 

console.log(moveZeroes([0,1,0,3,12]));