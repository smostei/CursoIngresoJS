function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota = parseInt(Math.random() * 10);
	
	if(nota == 9 || nota == 10) {
		alert("EXCELENTE Nota: " + nota);
	} else if(nota >= 4 && nota <= 8) {
		alert("APROBÓ Nota: " + nota);
	} else {
		alert("Vamos, la proxima se puede! Nota: " + nota);
	}

}//FIN DE LA FUNCIÓN