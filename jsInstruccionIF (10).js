function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	var mensaje

	nota =Math.floor(Math.random() * 10)+1;
		if(nota>8){
			mensaje= " EXCELENTE"
		}else{
			if(nota>3){
				mensaje = " APROBÒ";
			}else{
			mensaje= " Vamos, la proxima se puede"
			}
		}
		alert(nota + mensaje);
}//FIN DE LA FUNCIÓN