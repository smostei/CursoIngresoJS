function mostrar()
{

var clave = prompt("ingrese el número clave.");
var intentos = 0;

while(clave.toLowerCase() != "utn750") {

    intentos++;
    if(intentos == 3) {
        alert("Intentos maximos, la pinchaste");
        break;
    }

    clave = prompt("Clave incorrecta, repita");    
}

if(clave.toLowerCase() == "utn750") {
    alert("Clave exitosa!");    
}

}//FIN DE LA FUNCIÓN
