function mostrar()
{
//tomo la edad
var mesDelAño;
var mesDelAño = document.getElementById('mes').value;
switch (mesDelAño)
{
  case ("Febrero"):
  alert("este mes tiene 28 dias")
  break;
  case ("Enero"):
  case "Mayo":
  case "Julio":
  case ("Octubre"):
  case ("Diciembre"):
  alert ("este mes tiene 31 dias");
  break;
  default:
  alert("este mes tiene 30 dias");





}
//alert (mesDelAño);





}//FIN DE LA FUNCIÓN
