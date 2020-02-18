function mostrar()
{
	var contador = 0;
	var acumulador = 0;
	var respuesta = "si";

	while(respuesta != "no") {
		
		acumulador += parseInt(prompt((contador + 1) 
		+ ") Ingrese un número: "));
		
		contador++;
		respuesta = prompt("Desea continuar? si/no");
	}


document.getElementById('suma').value = acumulador;
document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN