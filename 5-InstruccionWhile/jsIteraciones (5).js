function mostrar()
{
	var elSexo;
	elSexo = prompt("Ingrese el sexo: f o m.");
	while(elSexo !="f" && elSexo!="m"){
		elSexo = prompt("Error,ingrese denuevo el sexo");
	}
	document.getElementById('Sexo').value=elSexo;



}//FIN DE LA FUNCIÓN