function mostrar()
{
//tomo la edad  
var laedad;

	laedad= document.getElementById('edad').value;
	
	
	if(laedad >= 18){ 
		alert("Usted es mayor de edad");
	}
	else{
		alert("Sos menor");
	}
}//FIN DE LA FUNCIÓN