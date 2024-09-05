function solicitoNumero() {
    var numero1 = parseFloat(prompt("Número 1: "));
    var numero2 = parseFloat(prompt("Número 2: "));
    var numero3 = parseFloat(prompt("Número 3: "));

    console.log("Número 1: " + numero1);
    console.log("Número 2: " + numero2);
    console.log("Número 3: " + numero3);

    const numeros = [numero1, numero2, numero3]; // guardo los numeros en un array

    // variables para los números mayor, menor y del centro
    let mayor, menor, centro;
    let mensaje;

    if (numero1 === numero2 && numero2 === numero3) {
        // SI todos los números son iguales
        mensaje = "Los números son iguales.";
    } else {
        // ordena los números de meno a mayor
        numeros.sort((a, b) => a - b);

        // asigna los valores a menor, centro y mayor
        menor = numeros[0];
        centro = numeros[1];
        mayor = numeros[2];

        // prepara el mensaje para mostrar los resultados
        mensaje = `El número menor es: ${menor}, el número del centro es: ${centro}, y el número mayor es: ${mayor}.`;
    }

    document.getElementById("resultado").textContent = mensaje;
}
