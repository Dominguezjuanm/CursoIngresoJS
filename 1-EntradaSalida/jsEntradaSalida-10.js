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
 	var elImporte;
	var descuento;
	var elResultado;

	elImporte= document.getElementById('importe').value;

	elImporte= parseInt(elImporte);
	
	descuento= (elImporte/0,25);
	descuento=parseInt(descuento);
	
	resultado= (elImporte-descuento);

	document.getElementById('resultado').value=resultado;

/*sueldo* 1,25
  (sueldo+sueldo*0,15)
  sueldo + sueldo *15/100
  sueldo*(1+15/100)
  
		*/
}
