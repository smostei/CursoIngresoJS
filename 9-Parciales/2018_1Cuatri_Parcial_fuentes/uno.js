
function mostrar()
{
    
    do {
        var largo = parseInt(prompt("Ingresá el largo del rectángulo"));
        var ancho = parseInt(prompt("Ingresá el ancho del rectángulo"));

        if(isNaN(largo) || isNaN(ancho)) alert("Ingresá de vuelta los datos!");

    } while(isNaN(largo) || isNaN(ancho));

    var perim = largo * 2 + ancho * 2
    alert("El perímetro del rectángulo es: " + perim);
}
