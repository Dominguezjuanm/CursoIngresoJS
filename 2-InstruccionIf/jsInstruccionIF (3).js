function mostrar()
{
//tomo la edad  
	var laedad;
	var resultado;
	laedad= document.getElementById('edad').value;
	
	
	if(laedad >= 18){ 
		resultado = ("Usted es mayor de edad");
	}
	else{
		resultado = ("Sos menor");
	}
	alert(resultado);
}//FIN DE LA FUNCIÓN