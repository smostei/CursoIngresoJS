function mostrar()
{

	var contador = 0;
	var max = 0;
	var min = 0;
	// declarar variables
	
	var respuesta = 'si';

	contador = parseInt(prompt("Ingresa un número: "));	

	max = contador;
	min = contador;

	respuesta = prompt("Desea continuar? si/no");
	
	while(respuesta != 'no') {
		contador = parseInt(prompt("Ingresa un número: "));

		if(contador > max) {
			max = contador;
		} else {
			min = contador;
		}

		respuesta = prompt("Desea continuar? si/no");
	}

	document.getElementById("maximo").value = max;
	document.getElementById("minimo").value = min;

}//FIN DE LA FUNCIÓN