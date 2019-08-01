function mostrar()
{
	var repeticiones = prompt("ingrese el número de repeticiones");
		repeticiones = parseInt(repeticiones);
		while(isNaN(repeticiones)){
			repeticiones = prompt("ingrese el número de repeticiones");
			repeticiones = parseInt(repeticiones);
		}

	for(var i = 0; i < repeticiones;i++){
		document.write("Hola UTN FRA"+"<br>");
		//console.log("Hola UTN FRA");
	}
	//for(asd=cantidad; cantidad>0; asd--)

}//FIN DE LA FUNCIÓN