// EJERCICIO 3 Crea una función llamada caracteresEnComun que recibe dos argumentos: str1 y str2. 
// La función debe retornar un arreglo con todos los caracteres que las dos cadenas tienen en común.

function caracteresEnComun(str1, str2){
    let arr = [];
    let size = 0;
    let str;
    let strF = "";

    if(str1.length <= str2.length){
        size = str1.length;
        str = str1.split("");
        strF = str2;
    }
    else{
        size = str2.length;
        str = str2.split("");
        strF = str1;
    }
    
    for(let i=0; i<size; i++){
      if(strF.includes(str[i])){
        arr.push(str[i]);
      }
    }
    return arr;
  }
  
  console.log(caracteresEnComun("Hola", "Mundo")); // ["o"]
  console.log(caracteresEnComun("German", "Gabriela")); // ["G", "e", "r", "a"]
  console.log(caracteresEnComun("Hola", "Bye")); // []