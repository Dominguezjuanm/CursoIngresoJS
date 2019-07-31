function mostrar()
{
	/*var elSexo;
	elSexo = prompt("Ingrese el sexo: f o m.");
	elSexo= elSexo.toLowerCase();
	while(elSexo !="f" && elSexo!="m"){
		elSexo = prompt("Error,ingrese denuevo el sexo");
	}
	document.getElementById('Sexo').value=elSexo;*/
	var elSexo;

	elSexo = prompt("Ingrese el sexo: f o m.");
	elSexo= elSexo.toLowerCase();
	do{
		elSexo = prompt("Error,ingrese denuevo el sexo");
	}while(elSexo !="f" && elSexo!="m");	
	document.getElementById('Sexo').value=elSexo;
}//FIN DE LA FUNCIÓN