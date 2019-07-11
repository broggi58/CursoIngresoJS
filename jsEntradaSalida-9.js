/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

var numero1;
var numero2;


function mostrarAumento()
{
  numero1= document.getElementById("sueldo").value
  numero1= parseInt(numero1);
  numero2= (numero1 + (numero1*0,1));
  numero2= parseInt (numero2);
  document.getElementById("resultado")= numero2



}
