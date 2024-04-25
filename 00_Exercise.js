
 /* EJERCICIO
 Cree una función JS que acepte 4 argumentos. 
 Suma los dos primeros argumentos, luego los dos segundos y multiplícalos. 
 Si el número creado es mayor que 50, la consola registra "¡El número es mayor que 50!". 
 Si es más pequeño, la consola registra "¡El número es menor que 50!" */


 function checkNumeros(num1, num2, num3, num4){
    total = (num1 + num2) * (num3 + num4);
    
   let mensaje = total > 50 ? "¡El número es mayor que 50!" : "¡El número es menor que 50!";
    console.log(mensaje);
}


checkNumeros(4, 10, 6, 9); // Output "¡El número es mayor que 50!"
checkNumeros(3, 2, 8, 1); // Output: "¡El número es menor que 50!"


