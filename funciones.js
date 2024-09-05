function solicitonumero() {
    var numero1 = parseFloat(prompt("Número 1: "));
    var numero2 = parseFloat(prompt("Número 2: "));
    var numero3 = parseFloat(prompt("Número 3: "));

    console.log("Número 1: " + numero1);
    console.log("Número 2: " + numero2);
    console.log("Número 3: " + numero3);

    const numeros = [numero1, numero2, numero3]; // guardo los numeros en un array

    let mensaje;

    if (numero1 === numero2 && numero2 === numero3) {
        mensaje = "Los números son iguales.";
    } else {
        // ordenar los números de menor a mayor
        numeros.sort((a, b) => a - b);
        mensaje = "Los números ordenados son: " + numeros.join(", ");
    }

    //muestro resultado con id="resultado"
    document.getElementById("resultado").textContent = mensaje;
}
