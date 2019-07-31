function mostrar()
{
	/*var elNumero = prompt("Ingrese un numero");

	while(elNumero < 0 || elNumero > 9){
		elNumero = prompt("Error, Ingrese un numero del 0 al 9.");
	}
	document.getElementById('Numero').value =elNumero;*/

	

	var elNumero = prompt("Ingese un numero");

	do{
		elNumero = prompt("Error, Ingrese un numero del 0 al 9.");
		document.getElementById('Numero').value = elNumero;
	}while(elNumero < 0 || elNumero > 9);	
	
		
}//FIN DE LA FUNCIÓN