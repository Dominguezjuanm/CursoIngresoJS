function mostrar()
{
//tomo la edad  
	var laedad;

	laedad= document.getElementById('edad').value;
	
	
	if(laedad < 13 || laedad > 18){ 
		alert("No sos un adolescente")
	}

}//FIN DE LA FUNCIÓN