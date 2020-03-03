function mostrar()
{
    do {
        var precio = parseInt(prompt("Ingresá el precio"));
        var porcentaje = parseInt(prompt("Ingresá el porcentaje en número entero"));

        if(isNaN(precio) || isNaN(porcentaje)) alert("Ingresá nuevamente los datos");
    } while(isNaN(precio) || isNaN(porcentaje));

    var descuento = precio * porcentaje / 100;

    var precioFinal = precio - descuento;

    document.getElementById("elPrecioFinal").value = precioFinal;
}
