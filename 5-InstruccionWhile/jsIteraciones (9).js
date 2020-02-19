function mostrar()
{

	var contador = 0;
	var max = 0;
	var min = 0;
	// declarar variables

	contador = parseInt(prompt("Ingresa un número: "));	
	
	if(isNaN(contador)) {
		return;
	}

	max = contador;
	min = contador;
	
	while(confirm("Desea agregar un número?")) {
		contador = parseInt(prompt("Ingresa un número: "));

		if(isNaN(contador)) {
			return;
		}		

		if(contador > max) {
			max = contador;
		} else {
			min = contador;
		}
	}

	document.getElementById("maximo").value = max;
	document.getElementById("minimo").value = min;

}//FIN DE LA FUNCIÓN