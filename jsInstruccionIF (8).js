function mostrar()
{
//tomo la edad  
	var laEdad;
	var civil;
	laEdad = document.getElementById('edad').value;
	civil =document.getElementById('estadoCivil').value;
	if( laEdad >=18 && civil =="Soltero")
	{
		alert("Es soltero y no es menor");
	}
	


}//FIN DE LA FUNCIÓN