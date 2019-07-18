function Mostrar()
{
    var dia;
    dia = prompt("dia");
    switch (dia)
    {
        case ("Sabado"):
        case ("Domingo"):
            alert ("Es fin de semana");
            break;
        case ("Lunes"):
        case ("Martes"):
        case ("Miercoles"):
        case ("Jueves"):
        case ("Viernes"):
            alert ("A trabajar");
            break;
            
            
    }
}
