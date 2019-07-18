function mostrar()
{
	var contador = 0;
	var numero;
	var sumaPositivos = 0;
	var elProducto = 1;
	var respuesta = "si";

	while(respuesta == "si"){
			contador++;
		
			numero = prompt("Ingrese un numero");
			numero = parseInt(numero);
			
			while(isNaN(numero)){
				numero= prompt("Error, ingrese un numero");
			}
		if(numero >= 0)
		{
			sumaPositivos += numero;
		}else
			{    
			elProducto *=numero;
			}	
		
		respuesta = prompt("Desea ingresar otro numero?").toLowerCase();
	}
		
		
		document.getElementById('suma').value = sumaPositivos;
		document.getElementById('producto').value = elProducto;
		
//el contador de los negativos se inicia en 0, si no siempre va a dar 0.


	/*var contador=0;
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
document.getElementById('producto').value=negativo;*/

}//FIN DE LA FUNCIÓN