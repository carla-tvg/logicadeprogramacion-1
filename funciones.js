function solicitonumero() {

    var numero1 = parseFloat(prompt("Número 1: "));
    var numero2 = parseFloat(prompt("Número 2: "));
    var numero3 = parseFloat(prompt("Número 3"));

    console.log("Número 1: "+ numero1);
    console.log("Número 2: "+ numero2);
    console.log("Número 3: "+ numero3);

    const numeros =[numero1, numero2, numero3]; //guardo los numeros en un array

    if (numero1 === numero2 && numero2 === numero3) {
        console.log("Los números son iguales.");
    } else {
        // ordenar los números de menor a mayor
        numeros.sort((a, b) => a - b);
    }
    
}