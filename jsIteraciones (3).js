function mostrar()
{



/*while (clave != "utn750")
{
  alert ("error ingrese clave nuevamente");
  break;

}*/
var cont=0;
var error = false


do {
  var clave = prompt("ingrese el número clave.");
  cont = cont +1
  if(cont==3)
  {
    break;

  }

}while ( clave !="utn750");
if(error)
{
  alert("error");
}
else {
  alert("exito");

}


}//FIN DE LA FUNCIÓN
