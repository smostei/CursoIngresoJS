function mostrar()
{	
	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));

	while(numero < 0 || numero > 10 || isNaN(numero)) {
		numero = parseInt(prompt("ingrese un número entre 0 y 10!"));		
	}

	document.getElementById("Numero").value = numero.toString();		
	
}//FIN DE LA FUNCIÓN