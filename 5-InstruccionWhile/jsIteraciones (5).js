function mostrar()
{

var sexo = prompt("ingrese f ó m .");

while(sexo.toLowerCase() != "f" && sexo.toLowerCase() != "m") {
    sexo = prompt("ingrese f ó m, por favor!");
}

document.getElementById('Sexo').value = sexo;

}//FIN DE LA FUNCIÓN