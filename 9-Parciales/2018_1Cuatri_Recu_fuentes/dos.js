function mostrar()
{
	var preciocompra;
	var preciofinal;
	var precioconiva;
	
	preciocompra = prompt("Ingrese el precio de su compra").value;
	preciocompra= parseint(preciocompra);
	
	preciofinal= (preciocompra *10/100);
	
	precioconiva =( preciofinal+ 21/100);

	alert("tu compra es de $" + preciocompra + " tenes un descuento del 10% queda en $"+ preciofinal +", mas el iva es $"+ precioconiva);



}
