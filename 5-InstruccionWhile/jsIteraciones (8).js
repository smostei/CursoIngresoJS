function mostrar()
{

	var contador = 0;
	var positivo = 0;
	var negativo = 1;
	
	while(confirm("Desea ingresar un número?")) {
		contador = parseInt(prompt("Ingresá un número: "));

		if(contador >= 0) {
			positivo += contador;
		} else {
			negativo *= contador;
		}
	}

document.getElementById('suma').value = positivo;
document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN