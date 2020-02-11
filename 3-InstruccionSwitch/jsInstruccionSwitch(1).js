function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño) {
    case "Enero": 
    alert("Buen comienzo de año!");   
    break;

    case "Marzo":
    alert("Empiezan las clases!");   
    break;
    
    case "Julio":
    alert("Ya arrancan las vacaciones!");       
    break;

    case "Diciembre":
    alert("Felices fiestas!");   
    break;
}


}//FIN DE LA FUNCIÓN