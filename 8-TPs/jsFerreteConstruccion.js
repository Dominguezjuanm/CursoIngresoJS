/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var	ancho;
	var resultado;
	largo = document.getElementById('Largo').value;
	ancho = document.getElementById('Ancho').value;
	largo = parseInt(largo);
	ancho = parseInt(ancho);
	resultado = ((largo*2)+(ancho*2))*3; 
	MostrarMensaje("La cantidad de alambre a comprar es: "+resultado);
}
function Circulo () 
{
	var elRadio;
	elRadio = document.getElementById('Radio').value;
	resultado = (2*Math.PI*elRadio)*3;
	MostrarMensaje("La cantidad de alambre a comprar es; "+resultado);
}
function Materiales () 
{
	var largo;
	var	ancho;
	var resultado;
	var cemento;
	var cal;
	largo = document.getElementById('Largo').value;
	ancho = document.getElementById('Ancho').value;
	largo = parseInt(largo);
	ancho = parseInt(ancho);
	cemento = ((largo*2)+(ancho*2))*2;
	cal = ((largo*2)+(ancho*2))*3;
	MostrarMensaje("Se necesitan "+cemento+" bolsas de cemento y "+cal+" bolsas de cal");	
}
function MostrarMensaje(resultado)
{
	alert(resultado);
}
//Para calcular con PI se usa Math.PI.