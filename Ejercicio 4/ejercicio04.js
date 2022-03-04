// Ejercicio 4 Escribir una función llamada ajustarTexto que reciba dos argumentos: un string y un número (que representa una longitud).  
// La función debe retornar la cadena ajustada a la longitud recibida. Si la longitud de la cadena es mayor al número, debes recortar la cadena. 
// De lo contrario agrega espacios en blanco hasta completar la longitud.

function ajustarTexto(str, num){
    str = str.split('');
    let arr = [];
    let i = 0;
    
    while(arr.length < num){
      if(str != "" && arr.length < str.length){
        arr.push(str[i]);
        i++;
      }
      else{
        arr.push(" ");
      }
      
    }
    return arr;
  }
  
  console.log(`${ajustarTexto("", 3)}`) // " " 
  console.log(`${ajustarTexto("hola", 2)}`) // "ho" 
  console.log(`${ajustarTexto("Hola", 0)}`) // "" 
  console.log(`${ajustarTexto("Hola", 5)}`) // "Hola "