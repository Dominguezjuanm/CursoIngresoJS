function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';

	while(respuesta == "si" ){
		contador++;
		
	do{
		
		numero=prompt("ingrese su numero");
		numero=parseInt(numero);
		respuesta=prompt("Desea ingresar otro numero")  
	  } while(isNaN(numero));
		 {
		 suma+=numero;	
		 } 
		if (numero>=0){
			positivo+=numero;
		} else{
			negativo*=numero;
		}
}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN