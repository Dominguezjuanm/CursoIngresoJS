function mostrar()
{
//tomo la edad  
	var laedad;

	laedad= document.getElementById('edad').value;

	if(laedad < 13){
		alert("Sos un niño")
	}else{
		if(laedad < 17){
			alert("Sos adolescente")
		}else{
			alert("Sos mayor de edad")
		}
	}




}//FIN DE LA FUNCIÓN