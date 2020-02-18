function mostrar()
{

	var contador = 0;
	var positivo = 0;
	var negativo = 1;
	
	var respuesta='si';

	while(respuesta != "no") {
		contador = parseInt(prompt("Ingresá un número: "));

		if(contador > 0) {
			positivo += contador;
		} else {
			negativo *= contador;
		}

		respuesta = prompt("Desea continuar? si/no");
	}

document.getElementById('suma').value = positivo;
document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN