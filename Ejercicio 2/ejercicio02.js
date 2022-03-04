// EJERCICIO 2 Escribe una función llamada frecuencias que reciba una cadena de texto y retorne 
// un objeto con el número de veces que aparece cada caracter (exceptuando el espacio en blanco)

function frecuencias(str){
    let frecuencia = {};
    str = str.trim().toLowerCase().split(' ');
  
    for (let i = 0; i < str.length; i++){
      for(let j = 0; j < str[i].length; j++){
        let char = str[i][j];
        
        if(!frecuencia[char]){
          frecuencia[char] = 1;
        }
        else{
          frecuencia[char] += 1;
        }
      }
    }
    return frecuencia;
  }
  
  console.log(frecuencias("Hola mundo"));
  // { h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }
  
  console.log(frecuencias("anita lava la tina"));
  // { a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }