function mostrar()
{
	var preciototal;
	var precioconpropina;
	var preciofinal;
	
	preciototal = document.getElementById('elPrecioFinal').value;
	preciofinal= parseInt(preciofinal);
	
	precioconpropina = (preciototal *10/100);
	preciofinal=(precioconpropina+ 0,21);		

	alert("El total a pagar es "+ preciofinal);

}
