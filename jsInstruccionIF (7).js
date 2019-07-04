function mostrar()
{
//tomo la edad  
	var laedad
	var civil

	laedad = document.getElementById('edad').value;
	civil = document.getElementById('estadoCivil').value;
	 if(laedad < 18 && civil != "Soltero"){
	 	alert("es muy pequeño para NO ser soltero");
	 }

	 
	

}//FIN DE LA FUNCIÓN