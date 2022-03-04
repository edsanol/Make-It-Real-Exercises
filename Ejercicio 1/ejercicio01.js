// EJERCICIO 1 Escribe una función llamada numDuplicados que reciba un string 
// y retorne el número de caracteres que aparecen más de una vez.

function numDuplicados(str) {
  let obj = {};
  str = str.split("");
  let cont = 0;
  let i = 0;

  while (i < str.length) {
    let char = str[i];

    if (!obj[char]) {
      obj[char] = 1;
    } 
    else {
      obj[char] += 1;
    }
    i++;
  }

  for (let key in obj) {
    if (obj[key] > 1) {
      cont++;
    }
  }

  return cont;
}

console.log(numDuplicados("abcaa")); // 1
console.log(numDuplicados("abab")); // 2
console.log(numDuplicados("abc")); // 0
