/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
 
 /*	var importe;
	var resultado;
	var descuento;

	importe= getElementById('FormIngreso').value;
	parseInt(importe);

	descuento= (importe/0.25);
	parseInt(descuento);
	
	resultado= (importe-descuento);

	document.getElementById('resultado').value=resultado;
*/
 	var importe;
	var descuento;
	var resultado;

	importe= document.getElementById('FormIngreso').value;

	importe= parseInt(importe);
	
	descuento= (importe/0,25);
	descuento=parseInt(descuento);
	
	resultado= (importe-descuento);

	document.getElementById('resultado').value=resultado;

		
}
