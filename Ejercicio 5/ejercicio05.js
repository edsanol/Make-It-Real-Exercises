// Ejercicio 5 (Leetcode) Anagram

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    s = s.trim().toLowerCase().split("").sort();
    t = t.trim().toLowerCase().split("").sort();

    if(s.join("") === t.join("")) {
        return true;
    }
    return false;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));