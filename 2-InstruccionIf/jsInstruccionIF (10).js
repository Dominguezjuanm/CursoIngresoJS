function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	var resultado;

	nota =Math.floor(Math.random() * 10)+1;
		if(nota>8){
			resultado = " EXCELENTE"
		}else{
			if(nota>3){
				resultado = " APROBÒ";
			}else{
			resultado = " Vamos, la proxima se puede"
			}
		}
		alert(nota + mensaje);
}//FIN DE LA FUNCIÓN