function mostrar()
{
	var contador = 0;
	var negativos = 0;
	var positivos = 0;
	var sumaPositivos = 0;
	var sumaNegativos = 0;
	var ceros = 0;
	var numPares = 0;
	
	//declarar contadores y variables 
	
	while(confirm("Desea ingresar un número?")) {
		
		contador = parseInt(prompt("Ingresar un número: "));

		if(isNaN(contador)) {
			alert("Tenés que ingresar números!");
			return
		} else {
			if(contador > 0) {
				positivos += 1;
				sumaPositivos += contador;
				if(contador % 2 == 0) {
					numPares += 1;
				}
			} else if(contador == 0) {
				ceros += 1;
			} else {
				negativos += 1;
				sumaNegativos += contador;
				if(contador % 2 == 0) {
					numPares += 1;
				}
			}
		}
	}

	alert("Cantidades: \nPositivos: " + positivos +
	"\nNegativos: " + negativos +
	"\nCeros: " + ceros +
	"\nPares: " + numPares);	

	alert("Suma de los positivos: " + sumaPositivos +
	"\nSuma de los negativos: " + sumaNegativos +
	"\nPromedio de positivos: " + (sumaPositivos / positivos) +
	"\nPromedio de negativos: " + (sumaNegativos / negativos) +
	"\nDiferencia entre positivos y negativos: " + (sumaPositivos - sumaNegativos));

}//FIN DE LA FUNCIÓN