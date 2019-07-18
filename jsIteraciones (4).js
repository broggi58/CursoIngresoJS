function mostrar()
{

 /* var numero = prompt("ingrese un número entre 0 y 10.");





  while (  numero >=0 && numero <=9 )
  {
    numero = parseInt(numero);

      document.getElementById("Numero").value=numero

    break;
  }
  if (numero <0 || numero >9)
  {
    alert("Error: Inserte un numero del 0 al 9");

  }*/
  do
  {
    var numero = prompt("ingrese un número entre 0 y 10.");
    numero = parseInt(numero);

      document.getElementById("Numero").value=numero


    if (numero <0 || numero >9)
  {
    numero = prompt("ingrese un número entre 0 y 10.");
  }

  }while (numero >=0 && numero <=9);


}//FIN DE LA FUNCIÓN
