/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/


function Rectangulo () 
{  var largo;
    largo=document.getElementById ("Largo").value;
    largo = parseInt (largo);
    
    var ancho;
    ancho=document.getElementById ("Ancho").value;
    ancho=parseInt (ancho);
    var radio;
    radio =document.getElementById ("Radio").value;
    radio =parseInt (radio);
    var alambre;
    alambre = 3
    alambre =parseInt(alambre);
    var cal;
    cal =3
    cal =parseInt (cal);
    var cemento 
    cemento=2
    cemento=parseInt (cemento); 
    alert (largo * ancho * alambre);


}
function Circulo () 
{
    var largo;
    largo=document.getElementById ("Largo").value;
    largo = parseInt (largo);
    
    var ancho;
    ancho=document.getElementById ("Ancho").value;
    ancho=parseInt (ancho);
    var radio;
    radio =document.getElementById ("Radio").value;
    radio =parseInt (radio);
    var alambre;
    alambre = 3
    alambre =parseInt(alambre);
    var cal;
    cal =3
    cal =parseInt (cal);
    var cemento 
    cemento=2
    cemento=parseInt (cemento);
	alert( radio * alambre);
}
function Materiales () 
{
    var largo;
largo=document.getElementById ("Largo").value;
largo = parseInt (largo);

var ancho;
ancho=document.getElementById ("Ancho").value;
ancho=parseInt (ancho);
var radio;
radio =document.getElementById ("Radio").value;
radio =parseInt (radio);
var alambre;
alambre = 3
alambre =parseInt(alambre);
var cal;
cal =3
cal =parseInt (cal);
var cemento 
cemento=2
cemento=parseInt (cemento);
    alert("Se necesitan"+ ancho * largo * cemento +"bolsas de cemento y "+ ancho * largo * cal +"bolsas de cal" );
    
}