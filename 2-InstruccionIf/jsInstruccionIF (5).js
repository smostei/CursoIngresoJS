function mostrar()
{
//tomo la edad  
    var edad = document.getElementById("edad").value;

    if(!(edad <= 17 && edad >= 13)) {
        alert("NO es adolescente");
} 

}//FIN DE LA FUNCIÓN