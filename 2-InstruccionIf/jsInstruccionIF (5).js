function mostrar()
{
//tomo la edad  
	/*var laedad;

	laedad= document.getElementById('edad').value;
	
	
	if(laedad < 13 || laedad > 18){ 
		alert("No sos un adolescente")
	}*/
	var precio = document.getElementById('edad').value;
	if (precio < 25)
	{
		alert("es barato");
	}else
		{
		if(precio>75)
		{
			alert("Es caro");
		}else
			{
				alert("bien");
			}
	}

}//FIN DE LA FUNCIÓN