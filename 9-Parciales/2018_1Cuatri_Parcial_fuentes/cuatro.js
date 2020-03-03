function mostrar()
{
    do {
        var num1 = parseInt(prompt("Ingresá el primer número"));
        var num2 = parseInt(prompt("Ingresá el segundo número"));

        if(isNaN(num1) || isNaN(num2)) alert("Ingresá de vuelta los datos!");
    } while(isNaN(num1) || isNaN(num2));


    if(num1 == num2) {
        alert("Números concatenados: " + num1.toString() + num2.toString());
        return;
    } 

    if(num1 > num2) {
        alert("La resta es: " + (num1 - num2));
    } else {
        var suma = num1 + num2;
        
        if(suma > 10) {
            alert("La suma es " + suma + " y superó los 10");
        } else {
            alert("La suma es: " + suma);
        }
    }
}
