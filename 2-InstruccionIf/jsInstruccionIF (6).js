function mostrar()
{
//tomo la edad  
	var laedad;
	var resultado;
	laedad= document.getElementById('edad').value;

	if(laedad < 13){
		resultado = ("Sos un niño")
	}else{
		if(laedad < 17){
			resultado = ("Sos adolescente")
		}else{
			resultado = ("Sos mayor de edad")
		}
	}
	alert(resultado);



}//FIN DE LA FUNCIÓN