function mostrar()
{
	var preciodecompra;
	var descuento;
	var preciofinal;
	var precioconiva
	
	preciodecompra = document.getElementById('elNombre').value;

	
	descuento = (preciodecompra*0,10);

	preciofinal = (Preciodecompra - descuento);
	
	precioconiva =( preciofinal+ 0,21);

	alert("tu compra es de "+ preciodecompra +" tenes un descuento del 10% queda en "+ preciofinal + ", mas el iva es "+ precioconiva); 



}
