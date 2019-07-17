function mostrar()
{
	var elNumero = prompt("Ingrese un numero");

	while(elNumero < 0 || elNumero > 9){
		elNumero = prompt("Error, Ingrese un numero del 0 al 9.");
	}
	document.getElementById('Numero').value =elNumero;	
}//FIN DE LA FUNCIÓN