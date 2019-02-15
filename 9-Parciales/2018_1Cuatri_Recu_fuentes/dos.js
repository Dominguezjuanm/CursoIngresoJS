function mostrar()
{
	var preciocompra;
	var descuento;
	var preciofinal;
	var precioconiva;
	
	preciocompra = prompt("Ingrese el precio de su compra").value;
	preciocompra= parseint(preciocompra);
	descuento = (preciocompra* 0,10);

	preciofinal= (preciocompra- descuento);
	
	precioconiva =( preciofinal+ 21/100);

	alert("tu compra es de $" + preciocompra+ " tenes un descuento del 10% queda en $"+ preciofinal+", mas el iva es $"+precioconiva);



}
