function mostrar()
{
	var preciototal;
	var preciofinal;
	
	preciototal = document.getElementById('elPrecioFinal').value;

	preciofinal= (preciototal *10/100);
	
	alert("El total a pagar es "+ preciofinal);

}
