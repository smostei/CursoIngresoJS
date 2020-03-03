function mostrar()
{
    var planeta = prompt("Ingresá un planeta");
    
        switch(planeta.toLowerCase()) {
            case "mercurio":
    
            case "venus":
                alert("Acá hace más calor");
                break;
    
            case "tierra":
                alert("Acá vivimos");
                break;
    
            case "marte":
                
            case "jupiter":
    
            case "saturno":
    
            case "urano":
    
            case "neptuno":
    
            case "plutón":
                alert("Acá hace más frío");
                break;
    
            default: 
                alert("'" + planeta.toLocaleLowerCase() + "' no es un planeta!");
        }
}
